import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { BrowserRouter as Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar color="action">
        <IconButton
          size="large"
          edge="start"
          sx={{ color: "#ffa733" }}
          aria-label="logo"
        >
          <AccountBoxIcon />
        </IconButton>
        <Typography
          sx={{
            flexGrow: 1,
            color: "#ffa733",
            fontFamily: "Arial, sans-serif",
          }}
          variant="h6"
        >
          Contacts App
        </Typography>

        <Stack direction="row" spacing={1}>
          <Link to="/">
            {" "}
            <Button sx={{ color: "white" }}>Home</Button>
          </Link>
          <Link to="/Contacts">
            {" "}
            <Button sx={{ color: "white" }}>Contacts</Button>
          </Link>
          <Link to="/About">
            {" "}
            <Button sx={{ color: "white" }}>About</Button>
          </Link>
        </Stack>
        <hr />
      </Toolbar>
    </AppBar>
  );
}
