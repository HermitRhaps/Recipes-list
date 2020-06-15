import React, { useEffect } from "react";
import { Main } from "./components/Main";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "./redux/actions/fetchRecipes";
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("recipes")) {
      dispatch(fetchRecipes());
    }
  }, [dispatch]);
  return (
    <div>
      <Main />
    </div>
  );
};
