import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getWeater, defaultSearchParams } from '../services/apiService';

function SearchForm() {

    const units = [
        'standard',
        'metric',
        'imperial',
    ];

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fi', label: 'Finnish' },
        { code: 'ru', label: 'Russain' },
        { code: 'sv', label: 'Swedish' },
        { code: 'zh_cn', label: 'Chinese Simplified' },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event);
        
        const data = {
            lat: event.target.lat.value,
            lon: event.target.lon.value,
            units: event.target.units.value,
            lang: event.target.lang.value,
        };

        const weather = await getWeater(data);
        const response = await weather.json();
        console.log('response', response);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
                <Form.Label>Latitude</Form.Label>
                <Form.Control type="text" name="lat" placeholder="41.92734" defaultValue={defaultSearchParams.lat} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Longetude</Form.Label>
                <Form.Control type="text" name="lon" placeholder="2.179934" defaultValue={defaultSearchParams.lon} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Units of measurement</Form.Label>
                {units.map((unit, i) => (
                    <Form.Check
                        type="radio"
                        id={unit}
                        label={unit}
                        key={unit}
                        name="units"
                        value={unit}
                        defaultChecked={defaultSearchParams.unit === unit}
                    />
                ))}
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Language</Form.Label>
                <Form.Select name="lang" defaultValue={defaultSearchParams.lang}>
                    {languages.map((language, i) => (
                        <option key={language.code} value={language.code}>{language.label}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SearchForm;
