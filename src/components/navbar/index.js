import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LoginButton from "../loginButton";

function Navbar({ user }) {
  return (
    <Grid
      px={4}
      container
      xs={12}
      height={70}
      alignItems="center"
      justifyContent="space-between"
      sx={{ background: "#DAFFFB" }}
    >
      <Box />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontWeight: "bold" }}>Welcome, </Typography>
        <Typography mr={3}>{user ? user?.nickname : "Guest"}</Typography>
        <LoginButton user={user} />
      </Box>
    </Grid>
  );
}

export default Navbar;
