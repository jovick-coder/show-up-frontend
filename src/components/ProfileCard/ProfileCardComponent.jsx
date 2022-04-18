import React from "react";
import { BsLink, BsPersonFill, BsPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProfilePicture } from "../NavBar/NavBarComponent";
import "./ProfileCardComponent.css";

function ProfileCardComponent() {
  return (
    <div className="ProfileCardComponent">
      <div className="mx-auto my-2">
        <ProfilePicture />
      </div>
      <Link to="" className="mx-auto">
        UserName
      </Link>
      <ul className="d-flex flex- column justify-content-between flex-wrap mt-2">
        {/* <li>
          <b>Post</b>: 1200
        </li> */}
        <li>
          <b>Friends</b>: 1000
        </li>
        <li>
          <b>Following</b>: 1200
        </li>
      </ul>
      <div className="d-flex justify-content-around mt-2">
        <Link to={""}>
          <BsPersonFill />
          Profile
        </Link>
        <Link to="">
          <BsPersonLinesFill /> Edit Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileCardComponent;
