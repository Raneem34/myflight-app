import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  height: 60px; 
  width: 300px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus-within {
    outline: 1px solid #3b82f6;
  }
`;


export const InputField = styled.input`
  all: unset;
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  height: 100%;
  /* For focus state */
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 6px rgba(0, 123, 255, 0.2);
  }

  /* Optional: Add style for placeholder */
  &::placeholder {
    color: #888;
  }
`;



export const SuggestionsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
    transition: background-color 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
  }
`;

export const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const SuggestionTitle = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const SuggestionText = styled.div`
  font-size: 14px;
  color: #333;
`;
