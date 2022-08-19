import "./sidebar.css";
import React from "react";
import { Search, AddCircle } from "@mui/icons-material";
import Modal from "../modal/Modal";
import { useState } from "react";
export default function Sidebar({ username }) {
  const handleClick = (e) => {
    e.preventDefault();
  };
  const [DisplayModel, setDisplayModel] = useState(false);

  return (
    <>
      {DisplayModel ? <Modal /> : <></>}

      <div className="icon-container">
        <div className="profileLogo-container">
          <button>{ username[0].toUpperCase() }</button>
          <p>{ username }</p>
        </div>
        <div className="Search-icon">
          <Search className="icon-sidebar" />
          <p> search</p>
        </div>

        <div
          onClick={() => setDisplayModel(!DisplayModel)}
          className="Create-icon"
        >
          <AddCircle className="icon-sidebar" />
          <p> create</p>
        </div>
      </div>
    </>
  );
}
