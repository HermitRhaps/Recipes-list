import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { ModalOut } from "./modal/Modal";
import Filter from "./Filter";
import "../styles/sideBar.scss";
import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  side: {
    padding: "1rem",
    textAlign: "center",
  },
  list: {
    textAlign: "center",
  },
});
const Sidebar = ({ state }) => {
  const classes = useStyles();
  const [modalType, setModalType] = useState("");
  const [index, setIndex] = useState();
  const handleModalStatusChange = (e) => {
    switch (e.currentTarget.getAttribute("data-type")) {
      case "Show":
        setModalType(e.currentTarget.getAttribute("data-type"));
        setIndex(e.currentTarget.dataset.index);
        break;
      default:
        setModalType(e.currentTarget.getAttribute("data-type"));
    }
  };
  const handleClose = () => {
    setModalType("");
  };
  const handleTypeModal = (modalType) => {
    switch (modalType) {
      case "Operation":
        return <ModalOut isOpen={handleClose} type="Operation" />;
      case "Show":
        return <ModalOut isOpen={handleClose} type="Show" id={index} />;
      default:
        return null;
    }
  };
  return (
    <Grid container spacing={2} className={classes.side}>
      <Grid item xs={12}>
        <a href="https://github.com/HermitRhaps">
          <p>Made by HermitRhaps</p>
        </a>
      </Grid>

      <Grid item xs={12}>
        <Button
          onClick={handleModalStatusChange}
          fullWidth
          data-type="Operation"
          variant="outlined"
        >
          Create recipe
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Filter />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {state.recipes.length !== 0
            ? state.recipes.map((item, index) => (
                <Grid item xs={6}>
                  <Button
                    key={index}
                    variant="outlined"
                    data-type="Show"
                    onClick={handleModalStatusChange}
                    data-index={index}
                  >
                    {item.text}
                  </Button>
                </Grid>
              ))
            : null}
        </Grid>
      </Grid>
      {handleTypeModal(modalType)}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Sidebar);
