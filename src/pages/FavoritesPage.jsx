import CardSection from "../components/CardSection.jsx";
import { useRecipe } from "../hooks/RecipeContext.jsx";
import { Link } from "react-router";

const FavoritesPage = () => {
  const { favoritesData: recipes, loading } = useRecipe();

  if (loading) {
    return (
      <div className="p-6 text-center w-full">
        <h1>Loading Cook-oo...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="h-16 w-full"></div>
      <div className="w-full mx-auto mt-7 text-center">
        <h1 className="text-6xl">Favorite Recipes</h1>
      </div>
      <hr class="my-6 h-0.5 border-t-0 bg-gray-200" />
      {!recipes || recipes.length === 0 ? (
        <div className="p-6 text-center w-full">
          <h2 className="text-3xl">You have not favorited any recipes!</h2>
          <Link to="/">
            <button className="btn btn-primary m-7 px-5 py-5">
              Start Browsing
            </button>
          </Link>
        </div>
      ) : (
        <CardSection recipes={recipes} />
      )}
    </div>
  );
};

export default FavoritesPage;
