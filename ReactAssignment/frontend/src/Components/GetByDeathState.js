import React, { useState } from "react";
import axios from "axios";
import "./common.css";

const GetByDeathState = () => {
  const [state, setState] = useState("");
  const [death, setDeath] = useState("");
  const [deaths, setDeaths] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/covid/getByDeathState?state=${state}&death=${death}`
      );

      setDeaths(response.data);
      setError("");
    } catch (error) {
      setError("An error occurred while fetching data.");
      setDeaths([]);
    }
  };

  return (
    <div className="container">
      <h2>Get By Death State</h2>
      <form onSubmit={handleSubmit}>
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <label>
          Death:
          <input
            type="number"
            value={death}
            onChange={(e) => setDeath(e.target.value)}
          />
        </label>
        <button type="submit">Get Deaths</button>
      </form>
      {error && <p>{error}</p>}
      {deaths.length > 0 && (
        <div>
          <h3>Deaths:</h3>
          <ul>
            {deaths.map((death) => (
              <li key={death.id}>
                State: {death.state}, Deaths: {death.death}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetByDeathState;

// import React, { useState } from "react";
// import axios from "axios";
// import "./common.css";

// const GetByDeathState = () => {
//   const [state, setState] = useState("");
//   const [deaths, setDeaths] = useState([]);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/covid/getByDeathState",
//         {
//           state: state,
//         }
//       );

//       setDeaths(response.data);
//       setError("");
//     } catch (error) {
//       setError("An error occurred while fetching data.");
//       setDeaths([]);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Get By Death State</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           State:
//           <input
//             type="text"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//           />
//         </label>
//         <button type="submit">Get Deaths</button>
//       </form>
//       {error && <p>{error}</p>}
//       {deaths.length > 0 && (
//         <div>
//           <h3>Deaths:</h3>
//           <ul>
//             {deaths.map((death) => (
//               <li key={death.id}>
//                 State: {death.state}, Deaths: {death.death}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetByDeathState;
