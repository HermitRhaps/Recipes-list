import React, { useEffect, useState } from "react";
import "../../styles/modal.scss";
import CreateOrEdit from "./methods/CreateOrEdit";
import { Conformation } from "./methods/Conformation";
import Show from "./methods/Show";
import Modal from "@material-ui/core/Modal";
export const ModalOut = ({ isOpen, id, type, recipeRemove, item }) => {
  const handleModalStatus = () => {
    isOpen(false);
  };
  const handleTypeModal = (type) => {
    switch (type) {
      case "Operation":
        return <CreateOrEdit status={isOpen} id={id} item={item} />;
      case "Delete":
        return <Conformation status={isOpen} remove={recipeRemove} />;
      case "Show":
        return <Show status={isOpen} item={item} id={id} />;
      default:
        return "There no such type, sorry about that :(";
    }
  };
  return (
    <Modal open={handleModalStatus} onClose={handleModalStatus}>
      <div className="modal_container">
        <div className="modal_header">
          <button className="modal_close" onClick={handleModalStatus}>
            Close
          </button>
        </div>
        {handleTypeModal(type)}
      </div>
    </Modal>
  );
};
