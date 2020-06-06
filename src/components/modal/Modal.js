import React, { useState } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../redux/actions/createRecipe";
import "../../styles/modal.scss";
import { TextField, Button } from "@material-ui/core";
import Create from "./methods/Create";
import Edit from "./methods/Edit";
export const Modal = ({ isOpen, id, type }) => {
  return (
    <div className="modal_container">
      <div className="modal_header">
        <Button className="modal_close" onClick={() => isOpen(false)}>
          Close
        </Button>
      </div>
      {type === "Create" ? (
        <Create status={isOpen} />
      ) : (
        <Edit id={id} status={isOpen} />
      )}
    </div>
  );
};
