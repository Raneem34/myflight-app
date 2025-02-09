import styled, { keyframes } from "styled-components";

// Define keyframe animation
const dropdownFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Dropdown Container
export const PassengerDropdownContainer = styled.div`
  position: relative;
`;

// Toggle Button
export const PassengerToggleButton = styled.button`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  font-weight: 500;
  color: #374151;
  border: none;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: 1px solid #3b82f6;
  }
`;

// Dropdown Menu
export const PassengerDropdownMenu = styled.div`
  position: absolute;
  width: 220px;
  margin-top: 8px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  z-index: 20;
  animation: ${dropdownFade} 0.2s ease-in-out;
`;

export const PassengerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 16px;
  color: #374151;
  font-weight: 500;
`;

export const PassengerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PassengerButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  font-size: 18px;
  font-weight: bold;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f3f4f6;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Done Button
export const PassengerDoneButton = styled.button`
  margin-top: 12px;
  padding: 12px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  width: 100%;
  max-width: 200px;

  &:hover {
    background: #0056b3;
  }
`;
