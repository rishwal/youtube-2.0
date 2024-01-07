import React, { useState } from "react";
import SwitchTheme from "./SwitchThemeButton";
import { Stack } from "@mui/material";
import "./Navbar.css";
import logo from "./utils/yt_logo_rgb_light.png";
import MenuIcon from "@mui/icons-material/Menu";
import darkLogo from "./utils/yt_logo_rgb_dark.png";
import { GoSearch } from "react-icons/go";
import user from "./utils/user.jpeg";
import { IoIosMoon } from "react-icons/io";

const Navbar = () => {
  const [logoSwap, setlogoSwap] = useState(false);
  console.log(logoSwap);

  return (
    <Stack direction={"row"} className="Navbar" sx={{ minHeight: "50px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <MenuIcon className="nav-menu-icon" />
        <img
          src={logoSwap ? darkLogo : logo}
          justif
          alt="YouTube"
          className="yt-logo"
        />
      </div>
    
      <SwitchTheme setlogoSwap={setlogoSwap} />
      <div className="nav-section-right">
        <GoSearch className="search-icon" />
        <span className="user-icon">
          <img src={user} alt="rishwal" />
        </span>
      </div>
    </Stack>
  );
};

export default Navbar;
