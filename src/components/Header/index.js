import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    flexGrow: 1,
    display: "flex",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  appBarColor: {
    backgroundColor: "black",
  },
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBarColor}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="simplrt-menu"
          aria-haspopup="true"
          onclick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}> Dogs! </MenuItem>
          <MenuItem onClick={handleClose}> Cats! </MenuItem>
          <MenuItem onClick={handleClose}> Random! </MenuItem>
        </Menu>
        <div className={classes.title}>
          <Typography variant="h3">Sample React App</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
