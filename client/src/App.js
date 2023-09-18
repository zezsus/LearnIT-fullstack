import { Route, Routes } from "react-router-dom";
import "./assets/scss/App.scss";
import Landing from "./component/layout/Landing";
import Auth from "./views/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth authRouter="login" />} />
        <Route path="/register" element={<Auth authRouter="register" />} />
      </Routes>
    </div>
  );
}

export default App;
