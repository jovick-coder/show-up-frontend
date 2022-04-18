import React from "react";
import { LogoComponent } from "../NavBar/NavBarComponent";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <div className="FooterComponent mt-4 ">
      <div>
        {" "}
        <LogoComponent /> <span className="fs-4 fw-1">ShowUp</span>
      </div>
      <b className="mx-auto">About</b>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, sed cum.
      <ul>
        <li>About</li>
        <li>Teams & condition</li>
        <li>Sponsor</li>
      </ul>
    </div>
  );
}

export default FooterComponent;
