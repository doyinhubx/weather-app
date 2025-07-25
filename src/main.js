window.fetchCurrentWeather = async function () {
  const city = document.getElementById('city-input').value.trim() || 'London';
  const url = `https://wttr.in/${city}?format=j1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const current = data.current_condition[0];
    const temp = current.temp_C;
    const desc = current.weatherDesc[0].value;

    document.getElementById('current-weather').textContent =
      `${city}: ${temp}°C - ${desc}`;
  } catch (error) {
    console.error('Error fetching weather:', error);
    document.getElementById('current-weather').textContent = 'Unable to fetch weather.';
  }
};