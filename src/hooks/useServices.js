import { useEffect, useState } from 'react';

const useServices = () => {

    const [services, setServices] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // fetch('http://localhost:5000/service')
        //     .then(res => res.json())
        //     .then(data => setServices(data))
        //     .catch(error => setError(error))

        //or
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:5000/service');
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

    return [services, error, setServices];

}

export default useServices;