import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: fit-content;

`;

export const DropdownToggle = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  transition: box-shadow 0.2s ease-in-out;
  
  color: #333;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    outline: 1px solid #3b82f6;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style-type: none;
  padding: 0;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
`;

export const DropdownItem = styled.li`
  padding: 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${(props) => (props.selected ? "#007bff" : "#333")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;
