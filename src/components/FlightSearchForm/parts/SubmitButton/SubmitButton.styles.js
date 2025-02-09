import styled from "styled-components";

export const Button = styled.button`
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
