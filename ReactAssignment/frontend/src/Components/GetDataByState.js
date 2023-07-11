import React, { useState } from "react";
import axios from "axios";

const GetDataByState = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/covid/getDataByState?state=${state}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="container">
      <h2>Get Data by State</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>State:</label>
          <input type="text" value={state} onChange={handleChange} />
        </div>
        <button type="submit">Get Data</button>
      </form>
      {data && (
        <div>
          <h3>Results:</h3>
          <ul>
            {data.map((item) => (
              <li key={item._id}>
                <p>State: {item.state}</p>
                <p>Cases: {item.cases}</p>
                <p>Deaths: {item.deaths}</p>
                <p>Date: {item.date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetDataByState;
