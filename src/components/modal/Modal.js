import React from "react";
import "../../styles/modal.scss";
import Create from "./methods/Create";
import Edit from "./methods/Edit";
export const Modal = ({ isOpen, id, type }) => {
  return (
    <div className="modal_container">
      <div className="modal_header">
        <button className="modal_close" onClick={() => isOpen(false)}>
          Close
        </button>
      </div>
      {type === "Create" ? (
        <Create status={isOpen} />
      ) : (
        <Edit id={id} status={isOpen} />
      )}
    </div>
  );
};
