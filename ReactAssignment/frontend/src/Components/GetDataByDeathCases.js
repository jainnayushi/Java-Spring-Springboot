import React, { useState } from "react";
import axios from "axios";
import "./common.css";

const GetDataByDeathCases = () => {
  const [death, setDeath] = useState("");
  const [cases, setCases] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/covid/getByDeathCases",
        {
          death: death,
          cases: cases,
        }
      );

      setData(response.data);
      setError("");
    } catch (error) {
      setError("An error occurred while fetching data.");
      setData([]);
    }
  };

  return (
    <div className="container">
      <h2>Get Data By Death Cases</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Death:
          <input
            type="number"
            value={death}
            onChange={(e) => setDeath(e.target.value)}
          />
        </label>
        <label>
          Cases:
          <input
            type="number"
            value={cases}
            onChange={(e) => setCases(e.target.value)}
          />
        </label>
        <button type="submit">Get Data</button>
      </form>
      {error && <p>{error}</p>}
      {data.length > 0 && (
        <div>
          <h3>Data:</h3>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                State: {item.state}, Cases: {item.cases}, Deaths: {item.death}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetDataByDeathCases;

// import React, { useState } from "react";
// import axios from "axios";

// const GetDataByDeathCases = () => {
//   const [deathCases, setDeathCases] = useState("");
//   const [data, setData] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(
//         `http://localhost:3000/covid/getByDeathCases?deathCases=${deathCases}`
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     setDeathCases(e.target.value);
//   };

//   return (
//     <div className="container">
//       <h2>Get Data by Death Cases</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Death Cases:</label>
//           <input type="text" value={deathCases} onChange={handleChange} />
//         </div>
//         <button type="submit">Get Data</button>
//       </form>
//       {data && (
//         <div>
//           <h3>Results:</h3>
//           <ul>
//             {data.map((item) => (
//               <li key={item._id}>
//                 <p>State: {item.state}</p>
//                 <p>Cases: {item.cases}</p>
//                 <p>Deaths: {item.deaths}</p>
//                 <p>Date: {item.date}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetDataByDeathCases;
