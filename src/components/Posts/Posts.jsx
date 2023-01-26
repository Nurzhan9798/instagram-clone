import React from "react";
import { posts } from "./data";
import { Post } from "./Post";
import "./Posts.css";

export const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.postId} {...post} />
      ))}
    </div>
  );
};
