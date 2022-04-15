import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import SideNavComponent from "./components/SideNav/SideNavComponent";
import { useState } from "react";
import LoginComponent from "./components/Login/LoginComponent";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <NavBarComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container-lg">
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="card">
              {isLoggedIn ? (
                <SideNavComponent />
              ) : (
                <LoginComponent setIsLoggedIn={setIsLoggedIn} />
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <Router>
                <Routes>
                  {/* <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
                </Routes>
              </Router>
              <NotFound />
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">col-md-3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
