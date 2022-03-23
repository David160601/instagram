import { Box } from "@mui/material";
import React from "react";
import HomeLayout from "src/components/Layouts/HomeLayout/Index";
type Props = {};

const Home = (props: Props) => {
  return (
    <HomeLayout>
      <Box component="div">test</Box>
    </HomeLayout>
  );
};

export default Home;
