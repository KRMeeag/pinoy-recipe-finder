import { Link } from "react-router";
import { useRecipe } from "../hooks/RecipeContext";

const Navbar = () => {
  const { favoritesAmt: ctr } = useRecipe();

  return (
    <div className="navbar bg-accent shadow-sm fixed z-50 text-gray-50 max-h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
          >
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <li>
                <button className="btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Home
                </button>
              </li>
            </Link>
            <Link to="/favorites" onClick={() => window.scrollTo(0, 0)}>
              <li>
                <button className="btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Favorites
                  <span className="badge badge-secondary">{ctr}</span>
                </button>
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <div className="h-12">
            <img src="/assets/cook-oo.svg" className="h-full" />
          </div>
          <span className="text-xl my-auto omc">Cook-Oo</span>
        </div>
      </div>
      <div className="navbar-center">
        <div className="flex lg:hidden">
          <div className="h-12">
            <img src="/assets/cook-oo.svg" className="h-full" />
          </div>
          <span className="text-xl my-auto omc">Cook-Oo</span>
        </div>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:inline">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <button className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clipRule="evenodd"
                />
              </svg>
              Home
            </button>
          </Link>

          <Link to="/favorites" onClick={() => window.scrollTo(0, 0)}>
            <button className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z"
                  clipRule="evenodd"
                />
              </svg>
              Favorites
              <span className="badge badge-secondary">{ctr}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
