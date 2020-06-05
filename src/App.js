import React, { useEffect } from "react";
import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "./redux/actions/fetchRecipes";
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("recipes")) {
      dispatch(fetchRecipes());
    }
  });
  return (
    <div>
      <Navigation />
      <Main />
    </div>
  );
};
