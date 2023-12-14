import { useState } from "react";
import data from "./resources/countryData.json";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    const filteredValues = data.filter((country) =>
      country.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestions(filteredValues);
  };

  const handleSelect = (value) => {
    setQuery(value);
    setSuggestions([]);
  };

  const handleKeys = (e) => {
    if (e.key === "Escape") {
      setSuggestions([]);
    }
  };

  return (
    <>
      <h1>Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleInput}
        onKeyDown={handleKeys}
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              className="suggestion"
              key={index}
              onClick={() => handleSelect(suggestion.name)}
            >
              {suggestion.name} ({suggestion.code})
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
