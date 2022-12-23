import { useEffect } from 'react';
import TimeSelector from "./TimeSelector";
import Map from "./Map";
import { getWeater } from '../../services/apiService';

function Now() {

    useEffect(() => {
        (async function () {
            const weather = await getWeater();
            const response = await weather.json();
            console.log('response', response);
        })()
    }, []);

    return (
        <>
            <TimeSelector id="now" />
            <Map />
        </>
    );
}

export default Now;