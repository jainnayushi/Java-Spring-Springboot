import React, { useState } from "react";
import axios from "axios";
import "./common.css";

const AddDataForm = () => {
  const [formData, setFormData] = useState({
    cases: "",
    deaths: "",
    state: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Data submitted successfully!");
    try {
      const response = await axios.post(
        "http://localhost:3000/covid/add",
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
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit} className="form-group">
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
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
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
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default AddDataForm;
