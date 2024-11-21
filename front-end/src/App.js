import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";
import ProtectRouter from "./components/ProtectRouter/ProtectRouter";

//Pages
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Calculator from "./pages/Calculator/Calculator";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Content from "./pages/Content/Content";

//context
import { AdaptProvider } from "./context/Adapt";
import { UserAccessProvider } from "./context/UserAccess";

import "./App.css";

function App() {
  return (
    <UserAccessProvider>
      <AdaptProvider>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={
                  <ProtectRouter component={Register} redirectTo={Home} />
                }
              />
              <Route path="/calculator" element={<Calculator />} />

              <Route
                path="/profile"
                element={
                  <ProtectRouter component={Home} redirectTo={Profile} />
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectRouter component={Login} redirectTo={Profile} />
                }
              />

              <Route
                path="/content"
                element={
                  <ProtectRouter component={Home} redirectTo={Content} />
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </AdaptProvider>
    </UserAccessProvider>
  );
}

export default App;
