import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  footer: {
    padding: theme.spacing(2, 0),
    marginTop: "auto",
    color: "white",
    backgroundColor: "black",
    alignItems: "center",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="h6" align="center" gutterBottom>
          Sample React App with Material UI and things
          <br />
          <Link
            color="inherit"
            href="https://github.com/wilmararturo/locutus-slack-app"
          >
            <GitHubIcon />
          </Link>{" "}
          <Copyright />
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
