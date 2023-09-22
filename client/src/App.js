import { Route, Routes } from "react-router-dom";
import "./assets/scss/App.scss";
import Landing from "./component/layout/Landing";
import Auth from "./views/Auth";
import Home from "./views/Home";
import ProtectedRounte from "./component/routing/ProtectedRounte";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Auth authRouter="login" />} />
      <Route path="/register" element={<Auth authRouter="register" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
