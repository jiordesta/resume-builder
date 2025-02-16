import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Download from "./pages/Download";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/create" Component={Service} />
        <Route path="/download" Component={Download} />
      </Routes>
    </Router>
  );
}
