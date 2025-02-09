import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeText = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8); /* Light background */
  z-index: 9999; /* Ensure it sits on top of other elements */
`;

const LoaderCircle = styled.div`
  border: 8px solid #f3f3f3; /* Light background for the loader */
  border-top: 8px solid #007bff; /* Blue color for the spinning part */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite; /* Animation for spinning */
`;

const LoaderText = styled.span`
  font-size: 18px;
  color: #007bff;
  margin-top: 12px;
  font-weight: bold;
  animation: ${fadeText} 2s ease-in-out infinite; /* Text fade animation */
`;

const Loader = () => (
  <LoaderContainer>
    <LoaderCircle />
    <LoaderText>Loading...</LoaderText>
  </LoaderContainer>
);

export default Loader;
