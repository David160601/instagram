import { Box, Grid } from "@mui/material";
import React from "react";
import Home from "src/components/Layouts/Home";
import AppBox from "src/PageComponents/AppBox";
import LoginForm from "src/PageComponents/LoginForm";
import OtherBox from "src/PageComponents/OtherBox";
import ImageBox from "src/PageComponents/ImageBox";
const index: React.FC = () => {
  return (
    <Home>
      <Box
        component="div"
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="div" sx={{ display: "flex" }}>
          <ImageBox />
          <Box component="div" sx={{ mt: 2 }}>
            <LoginForm />
            <OtherBox />
            <AppBox />
          </Box>
        </Box>
      </Box>
    </Home>
  );
};

export default index;
