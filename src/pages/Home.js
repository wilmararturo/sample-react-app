import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import Header from "../components/Header";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    display: "flex",
    minHeight: "100vh",
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

function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Container maxWidth="sm">
        <hr />
        <Typography variant="body1">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mattis tempus. Sed sit amet lacus a mi eleifend faucibus id ac nisi. Curabitur convallis nulla ut mi dapibus, vel hendrerit velit tristique. Mauris efficitur nulla vel ligula pharetra pretium. Sed dignissim iaculis mi, id scelerisque augue dapibus ac. Sed et tortor et orci consectetur pretium. Quisque pharetra pretium risus pellentesque ultricies. Morbi venenatis blandit augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent egestas ante libero, eget tempus lacus maximus ultrices. Fusce mollis id dui pretium venenatis. In hac habitasse platea dictumst. Vivamus aliquet urna et congue finibus. Duis vel tristique tellus. ."
          }
        </Typography>
        <hr />
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
