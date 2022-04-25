import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';


const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Akbar the greate',
    //     email: 'akbar@momo.taj',
    //     address: 'Tajmohol Road Md.pur',
    //     phone: '017111111111'
    // })

    // const handleAddChange = e => {
    // const { address, ...rest } = user;
    // const newAddress = e.target.value;
    // const newUser = { address: newAddress, ...rest };
    // setUser(newUser);

    //or
    //     setUser({ ...user, address: e.target.value });
    // }

    const handlePlaceOrder = e => {
        e.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }

        axios.post('http://localhost:5000/order', order)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    toast('Your order booked!');
                    e.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name="name" id="name" placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" id="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" id="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="address" placeholder='address' required autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" id="phone" placeholder="phone" required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;