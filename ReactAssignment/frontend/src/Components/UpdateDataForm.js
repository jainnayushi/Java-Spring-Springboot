import React, { useState } from "react";
import axios from "axios";
import "./common.css";

const UpdateDataForm = () => {
  const [formData, setFormData] = useState({
    state: "",
    cases: "",
    deaths: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/covid/update",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <h2>Update Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cases:</label>
          <input
            type="text"
            name="cases"
            value={formData.cases}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Deaths:</label>
          <input
            type="text"
            name="deaths"
            value={formData.deaths}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Data</button>
      </form>
    </div>
  );
};

export default UpdateDataForm;
