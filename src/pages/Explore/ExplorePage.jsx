import React from "react";
import { BsBinocularsFill } from "react-icons/bs";
import PageHeaderComponent from "../../components/PageHeader/PageHeaderComponent";
import PostComponent from "../../components/Post/PostComponent";
import ScrollPageComponent from "../../components/ScrollPage/ScrollPageComponent";
import "./ExplorePage.css";
function ExplorePage({ isLoggedIn, setIsError }) {
  return (
    <div className="ExplorePage">
      <PageHeaderComponent>
        <BsBinocularsFill className="me-1" /> Explore
      </PageHeaderComponent>
      <ScrollPageComponent>
        <PostComponent isLoggedIn={isLoggedIn} setIsError={setIsError} />
        <PostComponent isLoggedIn={isLoggedIn} setIsError={setIsError} />
        <PostComponent isLoggedIn={isLoggedIn} setIsError={setIsError} />
        <PostComponent isLoggedIn={isLoggedIn} setIsError={setIsError} />
        <PostComponent isLoggedIn={isLoggedIn} setIsError={setIsError} />
      </ScrollPageComponent>
      {/* <div className="post-scroll">
       
      </div> */}
    </div>
  );
}

export default ExplorePage;
