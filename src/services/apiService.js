const apiUrl = "https://api.openweathermap.org/data/2.5";

// process - eto global'nyj object v kotorqm hranitsa informacija o servere.
// svojstvo .env hranit v sebe vse peremennqje nashej sredy.
// Peremennqje my hranim v faile '.env'.
// Peremennqe my nazqvajem s slovo 'REACT_APP_' dlja togo chtoby react ih v sebja podtjanul.
const apiKey = process.env.REACT_APP_API_KEY;

export const defaultSearchParams = {
  lat: 58.5953,
  lon: 25.0136,
  units: "metric",
  lang: "en",
};
// dlja zaprosov na server ispolzujutsa asynhonnqje funkcqii.
// Oni prednaznachenny dlja raboty s Promise (obeshanijami).
// zapros 'fetch' vozvrashajet Promise so statusom 'pending'.
// blagodorja kljuchevomu slovu 'await' my govorim nashemu serveru chto my ozhqdajem otvet.
// Posle poluchenija otveta s servera, Promise poluchajet status libo 'fullfiled' libo 'rejected'
// chto oznochajet libo vsjo horosho libo proizoshla oshibka.
// obrabotka statusov proishodit v try {} catch();
// 'await' mozhet ispolzovatsaj tolko v funkcqii asynhronnoj 'async' i tolko s Promise.
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
