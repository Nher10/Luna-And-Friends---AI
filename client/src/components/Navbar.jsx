import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  const navigate = useNavigate();

  //logout
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://lunaandfriends.onrender.com/api/v1/auth/logout"
      );
      localStorage.removeItem("authToken");
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color={"primary"} fontWeight="bold">
        Luna And Friends
      </Typography>
      {loggedIn ? (
        <>
          <Link href="/" p={1}>
            Home
          </Link>
          <Link href="/login" onClick={handleLogout} p={1}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link href="/register" p={1}>
            Sign up
          </Link>
          <Link href="/login" p={1}>
            Sign in
          </Link>
        </>
      )}
    </Box>
  );
};

export default Navbar;
