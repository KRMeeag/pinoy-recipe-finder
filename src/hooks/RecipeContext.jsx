import { createContext, useContext, useState, useEffect } from "react";

const RecipeContext = createContext({ data: null });

export function RecipeProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const favoritesAmt = favorites.length;

  // Fetching JSON File in Public
  useEffect(() => {
    console.log("Attempting to get file...");
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((json) => {
        setData(Array.isArray(json) ? json : json.recipes ?? []);
      })
      .catch((err) => {
        console.error("Error fetching JSON:", err);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter for Search Function
  const filterData = data
    ? data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  // Set Recipes to Favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log("Current favorite IDs:", favorites)
  }, [favorites]);

  // Gets all of the data only from the favorites
  const favoritesData = favorites
    ? data.filter((d) => favorites.includes(d.id))
    : [];

  return (
    <RecipeContext.Provider
      value={{
        data,
        loading,
        filterData,
        favorites,
        favoritesData,
        favoritesAmt,
        setSearch,
        setFavorites,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export const useRecipe = () => useContext(RecipeContext);
