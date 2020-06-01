import React, { useState } from "react";
import CreateRecipeForm from "./CreateRecipeForm";
import SideBarElements from "./SideBarElements";
import Filter from "./Filter";
export const Navigation = () => {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <div>
      <button onClick={() => setModalStatus(true)}>Open modal</button>
      {modalStatus ? <CreateRecipeForm /> : null}
      <SideBarElements />
      <Filter />
    </div>
  );
};
