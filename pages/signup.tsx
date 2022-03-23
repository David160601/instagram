import { Box, styled } from "@mui/material";
import React from "react";
import Home from "@components/Layouts/Auth";
import AppBox from "src/PageComponents/Auth/AppBox";
import ImageBox from "src/PageComponents/Auth/ImageBox";

import OtherBox from "src/PageComponents/Auth/OtherBox";
import RegisterForm from "src/PageComponents/Auth/RegisterForm";

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
