import React, { useState } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

import JsonImage from "../../../assets/Json.png";
import AvatarImage from "../../../assets/Avatar.png";
import profileData from "../../../data/profile.json";
import "./Topbar.scss";

function Topbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const enablePopper = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(anchorEl ? false : true);
  };

  const renderUserProfileDetails = () => {
    return (
      <div className="user-details-container">
        {profileData.details.map((item) => {
          return (
            <div key={item.label} >
              <div className="info-container">
                <div className="info-label">{item.label}</div>
                <div className="info-value">{item.value}</div>
              </div>
              <div className="spacer" />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="topbar-container">
      <div className="title-container">
        <img src={JsonImage} className="logo-image-styles" />
        <div>JSON Based Rendering</div>
      </div>
      <div className="user-container" onClick={enablePopper}>
        <img src={AvatarImage} className="user-image-styles" />
        <div>Hariharan Kannan</div>
        <Popper open={open} anchorEl={anchorEl}>
          <Box sx={{ bgcolor: "background.paper" }}>
            {renderUserProfileDetails()}
          </Box>
        </Popper>
      </div>
    </div>
  );
}

export default Topbar;
