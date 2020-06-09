import React, { Fragment } from "react";
import { connect } from "react-redux";
import { filterRecipe } from "../redux/actions/filterRecipe";
import { resetFilter } from "../redux/actions/resetFilter";
import "../styles/filter.scss";
const Filter = ({ state, dispatch }) => {
  const handleFilterCategoryChange = (e) => {
    dispatch(filterRecipe(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetFilter());
  };

  return (
    <Fragment>
      <div className="filter_items">
        <div className="filter_select_container">
          {state.recipes.length !== 0 ? (
            <select
              className="filter_select"
              onChange={handleFilterCategoryChange}
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
        <div className="filter_button_container">
          <button type="submit" className="filterSubmit" onClick={handleSubmit}>
            Reset
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Filter);
