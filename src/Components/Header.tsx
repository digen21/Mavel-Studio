import React from "react";

function Header() {
  return (
    <>
      <nav>
        <div className="--logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="--img-container">
          <img className="--img" src="/captain-america.png" alt="" />
          <img className="--img" src="/ironman.png" alt="" />
          <img className="--img" src="/thor.png" alt="" />
          <img className="--img" src="/panther.png" alt="" />
        </div>
        <div className="--search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Movie Here..."
          />
          <span>
            <i className="uil uil-search search"></i>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Header;
