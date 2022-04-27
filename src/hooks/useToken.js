import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        (async function getToken() {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://radiant-cove-18662.herokuapp.com/login', { email });
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        })();
    }, [user]);
    return [token];
}

export default useToken;