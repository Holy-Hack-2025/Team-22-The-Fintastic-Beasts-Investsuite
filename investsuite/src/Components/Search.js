import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const mockResults = [
    "Stock A - Tech",
    "Stock B - Finance",
    "Stock C - Healthcare",
    "Stock D - Energy",
  ];

  const filteredResults = mockResults.filter((result) =>
    result.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="content-area">
      <h2>Search for Stocks and Articles</h2>
      <input
        type="text"
        placeholder="Search stocks or articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <ul>
        {filteredResults.length > 0 ? (
          filteredResults.map((result, index) => <li key={index}>{result}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
