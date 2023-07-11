import React, { useState } from "react";
import axios from "axios";
import "./common.css";

const DisplayDocumentsByDeaths = () => {
  const [deathValue, setDeathValue] = useState("");
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/covid/documentsByDeaths?deathValue=${deathValue}&limit=20`
      );

      setDocuments(response.data);
      setError("");
    } catch (error) {
      setError("An error occurred while fetching data.");
      setDocuments([]);
    }
  };

  return (
    <div className="container">
      <h2>Display Documents by Deaths</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Death Value:
          <input
            type="number"
            value={deathValue}
            onChange={(e) => setDeathValue(e.target.value)}
          />
        </label>
        <button type="submit">Get Documents</button>
      </form>
      {error && <p>{error}</p>}
      {documents.length > 0 && (
        <div>
          <h3>Documents:</h3>
          <ul>
            {documents.map((document) => (
              <li key={document._id}>
                State: {document.state}, Deaths: {document.deaths}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DisplayDocumentsByDeaths;
