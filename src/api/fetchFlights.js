const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export const fetchFlights = async (
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  date,
  returnDate,
  adults,
  childrens,
  infants
) => {
  const url = new URL(
    "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights"
  );

  const params = {
    originSkyId,
    destinationSkyId,
    originEntityId,
    destinationEntityId,
    date,
    returnDate,
    adults,
    childrens,
    infants,
    limit: 100,
    cabinClass: "economy",
    sortBy: "best",
    currency: "USD",
    market: "en-US",
    countryCode: "US",
  };

  Object.keys(params).forEach((key) => {
    if (params[key] == null) delete params[key]; 
  });


  url.search = new URLSearchParams(params).toString();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error fetching flights: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching flights:", error);
    return { error: error.message };
  }
};
