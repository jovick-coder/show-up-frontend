import React from "react";
import { ProfilePicture } from "../NavBar/NavBarComponent";
import "./PostComponent.css";
import img from "../../assets/images/profilePicture.jpg";
import { RiLightbulbFill, RiLightbulbFlashFill } from "react-icons/ri";
import { FaComment } from "react-icons/fa";
import {
  BsFillLightbulbOffFill,
  BsStarFill,
  BsThreeDotsVertical,
} from "react-icons/bs";

function PostComponent() {
  return (
    <div className="PostComponent">
      <div className="d-flex header justify-content-between">
        <div className="d-flex">
          {" "}
          <ProfilePicture />
          <div className="d-flex my-auto flex-column">
            <b>UserName</b>Date
          </div>
        </div>
        <BsThreeDotsVertical className="fs-4 my-auto" />
      </div>
      <hr />
      <img src={img} alt="" className="img-fluid" />
      <input type="checkbox" name="" id="postReadMore" />
      <label htmlFor="postReadMore" className="postText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum culpa
        minus vero fugit qui, inventore molestiae dolor earum, asperiores,
        necessitatibus aut debitis porro nobis sequi officia velit ipsam
        nostrum!
      </label>
      <hr />
      <PostFooterComponent />
    </div>
  );
}

export default PostComponent;

export function PostFooterComponent() {
  return (
    <ul className="PostFooterComponent">
      {/* <li>
        <RiLightbulbFlashFill className="PostFooterComponentIcon" title="Insightful" />
      </li> */}
      <li title="Not insightful">
        <BsFillLightbulbOffFill className="PostFooterComponentIcon" />
      </li>
      <li title="Comment">
        <FaComment className="PostFooterComponentIcon" />
      </li>
      <li title="Star Post">
        <BsStarFill className="PostFooterComponentIcon" />
      </li>
    </ul>
  );
}
