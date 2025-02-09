import styled from "styled-components";

export const DetailedSection = styled.div`
  display: flex;
  flex-direction: column; /* Ensures flights stack vertically */
  align-items: flex-start;
  text-align: left;
  gap: 20px; /* Adds spacing between Flight 1 and Flight 2 */
  //justify-content: space-around;
  margin-top: 15px;
  width: 100%;
`;

export const SegmentContainer = styled.div`
  display: flex;
  flex-direction: ${({ isOneWayFlight }) => (isOneWayFlight ? 'row' : 'column')};
  flex-wrap: ${({ isOneWayFlight }) => (isOneWayFlight ? 'wrap' : 'nowrap')}; 
  align-items: ${({ isOneWayFlight }) => (isOneWayFlight ? 'flex-start' : 'stretch')};
  gap: 12px; /* Adds spacing between segments */
  width: 100%; 
  border-top: 2px solid #000; 
`;

export const Segment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;

`;

export const SegmentTitle = styled.span`
  font-size: 14px;
  color: #555;
  font-weight: bold;
`;

export const SegmentLabel = styled.span`
  font-size: 16px;
  color:rgb(0, 0, 0);
  gap:10px;
  font-weight: bold;
  text-align: center;
  &.TravelTime
  {
      color: #757678;
      font-size: 13px;
      font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  &.OriginDestination 
  {
    display: inline-flex; /* Align origin and destination in the same line */
    width: 100%;
    justify-content: space-around;
  }

  &.Layover 
  {
    display: block; /* Make sure it's on its own line */
    color:rgb(126, 31, 31);
    font-size: 16px;
    text-align: left;
    font-weight: normal;
    margin: 10px 0; /* Add some gap around the layover */
    padding-top: 5px;
    padding-bottom: 5px;
    border-top: 1px solid #e0e0e0; /* Line above */
    border-bottom: 1px solid #e0e0e0; /* Line below */
  }
`;

export const SegmentDetails = styled.div`
  font-size: 14px;
  color: #777;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Arrow = styled.span`
  align-self: center;
  font-size: 24px;
  color: #888;
`;

