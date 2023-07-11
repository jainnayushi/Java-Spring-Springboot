import "./App.css";
import AddDataForm from "./Components/AddDataForm";
import UpdateDataForm from "./Components/UpdateDataForm";
import GetDataByState from "./Components/GetDataByState";
import DeleteDataForm from "./Components/DeleteDataForm";
import GetDataByDeathCases from "./Components/GetDataByDeathCases";
import GetByDeathState from "./Components/GetByDeathState";
import DisplayDocumentsByDeaths from "./Components/DisplayDocumentsByDeaths";
import DisplayStatesByCasesAndDeaths from "./Components/DisplayStatesByCasesAndDeaths";

import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid/add" element={<AddDataForm />} />
          <Route path="/covid/update" element={<UpdateDataForm />} />
          <Route path="/covid/getDataByState" element={<GetDataByState />} />
          <Route path="/covid/delete" element={<DeleteDataForm />} />
          <Route path="/covid/getByDeathState" element={<GetByDeathState />} />
          <Route
            path="/covid/displayDocumentsByDeaths"
            element={<DisplayDocumentsByDeaths />}
          />
          <Route
            path="/covid/displayStatesByCasesAndDeaths"
            element={<DisplayStatesByCasesAndDeaths />}
          />
          <Route
            path="/covid/getByDeathCases"
            element={<GetDataByDeathCases />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
