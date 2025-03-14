import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return; // Skip API call if query is empty
      setIsLoading(true);
      setError(null); // Reset error message before each new fetch

      const options = {
        method: "GET",
        url: `https://cors-anywhere.herokuapp.com/https://financialdata.net/api/v1/stock-prices?identifier=${query}&key=27ebb00a8c4655a99773f9c76407ec72`, // Use the correct parameter name
      };

      try {
        const response = await axios.get(options.url);

        // console.log(response.data[0]); // Log the response to inspect it

        if (response) {
          const item = response.data[0];
          console.log(item);
          setResults(item); // Assume response contains price data
          console.log(results);
        } else {
          setError("No stock data found for the given query.");
        }
      } catch (error) {
        console.error("API Error:", error); // Log error details for debugging
        setError("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchData();
    }, 500); // Delay API call by 500ms

    return () => clearTimeout(debounceTimer); // Clear the timeout on component unmount or query change
  }, [query]);

  return (
    <div className="content-area">
      <h2>Search for Stocks</h2>
      <input
        type="text"
        placeholder="Enter stock identifier (e.g., MSFT)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {results ? (
        <div>
          <h3>Stock Data for {query}</h3>
          <p>
            <strong>Date:</strong> {results.date}
          </p>
          <p>
            <strong>Close:</strong> ${results.close}
          </p>
          <p>
            <strong>High:</strong> ${results.high}
          </p>
          <p>
            <strong>Low:</strong> ${results.low}
          </p>
          <p>
            <strong>Open:</strong> ${results.open}
          </p>
          <p>
            <strong>Volume:</strong> {results.volume}
          </p>
        </div>
      ) : (
        <p>No results available</p>
      )}
    </div>
  );
};

export default Search;
