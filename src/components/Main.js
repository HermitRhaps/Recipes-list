import React from "react";
import RecipeList from "./RecipesList";
import SideBarElements from "./Sidebar";
import "../styles/main.scss";
export const Main = () => {
  return (
    <main>
      <div className="main_comtainer">
        <div className="main_side_item">
          <SideBarElements />
        </div>
        <div className="main_item">
          <RecipeList />
        </div>
      </div>
    </main>
  );
};
