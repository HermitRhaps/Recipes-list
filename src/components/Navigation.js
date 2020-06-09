import React, { useState } from "react";
import Filter from "./Filter";
import { Modal } from "./modal/Modal";
import "../styles/navigation.scss";
export const Navigation = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const handleModalStatus = (e) => {
    setModalStatus(true);
  };
  return (
    <section className="navbar">
      <nav className="nav_container">
        <div className="nav_create">
          {!modalStatus ? (
            <button onClick={handleModalStatus} className="create_modal_button">
              Open modal to create recipe
            </button>
          ) : (
            <button className="create_modal_button_disabled" disabled>
              Current modal is active
            </button>
          )}
        </div>
        <div className="nav_filter">
          <Filter />
        </div>
      </nav>
      {modalStatus ? <Modal isOpen={setModalStatus} type="Create" /> : null}
    </section>
  );
};
