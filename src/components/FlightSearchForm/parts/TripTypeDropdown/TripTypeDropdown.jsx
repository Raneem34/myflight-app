import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownContainer,
  DropdownToggle,
  DropdownList,
  DropdownItem,
} from "./TripTypeDropdown.styles";

const TripTypeDropdown = ({ selectedType, setSelectedType }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle selection
  const handleSelect = (option) => {
    setSelectedType(option);
    setOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownToggle type="button" onClick={() => setOpen(!open)}>
        <span>{selectedType}</span>
        <ChevronDown size={18} />
      </DropdownToggle>

      {open && (
        <DropdownList>
          {["Round Trip", "One Way"].map((option) => (
            <DropdownItem
              key={option}
              selected={selectedType === option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default TripTypeDropdown;
