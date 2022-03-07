import { Box } from "@mui/material";
import React from "react";
import Home from "src/components/Layouts/Home";
import LoginForm from "src/PageComponents/LoginForm";
const index: React.FC = () => {
  return (
    <Home>
      <Box
        component="div"
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginForm />
      </Box>
    </Home>
  );
};

export default index;
