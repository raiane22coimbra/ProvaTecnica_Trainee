import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/index";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Routes from "./Routes/routes";

function App() {
  return (
    <>
      {/* <Routes /> */}
      <Home />
      {/* <Login/> */}
      {/* <Dashboard/> */}
      {/* <Router>
          <Route exact path="/" component={<Home/>} />
          <Route path="/login" component={<Login/>} />
          {/* <Route component = { SigUp }  path="/sigin" /> */}
    {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
