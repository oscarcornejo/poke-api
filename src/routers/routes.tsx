import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, PokemonPage } from "../pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/:id" element={<PokemonPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
