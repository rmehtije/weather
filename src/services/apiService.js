const apiUrl = 'https://api.openweathermap.org/data/2.5';
const apiKey = process.env.REACT_APP_API_KEY;

export const defaultSearchParams = {
    lat: 58.5953,
    lon: 25.0136,
    units: 'metric',
    lang: 'en',
};

export async function getWeather(data = null) {
    const params = new URLSearchParams({
        ...(data || defaultSearchParams),
        appid: apiKey,
    });
    return await fetch(`${apiUrl}/weather?${params}`);
}

export async function getForecast(data = null) {
    const params = new URLSearchParams({
        ...(data || defaultSearchParams),
        appid: apiKey,
    });
    return await fetch(`${apiUrl}/forecast?${params}`);
}