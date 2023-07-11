import React, { useState } from "react";
import axios from "axios";
import "./common.css";

const DisplayStatesByCasesAndDeaths = () => {
  const [casesValue, setCasesValue] = useState("");
  const [deathsValue, setDeathsValue] = useState("");
  const [states, setStates] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/covid/statesByCasesAndDeaths?cases=${casesValue}&deaths=${deathsValue}`
      );

      setStates(response.data);
      setError("");
    } catch (error) {
      setError("An error occurred while fetching data.");
      setStates([]);
    }
  };

  return (
    <div className="container">
      <h2>Display States by Cases and Deaths</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cases Value:
          <input
            type="number"
            value={casesValue}
            onChange={(e) => setCasesValue(e.target.value)}
          />
        </label>
        <label>
          Deaths Value:
          <input
            type="number"
            value={deathsValue}
            onChange={(e) => setDeathsValue(e.target.value)}
          />
        </label>
        <button type="submit">Get States</button>
      </form>
      {error && <p>{error}</p>}
      {states.length > 0 && (
        <div>
          <h3>States:</h3>
          <ul>
            {states.map((state) => (
              <li key={state._id}>{state.state}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DisplayStatesByCasesAndDeaths;
