import React, { Fragment } from "react";
import { connect } from "react-redux";
import Recipe from "./Recipe";
const RecipeList = ({ state, dispatch }) => {
  return (
    <Fragment>
      {state.recipes.map((item, index) => (
        <Recipe key={index} index={index} item={item} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(RecipeList);
