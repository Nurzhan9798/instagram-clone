import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/Logo";

import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__actions">
        <IconButton onClick={() => alert("Ok")}>
          <AddBoxOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => alert("Ok")}>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};
