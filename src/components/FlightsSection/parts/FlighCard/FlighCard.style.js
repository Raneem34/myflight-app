import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  align-content: center;
`;

export const Arrow = styled.span`
  align-self: center;
  font-size: 24px;
  color: #888;
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FlightDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  flex: 1;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #555;
`;

export const AirlineIcon = styled.img`
  width: 40px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  align-content: center;
`;
