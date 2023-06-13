import { Route, Routes as RoutesRRD, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HomeScreen } from "./pages/HomeScreen";
import { Login } from "./pages/Login";
import { MainScreen } from "./pages/MainScreen";
import { Register } from "./pages/Register";
import { RegulationEvent } from "./pages/RegulationScreen";
import { AboutEvent } from "./pages/AboutScreen";
import { TimeLine } from "./pages/TimeLineScreen";
import { PartnersEvent } from "./pages/PartnersScreen";

export const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <RoutesRRD key={location.pathname} location={location}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<MainScreen />} />
        <Route path="reset-password" element={<Register />} />
        <Route path="regulation-event" element={<RegulationEvent/>} />
        <Route path="about-event" element={<AboutEvent/>}/>
        <Route path="time-line" element={<TimeLine/>}/>
        <Route path="partners-event" element={<PartnersEvent/>}/>
      </RoutesRRD>
    </AnimatePresence>
  );
};
