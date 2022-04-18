import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import PostComponent from "../../components/Post/PostComponent";
import PostFormComponent from "../../components/PostForm/PostFormComponent";

function PostPage() {
  return (
    <div>
      <h3 className="m-3 d-flex">
        {" "}
        <BsPencilSquare className="me-1" /> POst
      </h3>
      <hr />
      <PostFormComponent />
    </div>
  );
}

export default PostPage;
