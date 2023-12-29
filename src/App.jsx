import "./App.css";
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
