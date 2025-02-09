import React from "react";
import { HomeContainer, Header } from "./Home.style.js";
import FlightSearchForm from "../FlightSearchForm/FlightSearchForm.jsx";
import FlightsSection from "../FlightsSection/FlightsSection.jsx";
import Loader from "./fields/Loader.jsx";
import ErrorMessage from "./fields/ErrorMessage.jsx";
import useFlights from "../../hooks/useFlights.js";

const Home = () => {
  const { flights, loading, error, handleSearch } = useFlights();

  const renderFlights = () => {
    if (loading) return <Loader />;
    if (error) return <ErrorMessage type="error" error={error} />;
    if (flights === null) return null;
    if (flights.length === 0) {
      return <ErrorMessage type="no_flights" />;
    }

    return <FlightsSection flights={flights} />;
  };

  return (
    <HomeContainer>
      <Header>Flights</Header>
      <FlightSearchForm onSearch={handleSearch} />
      {renderFlights()}
    </HomeContainer>
  );
};

export default Home;
