import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
const SideBarElements = ({ state, style }) => {
  return (
    <Fragment>
      {state.recipes.map((item, index) => (
        <Button
          className={style.button}
          variant="contained"
          data-do="createModal"
          key={index}
        >
          {item.text}
        </Button>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(SideBarElements);
