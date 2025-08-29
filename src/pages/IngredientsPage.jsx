import { useParams } from "react-router";
import { useEffect } from "react";
import ProcessIngredients from "../components/ProcessIngredients";
import HeroSectionIngredients from "../components/HeroSectionIngredients";
import { useRecipe } from "../hooks/RecipeContext";
import { usePage } from "../hooks/CurrentPageContext";

const IngredientsPage = () => {
  const { id } = useParams();
  const { data: recipes, loading } = useRecipe();
  const {setData } = usePage();

  if (loading) {
    return (
      <div>
        <div className="h-16 w-full"></div>
        <div className="p-6 text-center w-full">
          <h1>Loading Cook-oo...</h1>
        </div>
      </div>
    );
  }

  if (!recipes || recipes.length === 0 || (id > recipes.length)) {
    return (
      <div>
        <div className="h-16 w-full"></div>
        <div className="p-6 text-center w-full min-h-screen">
          <h1 className="text-7xl m-auto">Recipe does not exist</h1>
        </div>
      </div>
    );
  }

  const recipeId = parseInt(id, 10);
  const recipe = recipes ? recipes.find((r) => r.id === recipeId) : null;

  useEffect(() => {
    if (recipe) {
      setData(recipe);
    }
    window.scrollTo(0, 0);
  }, [recipe, setData]);

  if (!recipes) return <div className="p-6">Loading...</div>;
  if (!recipe) return <div className="p-6">Recipe not found.</div>;

  return (
    <div>
      <div className="h-16 w-full"></div>
      <HeroSectionIngredients {...recipe} />
      <ProcessIngredients {...recipe} />
    </div>
  );
};

export default IngredientsPage;
