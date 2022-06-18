import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { UpdateData } from "../pages/UpdateData";

const ConfigureRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/edit/:id" element={<UpdateData />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default ConfigureRoutes;
