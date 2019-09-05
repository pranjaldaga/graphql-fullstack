import fetch from "isomorphic-unfetch";
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";

import NextLink from "next/link";

const Index = ({ users }) => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Cosign
      </Typography>
      <NextLink href="/login">
        <MuiLink style={{ cursor: "pointer" }} color="secondary">
          Login
        </MuiLink>
      </NextLink>{" "}
      or{" "}
      <NextLink href="/signup">
        <MuiLink style={{ cursor: "pointer" }} color="secondary">
          Sign up
        </MuiLink>
      </NextLink>
    </Box>
    <Box></Box>
  </Container>
);

export default Index;
