import { Box } from "@mui/material";
import React from "react";
import Home from "src/components/Layouts/Home";
import AppBox from "src/PageComponents/AppBox";
import LoginForm from "src/PageComponents/LoginForm";
import OtherBox from "src/PageComponents/OtherBox";
const index: React.FC = () => {
  return (
    <Home>
      <Box
        component="div"
        sx={{
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginForm />
        <OtherBox />
        <AppBox />
      </Box>
    </Home>
  );
};

export default index;
