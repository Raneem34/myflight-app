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

  const handleSelect = (airport) => {
    setSearchQuery(null); 
    setInputVal(airport);
    setShowSuggestions(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query); 
    handleSearchAPI(query); 
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
