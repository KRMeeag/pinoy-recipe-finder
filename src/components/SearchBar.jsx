import { useState } from "react";
import { useRecipe } from "../hooks/RecipeContext";

const SearchBar = () => {
  const [searchKey, setSearchKey] = useState("");
  const {filterData: recipe, setSearch} = useRecipe();

  function handleTyping(event) {
    const val = event.target.value;
    setSearch(val);
    console.log("Search: ", searchKey);
    console.log("Elements: ", recipe);
  }

  return (
    <section>
      <div className="hero min-h-48 scroll-mt-10" id="searchBar">
        <div className="hero-content text-center pt-15">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Search for Recipes</h1>
            <p className="py-6">
              <label className="input">
                <svg
                  class="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" class="grow" placeholder="Search" onChange={handleTyping}/>
              </label>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
