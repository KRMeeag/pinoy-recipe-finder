import CardSection from "../components/CardSection.jsx";
import HeroSectionHome from "../components/HeroSectionHome.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useRecipe } from "../hooks/RecipeContext.jsx";

const HomePage = () => {
  const { filterData: recipes, loading } = useRecipe();

  if (loading) {
    return (
      <div className="p-6 text-center w-full">
        <h1>Loading Cook-oo...</h1>
      </div>
    );
  }

  return (
    <div>
      <HeroSectionHome />
      <SearchBar />
      <CardSection recipes={recipes}/>
    </div>
  );
};

export default HomePage;
