import { useState } from "react";
import { fetchFlights } from "../api/fetchFlights";
import { formatDate } from "../utils/formatDate";

const useFlights = () => {
  const [flights, setFlights] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (
    origin,
    destination,
    departureDate,
    returnDate,
    passengers
  ) => {
    setLoading(true);
    setError(null);
    setFlights([]);

    try {
      const { skyId: originSkyId, entityId: originEntityId } =
        origin.current || origin;
      const { skyId: destinationSkyId, entityId: destinationEntityId } =
        destination.current || destination;
      const { adults, childrens, infants } = passengers;

      const formattedDepDate = departureDate ? formatDate(departureDate) : null;
      const formattedReturnDate = returnDate ? formatDate(returnDate) : null;

      const { data } = await fetchFlights(
        originSkyId,
        destinationSkyId,
        originEntityId,
        destinationEntityId,
        formattedDepDate,
        formattedReturnDate,
        adults,
        childrens,
        infants,
      );

      if (data?.itineraries?.length) {
        setFlights(data.itineraries);
      } else {
        setError("No flights found");
      }
    } catch (err) {
      setError("An error occurred while fetching flights.");
    } finally {
      setLoading(false);
    }
  };

  return { flights, loading, error, handleSearch };
};

export default useFlights;
