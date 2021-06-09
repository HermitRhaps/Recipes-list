import React from "react";
import "../../styles/modal.scss";
import CreateOrEdit from "./methods/CreateOrEdit";
import { Conformation } from "./methods/Conformation";
import Show from "./methods/Show";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
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
    <Dialog open={handleModalStatus} onClose={handleModalStatus}>
      <DialogActions>
        <Button onClick={handleModalStatus} variant="outlined">
          Close
        </Button>
      </DialogActions>
      <DialogContent>{handleTypeModal(type)}</DialogContent>
    </Dialog>
  );
};
