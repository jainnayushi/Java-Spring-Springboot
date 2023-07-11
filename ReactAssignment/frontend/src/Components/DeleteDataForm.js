import React, { useState } from "react";
import axios from "axios";
import "./common.css";

const DeleteDataForm = () => {
  const [date, setDate] = useState("");
  const [state, setState] = useState("");
  const [cases, setCases] = useState("");
  const [deaths, setDeaths] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        "http://localhost:3000/covid/delete",
        {
          data: {
            date: date,
            state: state,
            cases: cases,
            deaths: deaths,
          },
        }
      );

      setSuccessMessage(response.data.message);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("An error occurred while deleting data.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <h2>Delete Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <label>
          Cases:
          <input
            type="text"
            value={cases}
            onChange={(e) => setCases(e.target.value)}
          />
        </label>
        <label>
          Deaths:
          <input
            type="text"
            value={deaths}
            onChange={(e) => setDeaths(e.target.value)}
          />
        </label>
        <button type="submit">Delete Data</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default DeleteDataForm;

// import React, { useState } from "react";
// import axios from "axios";

// const DeleteDataForm = () => {
//   const [state, setState] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/covid/delete", {
//         state,
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     setState(e.target.value);
//   };

//   return (
//     <div className="container">
//       <h2>Delete Data</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>State:</label>
//           <input type="text" value={state} onChange={handleChange} />
//         </div>
//         <button type="submit">Delete Data</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default DeleteDataForm;
