import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={props.logoSrc} alt="logo" className="logo" />
      </div>
      <h5>{props.title}</h5>
      <p>{props.subtitle}</p>
    </footer>
  );
}
