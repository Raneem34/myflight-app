# Flight Search Application

## Overview

This is a flight search application built with React that allows users to search for flights between two destinations.
The app integrates with the Sky Scraper API (via RapidAPI) to fetch real-time flight data.

## Features

- Search for flights between two locations
- Select trip type (Round Trip / One Way)
- Choose departure and return dates
- Specify the number of passengers
- Swap origin and destination
- Display flight results with expandable details

## Technologies Used

- **React** for building the UI
- **Styled Components** for styling
- **React Hooks** for state management
- **Lodash & Lucide-React** for utilities and icons
- **Geolocation API** to fetch nearby airports
- **RapidAPI** for nearby airports, search airport and flight data

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/Raneem34/myflight-app.git
   cd myflight-app
   ```
2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables**
   Create a `.env` file in the root directory and add:

   ```sh
   REACT_APP_RAPIDAPI_KEY=your_api_key_here
   ```

4. **Run the app**
   ```sh
   npm run dev
   # or
   yarn start dev
   ```
   The app should now be running on `http://localhost:5173`

## Project Structure

```
/src
├── components
│   ├── Home
│   │   ├── Home.jsx
│   │   ├── Home.style.js
│   │   ├── fields
│   │   │  ├── ErrorMessage.jsx
│   │   │  ├── Loader.jsx
│   ├── FlightSearchForm
│   │   ├── FlightSearchForm.jsx
│   │   ├── FlightSearchForm.styles.js
│   │   ├── parts
│   │   |   ├── AirportInput
│   │   |   |   ├── AirportInput.jsx
│   │   |   |   ├── AirportInput.style.js
│   │   |   ├── DatePicker
│   │   |   |   ├── DatePicker.jsx
│   │   |   |   ├── DatePicker.css
│   │   |   ├── PassengerDropdown
│   │   |   |   ├── PassengerDropdown.jsx
│   │   |   |   ├── PassengerDropdown.style.js
│   │   |   ├── SubmitButton
│   │   |   |   ├── SubmitButton.jsx
│   │   |   |   ├── SubmitButton.style.js
│   │   |   ├── TripTypeDropdown
│   │   |   |   ├── TripTypeDropdown.jsx
│   │   |   |   ├── TripTypeDropdown.style.js
│   ├── FlightsSection
│   │   ├── FlightsSection.jsx
│   │   ├── FlightsSection.style.js
│   │   ├── parts
│   │   |   ├── FlighCard
│   │   |   |   ├── FlighCard.jsx
│   │   |   |   ├── FlighCard.style.js
│   │   |   ├── FlightDetailsSection
│   │   |   |   ├── FlightDetailsSection.jsx
│   │   |   |   ├── FlightDetailsSection.style.js
├── hooks
│   ├── useFlights.js
│   ├── useGeolocation.js
├── api
│   ├── fetchFlights.js
│   ├── getNearByAirports.js
│   ├── searchAirport.js
├── styles
│   ├── global.css
├── App.jsx
├── main.jsx
```

## Loom Video Demo

[📹 Watch the Demo](#) _(Replace with actual Loom link)_

---

For any questions, feel free to reach out.
