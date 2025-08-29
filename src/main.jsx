import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RecipeProvider } from "./hooks/RecipeContext";
import { CurrentPageProvider } from "./hooks/CurrentPageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipeProvider>
      <CurrentPageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CurrentPageProvider>
    </RecipeProvider>
  </React.StrictMode>
);
