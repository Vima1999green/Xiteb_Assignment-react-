import React, { useState } from "react";
import cargologo from "../assests/cargologo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Tab, Typography, Tabs, Button, Menu, MenuItem } from "@mui/material";

function Navbar() {
  const [value, setValue] = useState(0); // State for tab value
  const [anchorEl, setAnchorEl] = useState(null);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ backgroundColor: "white" }}>
        <Typography>
          <img
            src={cargologo}
            alt="Logo of the Company"
            sx={{ maxHeight: 50, marginRight: 15 }}
          />
        </Typography>
        <Tabs
          value={value}
          TabIndicatorProps={{
            style: { backgroundColor: "#cc8e2b" },
          }}
          onChange={handleTabChange}
        >
          <Tab
            label="HOME"
            onClick={handleDropdownClick}
            style={{ marginLeft: "160px", fontSize: "13px" }}
          />
          <Tab label="PAGES" />
          <Tab label="TRACKING" />
          <Tab label="SERVICES" />
          <Tab label="BLOG" />
        </Tabs>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleDropdownClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleDropdownClose}></MenuItem>
          <MenuItem onClick={handleDropdownClose}>Our Services</MenuItem>
          <MenuItem onClick={handleDropdownClose}>Stats</MenuItem>
          <MenuItem onClick={handleDropdownClose}>
            Testimonials & why Choose Us
          </MenuItem>
          <MenuItem onClick={handleDropdownClose}>Clients</MenuItem>
          <MenuItem onClick={handleDropdownClose}>News</MenuItem>
          <MenuItem onClick={handleDropdownClose}>Footer</MenuItem>
        </Menu>
        <Button
          variant="contained"
          sx={{
            marginLeft: "auto",
            backgroundColor: "#f09530",
            fontSize: "12px",
          }}
        >
          GET A QUOTE
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: "10px",
            backgroundColor: "black",
            fontSize: "12px",
          }}
        >
          SIGN IN
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
