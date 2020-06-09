import React from "react";
import "../../../styles/conformation.scss";
export const Conformation = ({ status, remove }) => {
  const handleRemove = () => {
    remove();
  };
  const handleClose = () => {
    status(false);
  };
  return (
    <div className="confirmation_container">
      <div className="confirmation_header">
        <h1>Are you sure?</h1>
      </div>
      <div className="confirmation_items">
        <div className="confirmation_item">
          <button className="confirmation_button" onClick={handleRemove}>
            Yes
          </button>
        </div>
        <div className="confirmation_item">
          <button className="confirmation_button" onClick={handleClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
