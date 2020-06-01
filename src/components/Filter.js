import React from "react";
import { connect } from "react-redux";
import { filterRecipe } from "../redux/actions/filterRecipe";
const Filter = ({ state, dispatch }) => {
  return (
    <div>
      <select onChange={(e) => dispatch(filterRecipe(e.target.value))}>
        {state.categories.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Filter);
