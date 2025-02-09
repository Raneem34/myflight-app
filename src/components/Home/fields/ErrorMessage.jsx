import React from "react";
import styled from "styled-components";

// Styled components for error messages

const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #f5c6cb;
  color: #721c24;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  margin: 20px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const ErrorIcon = styled.div`
  font-size: 36px;
  margin-bottom: 12px;
`;

const ErrorText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const ErrorSubText = styled.p`
  font-size: 14px;
  color: #5a1a1a;
  margin-top: 8px;
  text-align: center;
`;

// Main Error Message component
const ErrorMessage = ({ type, error }) => {
  let message = "";
  let subMessage = "";
  let icon = "⚠️";

  if (type === "no_flights") {
    message = "No flights found";
    subMessage = "Please try again with different search criteria.";
  } else if (type === "error") {
    message = "No flights found";
    subMessage =
      error ||
      "There was an error processing your request. Please try again later.";
  }

  return (
    <ErrorMessageContainer>
      <ErrorIcon>{icon}</ErrorIcon>
      <ErrorText>{message}</ErrorText>
      <ErrorSubText>{subMessage}</ErrorSubText>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
