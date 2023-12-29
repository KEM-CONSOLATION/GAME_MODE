import "./App.css";
import { useState } from "react";
import Single from "./assets/Single.png";
import Challenge from "./assets/Challenge.png";
import MultiPlayer from "./assets/MultiPlay.png";
import Dot from "./assets/Dot.png";
import Soccer from "./assets/Soccer.png";
import Man from "./assets/Man.png";
import Woman from "./assets/Woman.png";
import SIdeBar from "./Components/SIdeBar";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className="flex bg-[#060D1F] ">
      <SIdeBar />
      <Dashboard />
    </div>
  );
};
export default App;
