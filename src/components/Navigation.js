import React, { useState } from "react";
import CreateRecipeForm from "./CreateRecipeForm";
import Filter from "./Filter";

import "../styles/navigation.scss";
export const Navigation = () => {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <section className="navbar">
      <nav className="nav_container">
        <div className="nav_item">
          {!modalStatus ? (
            <button
              onClick={() => setModalStatus(true)}
              className="create_modal_button"
            >
              Open modal to create recipe
            </button>
          ) : (
            <button className="create_modal_button_disabled" disabled>
              Current modal is active
            </button>
          )}
        </div>
        <div className="nav_item">
          <Filter />
        </div>
      </nav>
      {modalStatus ? <CreateRecipeForm isOpen={setModalStatus} /> : null}
    </section>
  );
};
