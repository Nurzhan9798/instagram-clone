import React from "react";
import { Posts } from "../Posts/Posts";
import { Stories } from "../Stories/Stories";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
};
