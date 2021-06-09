import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { filterRecipe } from "../redux/actions/filterRecipe";
import { resetFilter } from "../redux/actions/resetFilter";
import { Grid, Button, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  select: {
    color: "gray",
  },
});
const Filter = ({ state, dispatch }) => {
  const classes = useStyles();
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
    <Grid container>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit} className="filter_form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {state.recipes.length !== 0 ? (
                <Select
                  fullWidth
                  variant="outlined"
                  onChange={handleFilterCategoryChange}
                  value={
                    selectedFilter ? selectedFilter : "Filter was not selected"
                  }
                  className={classes.select}
                >
                  <MenuItem
                    defaultValue
                    disabled
                    value={"Filter was not selected"}
                  >
                    {selectedFilter
                      ? selectedFilter
                      : "Filter was not selected"}
                  </MenuItem>
                  {state.categories.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              ) : (
                <Select
                  disabled
                  defaultValue="There no recipes"
                  fullWidth
                  variant="outlined"
                  value={"There no recipes"}
                >
                  <MenuItem defaultValue disabled value={"There no recipes"}>
                    There no recipes
                  </MenuItem>
                </Select>
              )}
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="outlined" fullWidth>
                Filter
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" onClick={handleReset} fullWidth>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Filter);
