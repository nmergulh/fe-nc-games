import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Avatar,
  Box,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { UserContext } from "../../contexts/userContext";
import { Logout } from "@mui/icons-material";

const NavBar = () => {
  const { username, setUsername, currentUser, loggedIn } =
    useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return loggedIn ? (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/reviews">
          <h4>NC House of Games 🎲</h4>
        </Link>
      </div>
      <div className="navbar-center">
        <Tooltip title="Categories">
          <Link to="/categories" className="categories-link">
            <CategoryIcon className="categories-icon" />
            <span className="categories-word">Categories</span>
          </Link>
        </Tooltip>
        <Box
          mr={1}
          className="box"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip
            title="Account settings"
            className="Account-settings-tooltip"
          >
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, mr: 1 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              className="icon-button"
            >
              <Avatar
                src={currentUser.avatar_url}
                sx={{ width: 32, height: 32, mr: 1 }}
              />
              <span>{currentUser.name}</span>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Link to={`/dashboard/${username}`}>
              <Avatar /> Profile
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Link to="/">Logout</Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  ) : (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/reviews">
          <h4>NC House of Games 🎲</h4>
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/" className="users-link">
          <AccountCircleIcon className="person-icon" />
          <span className="user-word">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
