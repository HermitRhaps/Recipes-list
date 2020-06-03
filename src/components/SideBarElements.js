import React, { Fragment } from "react";
import { connect } from "react-redux";
import "../styles/sideBar.scss";
const SideBarElements = ({ state, style }) => {
  return (
    <Fragment>
      <div className="sidebar_container">
        {state.recipes.map((item, index) => (
          <button key={index} className="sidebar_button">
            {item.text}
          </button>
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(SideBarElements);
