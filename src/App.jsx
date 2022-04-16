import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import SideNavComponent from "./components/SideNav/SideNavComponent";
import { useState } from "react";
import LoginComponent from "./components/Login/LoginComponent";
import NotFound from "./components/NotFound/NotFound";
import LandingPage from "./pages/LandingPage/LandingPage";
import ExplorePage from "./pages/Explore/ExplorePage";
import FavoritePage from "./pages/Favorite/FavoritePage";
import PostPage from "./pages/Post/PostPage";
import { BsBinocularsFill } from "react-icons/bs";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
      <NavBarComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container-lg">
        <div className="row  main-app-gride">
          <div className="col-md-3">
            <div className="SideNavCol">
              {isLoggedIn ? (
                <SideNavComponent />
              ) : (
                <LoginComponent setIsLoggedIn={setIsLoggedIn} />
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-col">
              {" "}
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/favorite" element={<FavoritePage />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
              </Routes>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" side-card">col-md-3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
