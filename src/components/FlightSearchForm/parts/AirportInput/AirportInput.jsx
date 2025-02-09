import { useState, useEffect, useRef, useCallback } from "react";
import { searchAirport } from "../../../../api/searchAirport";
import debounce from "../../../../utils/debounce";
import {
  InputGroup,
  InputField,
  SuggestionsList,
  SuggestionItem,
  SuggestionTitle,
  SuggestionText,
} from "./AirportInput.styles";

const AirportInput = ({ placeholder, value, setInputVal }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Memoized debounced API function
  const handleSearchAPI = useCallback(
    debounce(async (query) => {
      try {
        const { data } = await searchAirport(query);
        setSuggestions(data || []);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching airport suggestions:", error);
      }
    }, 200),
    []
  );

  // Click outside handler to close suggestions
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !inputRef.current?.contains(e.target) &&
        !suggestionsRef.current?.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle suggestion selection
  const handleSelect = (airport) => {
    setSearchQuery(null); // Reset input field
    setInputVal(airport);
    setShowSuggestions(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query); // Update state immediately
    handleSearchAPI(query); // Call debounced API function
  };


  return (
    <InputGroup>
      <InputField
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={
          searchQuery ??
          (value?.current?.presentation?.suggestionTitle ||
            value?.presentation?.suggestionTitle)
        }
        onChange={(e) => handleSearch(e.target.value)}
        required
      />

      {showSuggestions && suggestions.length > 0 && (
        <SuggestionsList ref={suggestionsRef}>
          {suggestions.map((airport, index) => (
            <SuggestionItem key={index} onClick={() => handleSelect(airport)}>
              <SuggestionTitle>
                {airport.presentation.suggestionTitle}
              </SuggestionTitle>
              <SuggestionText>{airport.presentation.subtitle}</SuggestionText>
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </InputGroup>
  );
};

export default AirportInput;
