import React from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
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

  return (
    <AppBar position="static" className={classes.appBarColor}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Sample React App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
