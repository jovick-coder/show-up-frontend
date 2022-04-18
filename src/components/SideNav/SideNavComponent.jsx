import React from "react";
import "./SideNavComponent.css";
import {
  BsBinocularsFill,
  BsHouseFill,
  BsPencilSquare,
  BsSaveFill,
  BsStarFill,
} from "react-icons/bs";
import { Link, Router } from "react-router-dom";

function SideNavComponent() {
  return (
    <div className="SideNavComponent">
      {/* SideNavComponent */}
      <ul>
        <Link to={"/"}>
          <li>
            <BsHouseFill className="SideNavComponentIcon" /> Home
          </li>{" "}
        </Link>{" "}
        <Link to={"./post"}>
          <li>
            <BsPencilSquare className="SideNavComponentIcon" /> Post
          </li>{" "}
        </Link>
        <Link to={"./explore"}>
          <li>
            <BsBinocularsFill className="SideNavComponentIcon" /> Explore
          </li>{" "}
        </Link>
        <Link to="./favorite">
          <li>
            <BsStarFill className="SideNavComponentIcon" /> Favorite
          </li>{" "}
        </Link>
        <Link to="./saved">
          <li>
            <BsSaveFill className="SideNavComponentIcon" /> Saved
          </li>{" "}
        </Link>
        <Link to="">
          <li>
            <BsBinocularsFill className="SideNavComponentIcon" /> Explore
          </li>{" "}
        </Link>
        <Link to="">
          <li>
            <BsBinocularsFill className="SideNavComponentIcon" /> Explore
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideNavComponent;
