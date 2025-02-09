import React, { useState, useMemo } from "react";
import { FlightsContainer } from "./FlightsSection.style";
import FlightCard from "./parts/FlighCard/FlightCard";

const FlightsSection = ({ flights }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleDetails = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  const flightList = useMemo(
    () =>
      flights?.map((flight, index) => (
        <FlightCard
          key={flight.id}
          flight={flight}
          index={index}
          isExpanded={expandedCard === index}
          toggleDetails={toggleDetails}
        />
      )),
    [flights, expandedCard]
  );

  return <FlightsContainer>{flightList}</FlightsContainer>;
};

export default FlightsSection;
