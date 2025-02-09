import { useState, useRef, useEffect } from "react";
import { Users, ChevronDown } from "lucide-react";
import {
  PassengerDropdownContainer,
  PassengerToggleButton,
  PassengerDropdownMenu,
  PassengerItem,
  PassengerControls,
  PassengerButton,
  PassengerDoneButton,
} from "./PassengerDropdown.styles";

const PassengerDropdown = ({ passengers, setPassengers }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { label: "Adults", type: "adults", min: 1 },
    { label: "Children", type: "childrens", min: 0 },
    { label: "Infants", type: "infants", min: 0 },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updatePassengers = (type, change) => {
    const updatedPassengers = {
      ...passengers,
      [type]: Math.max(0, passengers[type] + change),
    };
    setPassengers(updatedPassengers);
  };

  const passengerSummary = () => {
    const { adults, childrens, infants } = passengers;
    return adults + childrens + infants;
  };

  return (
    <PassengerDropdownContainer ref={dropdownRef}>
      <PassengerToggleButton
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        <Users className="h-5 w-5 text-gray-500" />
        <span>{passengerSummary()}</span>
        <ChevronDown size={18} />
      </PassengerToggleButton>

      {open && (
        <PassengerDropdownMenu>
          {options.map(({ label, type, min }) => (
            <PassengerItem key={type}>
              <span>{label}</span>
              <PassengerControls>
                <PassengerButton
                  type="button"
                  onClick={() => updatePassengers(type, -1)}
                  disabled={passengers[type] === min}
                >
                  −
                </PassengerButton>
                <span>{passengers[type]}</span>
                <PassengerButton
                  type="button"
                  onClick={() => updatePassengers(type, 1)}
                >
                  +
                </PassengerButton>
              </PassengerControls>
            </PassengerItem>
          ))}

          <PassengerDoneButton type="button" onClick={() => setOpen(false)}>
            Done
          </PassengerDoneButton>
        </PassengerDropdownMenu>
      )}
    </PassengerDropdownContainer>
  );
};

export default PassengerDropdown;
