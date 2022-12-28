import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import App from "./App";
import { HomeScreen } from "./pages/HomeScreen";
import { Login } from "./pages/Login";
import { MainScreen } from "./pages/MainScreen";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeScreen />} />
      <Route path="login" element={<Login />} />
      <Route path="main" element={<MainScreen />} />

    </Route>
  )
);
