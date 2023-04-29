import { Route, Routes as RoutesRRD, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HomeScreen } from "./pages/HomeScreen";
import { Login } from "./pages/Login";
import { MainScreen } from "./pages/MainScreen";
import { Register } from "./pages/Register";

export const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <RoutesRRD key={location.pathname} location={location}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<MainScreen />} />
        <Route path="register" element={<Register />} />
      </RoutesRRD>
    </AnimatePresence>
  );
};
