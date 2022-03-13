import { Box, styled } from "@mui/material";
import React from "react";
import Home from "src/components/Layouts/Home";
import AppBox from "src/PageComponents/AppBox";
import OtherBox from "src/PageComponents/OtherBox";
import ImageBox from "src/PageComponents/ImageBox";
import RegisterForm from "src/PageComponents/RegisterForm";
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
const Formbox = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    marginTop: 0,
  },
}));
const signup: React.FC = () => {
  return (
    <Home>
      <Container>
        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
          <ImageBox />
          <Formbox sx={{ mt: -5 }}>
            <RegisterForm />
            <OtherBox title="Have an account ?" href="/" label="Login" />
            <AppBox />
          </Formbox>
        </Box>
      </Container>
    </Home>
  );
};

export default signup;
