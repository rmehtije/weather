import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getWeather, getForecast, defaultSearchParams } from '../services/apiService';
import ErrorModal from '../ErrorModal';

function ExportDataForm() {

    const [errorMessage, setErrorMessage] = useState(null);

    const modes = ['json', 'html', 'xml'];
    const endpoints = ['Current', 'Forecast'];

    const handleSubmit = (event) => {
        event.preventDefault();

        const mode = event.target.mode.value;
        const endpoint = event.target.endpoint.value;

        if (!endpoint) {
            setErrorMessage('Please choose endpoint');
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
                setErrorMessage(error.message);
            });
    };

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
            <ErrorModal message={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
    );
}

export default ExportDataForm;
