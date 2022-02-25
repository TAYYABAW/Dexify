import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Layout/Nav";
import CreateDexfund from "./Components/Pages/CreateDexfund";
import Homepage from "./Components/Pages/Homepage";
import PersonalDashboard from "./Components/Pages/PersonalDashboard";
import "./styles/output.css";
import InDex from "./Components/Pages/InDex";
import Manage from "./Components/Pages/Manage";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    // <React.Fragment>
    //   <Nav />
    //   <Homepage />
    // </React.Fragment>
    <Router>
      <div className="bg">
          <Nav />
        <Routes>
          <Route path="/" element={[<Homepage />]} />
          <Route path="/dashboard" element={[<PersonalDashboard />]} />
          <Route exact path="/create" element={[<CreateDexfund />]} />
          <Route exact path="/inside" element={[<InDex />]} />
          <Route exact path="/manage" element={[<Manage />]} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
