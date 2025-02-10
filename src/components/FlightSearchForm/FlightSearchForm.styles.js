import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;  
  // min-width: 600px;   
  margin: 0 auto;
  transition: box-shadow 0.3s ease-in-out;
  box-sizing: border-box;
`;

export const FormFields = styled.div` 
  display: flex;
  align-items: center; 
  width: 100%;
  gap: 5px;
  padding-bottom:5px;

  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
 `;

export const SwapButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #374151;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: #f3f4f6;
    transform: rotate(180deg);
  }

  &:focus {
    outline: 1px solid #3b82f6;
  }
`;