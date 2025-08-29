import { usePage } from "../hooks/CurrentPageContext";
import { useRecipe } from "../hooks/RecipeContext";

const HeroSectionIngredients = () => {
  const { data: pageData } = usePage();
  const { favorites, setFavorites } = useRecipe();
  const { id, name, image, description } = pageData || {};

  const toggleFavorites = () => {
    setFavorites((prevItems) => {
      if (prevItems.includes(id)) {
        return prevItems.filter((item) => item !== id);
      } else {
        return [...prevItems, id];
      }
    });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
      }}
    >
      <div className="h-full w-full bg-gray-950 opacity-50"></div>
      <div className="hero-content text-center text-gray-100">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">{name || "Untitled"}</h1>
          <p className="mb-5 font-bold">{description || "?"}</p>
          <a href="#ingredients">
            <button className="btn btn-primary m-1.5">Get Started</button>
          </a>
          <button onClick={toggleFavorites} className="btn btn-primary m-1.5">
            {favorites.includes(id)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionIngredients;
