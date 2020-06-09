import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { filterRecipe } from "../redux/actions/filterRecipe";
import { resetFilter } from "../redux/actions/resetFilter";
import "../styles/filter.scss";
const Filter = ({ state, dispatch }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const handleFilterCategoryChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFilter) {
      dispatch(filterRecipe(selectedFilter));
    }
  };
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetFilter());
    setSelectedFilter("");
  };
  return (
    <Fragment>
      <div className="filter_container">
        <div className="filter_items">
          <form onSubmit={handleSubmit} className="filter_form">
            <div className="filter_select_container">
              {state.recipes.length !== 0 ? (
                <select
                  className="filter_select"
                  onChange={handleFilterCategoryChange}
                  value={
                    selectedFilter ? selectedFilter : "Filter was not selected"
                  }
                >
                  <option defaultValue disabled>
                    {selectedFilter
                      ? selectedFilter
                      : "Filter was not selected"}
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
              <button type="submit" className="filterSubmit">
                Filter
              </button>
            </div>
          </form>
          <div className="reset_button_container">
            <button
              type="submit"
              className="filterSubmit"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Filter);
