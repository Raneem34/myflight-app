import React from "react";
import moment from "moment";
import { ChevronDown } from "lucide-react";
import { formatTime } from "../../../../utils/formatTime.js";
import {
  Card,
  Header,
  FlightDetails,
  Label,
  SectionWrapper,
  ColumnWrapper,
  Arrow,
  Price,
  AirlineIcon,
} from "./FlighCard.style.js";
import FlightDetailsSection from "../FlightDetailsSection/FlightDetailsSection.jsx";

// Utility function for calculating connection time
const calculateTotalConnectionTime = (segments) => {
  return segments.slice(0, -1).reduce((totalMinutes, segment, index) => {
    const arrivalTime = moment(segment.arrival);
    const nextDepartureTime = moment(segments[index + 1].departure);
    return (
      totalMinutes +
      moment.duration(nextDepartureTime.diff(arrivalTime)).asMinutes()
    );
  }, 0);
};

// Flight icon component (airline logo & name)
const FlightIcon = ({ carriers }) => {
  const airlineLogo =
    carriers?.operating?.[0]?.logoUrl ?? carriers?.marketing?.[0]?.logoUrl;
  const airlineName =
    carriers?.operating?.[0]?.name ??
    carriers?.marketing?.[0]?.name ??
    "Flight";

  return <AirlineIcon src={airlineLogo} alt={airlineName} />;
};

// Component for displaying individual leg details
const LegDetails = ({ leg }) => {
  const {
    departure,
    arrival,
    durationInMinutes,
    origin,
    destination,
    segments,
    carriers,
  } = leg;

  const departureTime = formatTime(departure, "HH:mm");
  const arrivalTime = formatTime(arrival, "HH:mm");
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  const stops = segments.length - 1;

  const totalConnectionTime = calculateTotalConnectionTime(segments);
  const connectionHours = Math.floor(totalConnectionTime / 60);
  const connectionMinutes = totalConnectionTime % 60;

  const airlineName =
    carriers?.operating?.[0]?.name ?? carriers?.marketing?.[0]?.name;

  // Summary component for trip (hours, company, duration, destination)
  return (
    <SectionWrapper>
      <FlightIcon carriers={carriers} />

      <ColumnWrapper>
        <Label>{`${departureTime} - ${arrivalTime}`}</Label>
        <Label>{airlineName}</Label>
      </ColumnWrapper>

      <ColumnWrapper>
        <Label>{`${hours} hrs ${minutes} min`}</Label>
        <Label>
          {origin.id} <Arrow>→</Arrow> {destination.id}
        </Label>
      </ColumnWrapper>
      <ColumnWrapper>
        {stops > 0 ? (
          <>
            <Label>{`${stops} ${stops === 1 ? "stop" : "stops"}`}</Label>
            <Label>{`${connectionHours} hrs ${connectionMinutes} min`}</Label>
          </>
        ) : (
          <Label>Direct</Label>
        )}
      </ColumnWrapper>
    </SectionWrapper>
  );
};

// Summary component for total price & trip type
const FlightSummary = ({ price, legs }) => (
  <ColumnWrapper>
    <Price>{price.formatted}</Price>
    <Label>{legs.length > 1 ? "round trip" : "one way"}</Label>
  </ColumnWrapper>
);

const FlightCard = ({ flight, index, isExpanded, toggleDetails }) => {
  if (!flight || !flight.legs?.length) return null;

  return (
    <Card>
      <Header>
        <FlightDetails>
          {flight.legs.map((leg, legIndex) => (
            <LegDetails key={legIndex} leg={leg} />
          ))}
        </FlightDetails>

        <FlightSummary price={flight.price} legs={flight.legs} />

        <ChevronDown
          onClick={() => toggleDetails(index)}
          size={40}
          color="#333"
          style={{
            marginLeft: "8px",
            transform: isExpanded ? "rotate(180deg)" : "none",
            transition: "transform 0.3s ease",
          }}
        />
      </Header>

      {isExpanded && <FlightDetailsSection legs={flight.legs} />}
    </Card>
  );
};

export default FlightCard;
