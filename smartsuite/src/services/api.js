export const fetchWeatherData = async (lat, lon) => {
  const apiKey = "8ab325d769afb64bf9a763d06862d8ed";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error response from API:", errorData);
    throw new Error(
      `Request failed with status ${response.status}: ${errorData.message}`
    );
  }

  const data = await response.json();
  return data;
};
