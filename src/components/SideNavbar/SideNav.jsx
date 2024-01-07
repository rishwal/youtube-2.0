import { Stack } from "@mui/material";
import React from "react";
import "./SideNav.css";
import { categories } from "./utils/utilities";
import { HiChevronRight } from "react-icons/hi2";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";

const SideNav = () => {
  return (
    <Stack id="side-nav">
      {categories.slice(0, 3).map((item) => (
        <button className="nav-buttons" key={item.name}>
          <item.icon className="nav-icons" />
          <span className="icon-name">{item.name}</span>
        </button>
      ))}
      <button className="nav-buttons Library">
        {" "}
        <VideoLibraryRoundedIcon className="nav-icons" />{" "}
        <span className="icon-name">Library</span>
      </button>
      <hr className="horizontal-rule" />
      <button className="nav-buttons you">
        You <HiChevronRight className="right-caret" />
      </button>
      {categories.slice(3).map((item) => (
        <button className="nav-buttons you-icons" key={item.name}>
          <item.icon className="nav-icons" />
          {item.name}
        </button>
      ))}
    </Stack>
  );
};

export default SideNav;
