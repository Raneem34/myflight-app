import styled from "styled-components";

export const DetailedSection = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  text-align: left;
  gap: 20px; 
  margin-top: 15px;
  width: 100%;
`;

export const SegmentContainer = styled.div`
  display: flex;
  flex-direction: ${({ isOneWayFlight }) => (isOneWayFlight ? 'row' : 'column')};
  flex-wrap: ${({ isOneWayFlight }) => (isOneWayFlight ? 'wrap' : 'nowrap')}; 
  align-items: ${({ isOneWayFlight }) => (isOneWayFlight ? 'flex-start' : 'stretch')};
  gap: 12px; 
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
    display: inline-flex; 
    width: 100%;
    justify-content: space-around;
  }

  &.Layover 
  {
    display: block; 
    color:rgb(126, 31, 31);
    font-size: 16px;
    text-align: left;
    font-weight: normal;
    margin: 10px 0; 
    padding-top: 5px;
    padding-bottom: 5px;
    border-top: 1px solid #e0e0e0; 
    border-bottom: 1px solid #e0e0e0; 
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

