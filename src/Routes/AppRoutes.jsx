import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="sign-in" element={<Login />} />
        <Route path="sign-up" element={<Register />} /> */}
      </Route>

      {/* Error Page */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
