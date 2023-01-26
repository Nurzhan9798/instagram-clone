import { Button, colors, IconButton, Modal } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

export const Post = ({
  username,
  postId,
  avatarUrl,
  postHeaderDescription,
  imgUrl,
  likeNumber,
  postDescription,
}) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header__info">
          <img src={avatarUrl} alt="" className="post-header__avatar-url" />
          <div className="post-header__main">
            <div className="post-header__username">
              <Link
                style={{ textDecoration: "none", color: "#262626" }}
                to={username}
              >
                <strong>{username}</strong>
              </Link>
              <strong> • </strong>
              <Button variant="text" size="small" sx={{ padding: 0 }}>
                Подписаться
              </Button>
            </div>
            <div className="post-header__description">
              {postHeaderDescription}
            </div>
          </div>
        </div>
        <div className="post-header__actions">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="post__image">
        <img src={imgUrl} alt="" className="" />
      </div>

      <div className="post__body">
        <div className="post-actions">
          <div className="post-actions__left">
            <IconButton style={{ marginLeft: -8 }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton>
              <TelegramIcon />
            </IconButton>
          </div>
          <div className="post-actions__right">
            <IconButton>
              <TurnedInNotIcon />
            </IconButton>
          </div>
        </div>
        <p className="post__statistics">
          <strong>{likeNumber} отметок "Нравится"</strong>
        </p>
        <div className="post__description">
          <strong>{username}</strong> {postDescription}
        </div>
        <Link
          style={{ textDecoration: "none" }}
          to={`/post/${postId}/comments`}
        >
          <p className="post__comments">Посмотреть все коментарии</p>
        </Link>
        <p className="post__date"></p>
      </div>
    </div>
  );
};
