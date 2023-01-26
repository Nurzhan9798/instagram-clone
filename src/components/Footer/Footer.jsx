import { IconButton } from "@mui/material";
import React from "react";
import "./Footer.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <IconButton>
          <HomeIcon />
        </IconButton>
      </Link>
      <Link to="/explore">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Link>

      <Link>
        <IconButton>
          <VideocamIcon />
        </IconButton>
      </Link>

      <Link>
        <IconButton>
          <ChatBubbleOutlineOutlinedIcon />
        </IconButton>
      </Link>
      <Link to="user">
        <IconButton>
          <AccountCircleOutlinedIcon />
        </IconButton>
      </Link>
    </div>
  );
};
