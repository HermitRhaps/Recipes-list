import React from "react";
import { connect } from "react-redux";
const SideBarElements = ({ state, style }) => {
  return (
    <div>
      {state.recipes.map((item, index) => (
        <button key={index}>{item.text}</button>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(SideBarElements);
