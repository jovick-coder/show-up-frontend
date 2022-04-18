import React, { useState } from "react";
import { ProfilePicture } from "../NavBar/NavBarComponent";
import "./PostComponent.css";
import img from "../../assets/images/profilePicture.jpg";
import { FaComment } from "react-icons/fa";

import { RiLightbulbFlashFill } from "react-icons/ri";
import {
  BsEyeSlashFill,
  BsFillLightbulbOffFill,
  BsFillXCircleFill,
  BsSave2Fill,
  BsStarFill,
  BsThreeDotsVertical,
  BsX,
  BsXLg,
} from "react-icons/bs";

function PostComponent({ isLoggedIn, setIsError }) {
  const [readMore, setReadMore] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [postLike, setPostLike] = useState(false);
  const [postStar, setPostStar] = useState(false);

  return (
    <div className="PostComponent">
      <div className="d-flex header justify-content-between">
        <div className="d-flex">
          {" "}
          <ProfilePicture />
          <div className="d-flex my-auto flex-column">
            <b>UserName</b>
            <span className="postDate">12-04-2022</span>
          </div>
        </div>
        <div
          className=" my-auto me-3 postMenuDiv"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {menuIsOpen ? (
            <BsXLg />
          ) : (
            <BsThreeDotsVertical className="fs-4 my-auto ms-auto" />
          )}
          <ul
            className="postMenu"
            style={menuIsOpen ? { display: "block" } : null}
          >
            {/* <li>
              <BsX />
              Delete post
            </li> */}
            <li>
              <BsSave2Fill /> Save post
            </li>
            <li>
              <BsFillXCircleFill /> Report Post
            </li>
            {/* <li>postMenu4</li> */}
          </ul>
        </div>
      </div>
      <hr />
      <img src={img} alt="" className="img-fluid" />
      <label
        htmlFor="postReadMore"
        className={`postText ${readMore ? "postTextReadMore" : null} `}
        style={readMore ? { height: "auto" } : null}
        onClick={() => setReadMore(!readMore)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum culpa
        minus vero fugit qui, inventore molestiae dolor earum, asperiores,
        necessitatibus aut debitis porro nobis sequi officia velit ipsam
        nostrum!
      </label>
      <hr />
      <PostFooterComponent
        setPostLike={setPostLike}
        postLike={postLike}
        postStar={postStar}
        setPostStar={setPostStar}
        isLoggedIn={isLoggedIn}
        setIsError={setIsError}
      />
    </div>
  );
}

export default PostComponent;

export function PostFooterComponent({
  postLike,
  setPostLike,
  postStar,
  setPostStar,
  isLoggedIn,
  setIsError,
}) {
  return (
    <ul className="PostFooterComponent">
      {/* <li>
        
      </li> */}
      <li
        title="Not insightful"
        onClick={() =>
          isLoggedIn
            ? setPostLike(!postLike)
            : setIsError({
                error: true,
                message: "Login before you can Like a post",
              })
        }
      >
        {postLike ? (
          <RiLightbulbFlashFill
            className="PostFooterComponentIcon"
            title="Insightful"
          />
        ) : (
          <BsFillLightbulbOffFill className="PostFooterComponentIcon" />
        )}
      </li>
      <li title="Comment">
        <FaComment className="PostFooterComponentIcon" />
      </li>
      <li
        title="Star Post"
        onClick={() =>
          isLoggedIn
            ? setPostStar(!postStar)
            : setIsError({
                error: true,
                message: "Login before you can star a post",
              })
        }
      >
        <BsStarFill
          className="PostFooterComponentIcon"
          style={postStar ? { color: "rgb(206, 206, 0)" } : null}
        />
      </li>
    </ul>
  );
}
