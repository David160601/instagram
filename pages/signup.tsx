import { Box, styled } from "@mui/material";
import React from "react";
import Home from "src/components/Layouts/Home";
import AppBox from "src/PageComponents/AppBox";
import LoginForm from "src/PageComponents/LoginForm";
import OtherBox from "src/PageComponents/OtherBox";
import ImageBox from "src/PageComponents/ImageBox";
const Container = styled("div")(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("mobile")]: {
    justifyContent: "start",
    padding: theme.spacing(0, 6),
    background: "white",
  },
}));
const signup: React.FC = () => {
  return (
    <Home>
      <Container>
        <Box component="div" sx={{ display: "flex" }}>
          <ImageBox />
          <Box component="div" sx={{ mt: 2 }}>
            <LoginForm />
            <OtherBox title="Have an account ?" href="/" label="Login" />
            <AppBox />
          </Box>
        </Box>
      </Container>
    </Home>
  );
};

export default signup;
