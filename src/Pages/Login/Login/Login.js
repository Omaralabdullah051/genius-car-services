import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-center'>Error:{error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);

        //same as --
        //const email = document.getElementById("email").value;
        //const passowrd = document.getElementById("password").value;
        //console.log(email,password);
        //but in react we need to use useRef hook to access dom element.

        await signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('send email');
        }
        else {
            toast('please enter your email address');
        }
    }

    if (loading || sending) {
        return <Loading />
    }

    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="login" />
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='text-center'>New to Genius Car?<Link to="/register" className='text-primary text-decoration-none'>Please Register</Link></p>
            <p className='text-center'>Forget password?<button onClick={resetPassword} className='text-primary text-decoration-none btn btn-link'>Reset Password</button></p>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;