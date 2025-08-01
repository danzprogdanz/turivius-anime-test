import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AnimesByCategory from "../pages/AnimesByCategory";
import AnimeDetails from "../pages/AnimeDetails";
import Home from "../pages/Home";
import AnimesList from "../pages/AnimesList";
import { useEffect } from "react";
import { useAnimeCategory } from "../context/AnimeCategoryProvider";
import Categories from "../pages/Categories";


const MainRoutes = () => {
  const location = useLocation();
  const { resetCategory } = useAnimeCategory();

  useEffect(() => {
    if (!location.pathname.startsWith('/home/animes/categories/')) {
      resetCategory();
    }
  }, [location.pathname, resetCategory]);

  return (
    <Routes>
      <Route path="/home/animes/categories/:category" element={<AnimesByCategory />} />
      <Route path="/home/animes/categories" element={<Categories />} />
      <Route path="/home/animes/:id" element={<AnimeDetails />} />
      <Route path="/home/animes" element={<AnimesList />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default MainRoutes;