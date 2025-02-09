import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./DatePicker.css";
import { useState } from "react";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import moment from "moment";

const DatePicker = ({
  isRoundTrip,
  departureDate,
  returnDate,
  setDepartureDate,
  setReturnDate,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [focusedSingleInput, setFocusedSingleInput] = useState(null);

  const handleDateChange = ({ startDate, endDate }) => {
    setDepartureDate(startDate);
    setReturnDate(endDate);
  };

  const isBeforeToday = (day) => day.isBefore(moment(), "day");

  return (
    <>
      {isRoundTrip ? (
        <DateRangePicker
          startDate={departureDate}
          startDateId="departure_date"
          endDate={returnDate}
          endDateId="arrival_date"
          onDatesChange={handleDateChange}
          focusedInput={focusedInput}
          onFocusChange={(focused) => setFocusedInput(focused)}
          startDatePlaceholderText="Departure Date"
          endDatePlaceholderText="Return Date"
          numberOfMonths={2}
          isOutsideRange={isBeforeToday}
          displayFormat="YYYY-MM-DD"
          required
        />
      ) : (
        <SingleDatePicker
          date={departureDate}
          onDateChange={(date) => setDepartureDate(date)}
          focused={focusedSingleInput}
          onFocusChange={({ focused }) => setFocusedSingleInput(focused)}
          id="single_date"
          numberOfMonths={1}
          isOutsideRange={isBeforeToday}
          displayFormat="YYYY-MM-DD"
          required
        />
      )}
    </>
  );
};

export default DatePicker;
