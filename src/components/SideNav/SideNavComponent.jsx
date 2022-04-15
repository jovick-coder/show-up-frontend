import React from "react";
import "./SideNavComponent.css";
import { BsBinocularsFill, BsSaveFill, BsStarFill } from "react-icons/bs";

function SideNavComponent() {
  return (
    <div className="SideNavComponent">
      {/* SideNavComponent */}
      <ul>
        <li>
          <BsBinocularsFill className="SideNavComponentIcon" /> Explore
        </li>{" "}
        <li>
          <BsStarFill className="SideNavComponentIcon" /> Favorite
        </li>{" "}
        <li>
          <BsSaveFill className="SideNavComponentIcon" /> Saved
        </li>{" "}
        <li>
          <BsBinocularsFill className="SideNavComponentIcon" /> Explore
        </li>{" "}
        <li>
          <BsBinocularsFill className="SideNavComponentIcon" /> Explore
        </li>
      </ul>
    </div>
  );
}

export default SideNavComponent;
