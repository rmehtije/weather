import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getWeather, getForecast, defaultSearchParams } from '../services/apiService';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../services/stateService';

function ExportDataForm() {
    console.log('ExportDataForm');

    const modes = ['json', 'html', 'xml'];
    const endpoints = ['Current', 'Forecast'];

    const dispatch = useDispatch();

    // obrabotchik eventa eto prosto funkcqja kotoraja prinemajet kak argument object sobitija
    // i prineto nazqvat' obrabot4iki s slobo 'handle'.
    // v event object peredajotsa element s kotorqm proizoshlo sobitije, hranitsa ono v svojste 'target'.
    const handleSubmit = (event) => {
        // preventDefault eta funcqja kotoraja otkljuchajet dejstvije sobitija kotoroe u nego po umolchaniju.
        // Primer: dejstvije u onSubmit po umolchaniju otpravka dannyh na server. 4erez GET method.
        event.preventDefault();

        const mode = event.target.mode.value;
        const endpoint = event.target.endpoint.value;

        if (!endpoint) {
            dispatch(setErrorMessage('Please choose endpoint'));
            return;
        }

        const get = endpoint === 'Current' ? getWeather : getForecast;

        get({
            ...defaultSearchParams,
            mode,
        })
            .then(async (response) => {
                if(!response.ok) {
                    const objectData = await response.json();
                    throw Error(objectData.message);
                }
                const data = await response.text();
                window.open('about:blank').document.body.append(data);
            })
            .catch((error) => {
                dispatch(setErrorMessage(error.message));
            });
    };
    // onSubmit eto slushatel' sobitja i trigger obrabotchika sobytija.
    // Vsjo 4to delajet pol'zovatel' na nashem sajte vsjo jevljajetsa sobytijem.
    // Pol'zovatel'no 4toto sdelal a brauzer peredal eto nashemu projektu.
    // v nashem projekte slushateli zapuskajut obrabot4iki sobytij.
    // brauzer peredajot nam object s dannymi dannogo sobitija. (event)
    // jest ogrnomnoe koli4estvo slushatelej i vse nazvanija nachinajutsa s slovo 'on'
    return (
        <>
            <Form onSubmit={handleSubmit} className="mt-4">
                <h5 className="mb-5">Export</h5>
                <Form.Group>
                    <Form.Label>Export type</Form.Label>
                    <Form.Select name="mode" defaultValue="json">
                        {modes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4">
                    <Form.Label>Endpoint</Form.Label>
                    {endpoints.map((endpoint) => (
                        <Form.Check
                            key={endpoint}
                            name="endpoint"
                            value={endpoint}
                            type="radio"
                            label={endpoint}
                        />
                    ))}
                </Form.Group>
                <Button className="w-100 mt-4" variant="warning" type="submit">
                    Export
                </Button>
            </Form>
        </>
    );
}

export default ExportDataForm;
