import React from "react";
import { connect } from "react-redux";
import Recipe from "./Recipe";
import "../styles/recipeList.scss";
import Grid from "@material-ui/core/Grid";
const RecipeList = ({ state, dispatch, modalStatus }) => {
  return (
    <div className={!modalStatus ? "recipes_list_container" : "hidden"}>
      <div className="recipes_list_items">
        <Grid container spacing={3}>
          {!state.isUsedFilter
            ? state.recipes.map((item, index) => (
                <Grid item xs={6} sm={3} className="recipe">
                  <Recipe key={index} index={index} item={item} />
                </Grid>
              ))
            : state.filtered.map((item, index) => (
                <Recipe key={index} index={index} item={item} />
              ))}
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(RecipeList);
