import { IconButton } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const Story = ({ isMine, isNew, avatarUrl, username }) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="story">
      <div className={"story__avatar " + (isNew ? "story__avatar_new" : "")}>
        <img src={avatarUrl} alt="" className="avatar" />
      </div>

      {isMine && (
        <div className="story__image-upload">
          <IconButton
            onClick={handleClick}
            color="primary"
            sx={{
              position: "absolute",
              padding: 0,
              zIndex: 1,
              bottom: 15,
              right: 10,
            }}
          >
            <AddCircleIcon />
          </IconButton>
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
      )}

      <p className="story__username">{username}</p>
    </div>
  );
};
