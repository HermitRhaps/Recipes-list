import React from "react";
import "../../styles/modal.scss";
import CreateOrEdit from "./methods/CreateOrEdit";
import { Conformation } from "./methods/Conformation";
export const Modal = ({ isOpen, id, type, recipeRemove }) => {
  const handleModalStatus = () => {
    isOpen(false);
  };
  return (
    <div className="modal_container">
      <div className="modal_header">
        <button className="modal_close" onClick={handleModalStatus}>
          Close
        </button>
      </div>
      {type === "Delete" ? (
        <Conformation status={isOpen} remove={recipeRemove} />
      ) : (
        <CreateOrEdit status={isOpen} id={id} />
      )}
    </div>
  );
};
