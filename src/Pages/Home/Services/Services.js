import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, error] = useServices();
    return (
        <div id='services'>
            <h1 className='services-title mt-5'>Our Services:{services.length}</h1>
            <p style={{ color: 'red' }}>{error}</p>
            <div className='services-container'>
                {
                    services.map(service => <Service service={service} key={service._id} />)
                }
            </div>
        </div>
    );
};

export default Services;