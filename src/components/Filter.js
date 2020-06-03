import React, { Fragment } from "react";
import { connect } from "react-redux";
import { filterRecipe } from "../redux/actions/filterRecipe";
import "../styles/filter.scss";
const Filter = ({ state, dispatch }) => {
  return (
    <Fragment>
      <form className="filter_form">
        <div className="filter_from_item">
          {state.recipes.length !== 0 ? (
            <select
              className="filter_select"
              onChange={(e) => dispatch(filterRecipe(e.target.value))}
              defaultValue="Select category filter"
            >
              <option defaultValue disabled>
                Select category filter
              </option>
              {state.categories.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          ) : (
            <select
              disabled
              className="filter_select_disabled"
              defaultValue="There no recipes"
            >
              <option defaultValue disabled>
                There no recipes
              </option>
            </select>
          )}
        </div>
        <div className="filter_from_item">
          <button type="submit" className="filterSubmit">
            Reset
          </button>
        </div>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Filter);
