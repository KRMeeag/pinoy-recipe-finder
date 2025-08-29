import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import IngredientsPage from "./pages/IngredientsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import { Routes, Route, Link } from "react-router-dom";
import { useRecipe } from "./hooks/RecipeContext.jsx";

export default function App() {
  const {data: recipes, loading} = useRecipe();

  if (loading) {
    return <div className="p-6">Loading recipes...</div>
  }

  if (!recipes || recipes.length === 0) {
    return <div className="p-6">No recipes found...</div>
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<IngredientsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<div className="p-6">404 — page not found</div>} />
      </Routes>
    </>
  );
}
