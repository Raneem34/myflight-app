import React from "react";
import moment from "moment";
import {
  DetailedSection,
  SegmentContainer,
  Segment,
  SegmentTitle,
  SegmentLabel,
  SegmentDetails,
  Arrow,
} from "./FlightDetailsSection.style";
import { formatTime } from "../../../../utils/formatTime";

const calculateLayover = (prevArrival, nextDeparture) => {
  if (!prevArrival || !nextDeparture) return null;
  const diffMinutes = moment(nextDeparture).diff(
    moment(prevArrival),
    "minutes"
  );
  return `${Math.floor(diffMinutes / 60)} hrs ${diffMinutes % 60} min`;
};

const FlightSegment = ({ segment, nextSegment }) => {
  const {
    origin,
    destination,
    departure,
    arrival,
    durationInMinutes,
    flightNumber,
    marketingCarrier,
  } = segment;

  const layoverTime = nextSegment
    ? calculateLayover(arrival, nextSegment.departure)
    : null;

  return (
    <Segment>
      <SegmentDetails>
        <SegmentLabel className="OriginDestination">
          {formatTime(departure, "HH:mm")}{" "}
          {origin?.name} ({origin?.displayCode})
          <Arrow>→</Arrow>
          {formatTime(arrival, "HH:mm")}{" "}
          {destination?.name} ({destination?.displayCode})
        </SegmentLabel>

        <SegmentLabel className="TravelTime">
          <b>Travel Time:</b> {Math.floor(durationInMinutes / 60)} hrs{" "}
          {durationInMinutes % 60} min
        </SegmentLabel>

        <SegmentLabel>
          {marketingCarrier?.name && (
            <>
              <b>Airline:</b> {marketingCarrier?.name}{" - "}
            </>
          )}
          {flightNumber && (
            <>
              <b>Flight Number:</b> {flightNumber}
            </>
          )}
        </SegmentLabel>

        {layoverTime && (
          <SegmentLabel className="Layover">
            <b>Layover:</b> {layoverTime}
          </SegmentLabel>
        )}
      </SegmentDetails>
    </Segment>
  );
};

// FlightLeg component (for each flight leg) 
const FlightLeg = ({ leg, legIndex, isOneWayFlight }) => (
  <SegmentContainer isOneWayFlight={isOneWayFlight}>
    {!isOneWayFlight && <SegmentTitle>Flight {legIndex + 1}</SegmentTitle>}
    {leg.segments?.map((segment, index) => (
        <FlightSegment
          key={index}
          segment={segment}
          nextSegment={leg.segments[index + 1]}
        />
    ))}
  </SegmentContainer>
);

// Main FlightDetailsSection component
const FlightDetailsSection = ({ legs }) => {
  if (!legs || !legs.length) return null;

  return (
    <DetailedSection>
      {legs.map((leg, index) => (
        <FlightLeg
          key={index}
          leg={leg}
          legIndex={index}
          isOneWayFlight={legs.length === 1}
        />
      ))}
    </DetailedSection>
  );
};

export default FlightDetailsSection;
