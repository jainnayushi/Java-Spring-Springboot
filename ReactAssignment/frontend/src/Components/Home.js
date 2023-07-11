import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "./common.css";

const Home = () => {
  return (
    <div className="container">
      <h2>Routes</h2>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/covid/add">
              Add Data
            </Link>
          </li>
          <li>
            <Link className="link" to="/covid/update">
              Update Data
            </Link>
          </li>
          <li>
            <Link className="link" to="/covid/getDataByState">
              Get Data by State
            </Link>
          </li>
          <li>
            <Link className="link" to="/covid/delete">
              Delete Data
            </Link>
          </li>
          <li>
            <Link className="link" to="/covid/getByDeathState">
              Get by Death State
            </Link>
          </li>
          <li>
            <Link className="link" to="/covid/displayDocumentsByDeaths">
              Display 20 Records By Deaths
            </Link>
          </li>
          <li>
            <Link className="link" to="/covid/displayStatesByCasesAndDeaths">
              Display States By Cases And Deaths
            </Link>
          </li>
          <li>
            <Link className="link" to="/covid/getByDeathCases">
              Get by Death Cases
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
