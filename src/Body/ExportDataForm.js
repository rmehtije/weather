import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getWeather, getForecast, defaultSearchParams } from '../services/apiService';

function ExportDataForm() {

    const modes = ['json', 'html', 'xml'];
    const endpoints = ['Current', 'Forecast'];

    const handleSubmit = (event) => {
        event.preventDefault();

        const mode = event.target.mode.value;
        const endpoint = event.target.endpoint.value;

        if (!endpoint) {
            alert('Please choose endpoint');
            return;
        }

        const get = endpoint === 'Current' ? getWeather : getForecast;

        get({
            ...defaultSearchParams,
            mode,
        })
        .then((response) => response.text())
        .then((data) => window.open('about:blank').document.body.append(data));
    };

    return (
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
    );
}

export default ExportDataForm;
