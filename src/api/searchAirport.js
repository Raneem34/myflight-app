const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export const searchAirport = async (query) => {
  debugger;
  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${query}&locale=en-US`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error("Error Search Airports:", error);
    return null;
  }
};
