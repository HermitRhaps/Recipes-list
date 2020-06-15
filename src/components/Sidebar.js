import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { ModalOut } from "./modal/Modal";
import Filter from "./Filter";
import "../styles/sideBar.scss";
import Logo from "../styles/default/logo.jpg";
const Sidebar = ({ state, dispatch }) => {
  const [modalType, setModalType] = useState("");
  const [index, setIndex] = useState();
  const handleModalStatusChange = (e) => {
    switch (e.target.attributes.getNamedItem("data-type").value) {
      case "Show":
        setModalType(e.target.attributes.getNamedItem("data-type").value);
        setIndex(e.target.value);
        break;
      default:
        setModalType(e.target.attributes.getNamedItem("data-type").value);
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
    <Fragment>
      <div className="sidebar_container">
        <div className="sidebar_logo">
          <a href="https://github.com/HermitRhaps">
            <img src={Logo} alt="Project title" className="logo_image" />
            <p>Made by HermitRhaps</p>
          </a>
        </div>
        <div className="sidebar_control">
          <div className="modal_control">
            {!modalType ? (
              <button
                onClick={handleModalStatusChange}
                className="sidebar_modal_button"
                data-type="Operation"
              >
                Create recipe
              </button>
            ) : (
              <button className="sidebar_modal_button_disabled" disabled>
                Curent operation is active
              </button>
            )}
            <Filter />
          </div>
        </div>
        <div className="sidebar_recipes">
          {state.recipes.map((item, index) => (
            <button
              key={index}
              className="sidebar_button"
              data-type="Show"
              onClick={handleModalStatusChange}
              value={index}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
      {handleTypeModal(modalType)}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Sidebar);
