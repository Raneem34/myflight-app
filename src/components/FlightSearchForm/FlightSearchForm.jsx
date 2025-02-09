import { useState, useEffect } from "react";
import { Repeat } from "lucide-react"; // Importing the swap icon
import useGeolocation from "../../hooks/useGeolocation";
import { getNearByAirports } from "../../api/getNearByAirports";
import AirportInput from "./parts/AirportInput/AirportInput";
import DatePicker from "./parts/DatePicker/DatePicker";
import PassengerDropdown from "./parts/PassengerDropdown/PassengerDropdown";
import TripTypeDropdown from "./parts/TripTypeDropdown/TripTypeDropdown";
import SubmitButton from "./parts/SubmitButton/SubmitButton.jsx";
import {
  SearchForm,
  FormFields,
  SwapButton,
} from "./FlightSearchForm.styles.js";

const FlightSearchForm = ({ onSearch }) => {
  const { location } = useGeolocation();

  // State for form fields
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureDate: null,
    returnDate: null,
    passengers: { adults: 1, childrens: 0, infants: 0 },
    tripType: "Round Trip",
  });

  // Fetch nearby airports based on user location
  useEffect(() => {
    if (!location) return;

    getNearByAirports(location.longitude, location.latitude)
      .then(({ data }) => setFormData((prev) => ({ ...prev, origin: data })))
      .catch((err) => console.error("Error fetching airports:", err));
  }, [location]);

  // Handle input changes
  const updateField = (field, value) => {
    setFormData((prev) => {
      console.log({ ...prev, [field]: value }, "updateField");
      return { ...prev, [field]: value };
    });
  };

  // Swap function for origin and destination
  const handleSwap = () => {
    setFormData((prev) => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("255");
    const {
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
      tripType,
    } = formData;

    // Basic validation
    if (!origin || !destination || !departureDate) {
      alert("Please fill in all required fields.");
      return;
    }
    debugger;
    onSearch(
      origin,
      destination,
      departureDate,
      tripType === "Round Trip" ? returnDate : null,
      passengers
    );
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <FormFields>
        <TripTypeDropdown
          selectedType={formData.tripType}
          setSelectedType={(val) => updateField("tripType", val)}
        />
        <PassengerDropdown
          passengers={formData.passengers}
          setPassengers={(val) => updateField("passengers", val)}
        />
      </FormFields>

      <FormFields>
        <AirportInput
          value={formData.origin}
          setInputVal={(val) => updateField("origin", val)}
          placeholder="Origin"
        />

        {/* Swap button between inputs */}
        <SwapButton type="button" onClick={handleSwap}>
          <Repeat size={20} />
        </SwapButton>

        <AirportInput
          value={formData.destination}
          setInputVal={(val) => updateField("destination", val)}
          placeholder="Destination"
        />
      </FormFields>

      <DatePicker
        isRoundTrip={formData.tripType === "Round Trip"}
        departureDate={formData.departureDate}
        returnDate={formData.returnDate}
        setDepartureDate={(val) => updateField("departureDate", val)}
        setReturnDate={(val) => updateField("returnDate", val)}
      />

      <SubmitButton type="submit">Search</SubmitButton>
    </SearchForm>
  );
};

export default FlightSearchForm;
