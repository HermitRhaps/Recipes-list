import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Modal } from "./modal/Modal";
import Filter from "./Filter";
import "../styles/sidebar.scss";
import Logo from "../styles/default/logo.jpg";
const Sidebar = ({ state, dispatch }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalStatusChange = () => {
    setModalOpen(true);
  };
  return (
    <Fragment>
      <div className="sidebar_container">
        <div className="sidebar_logo">
          <a href="https://github.com/HermitRhaps">
            <img src={Logo} alt="Project title" className="logo_image" />
          </a>
        </div>
        <div className="sidebar_control">
          <div className="modal_control">
            {!modalOpen ? (
              <button
                onClick={handleModalStatusChange}
                className="sidebar_modal_button"
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
            <button key={index} className="sidebar_button">
              {item.text}
            </button>
          ))}
        </div>
      </div>
      {modalOpen ? <Modal isOpen={setModalOpen} type="Create" /> : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state.recipeReducer,
});
export default connect(mapStateToProps, null)(Sidebar);
