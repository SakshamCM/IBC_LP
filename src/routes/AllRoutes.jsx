import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Thankyou from "../pages/Thankyou";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/thank-you" element={<Thankyou />} />
    </Routes>
  );
};

export default AllRoutes;
