import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // fetch('services.json')
        //     .then(res => res.json())
        //     .then(data => setServices(data))
        //     .catch(error => setError(error))

        //or
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'services.json');
        xhr.responseType = "json";
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();
        xhr.onload = () => {
            if (xhr.status >= 400) {
                setError('Something Went Wrong!!')
            }
            else {
                const result = xhr.response;
                setServices(result);
            }
        }
        xhr.onerror = () => {
            setError('Something Went Error! Please Fixed the network');
        }
    }, []);

    return (
        <div id='services'>
            <h1 className='services-title mt-5'>Our Services:{services.length}</h1>
            <p style={{ color: 'red' }}>{error}</p>
            <div className='services-container'>
                {
                    services.map(service => <Service service={service} key={service.id} />)
                }
            </div>
        </div>
    );
};

export default Services;