import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";

type Props = {
  children: JSX.Element;
};

const index = ({ children }: Props) => {
  return (
    <Box
      component="div"
      sx={{ minHeight: "100vh", backgroundColor: "backgroundColor" }}
    >
      <Head>
        <title>Instagram</title>
      </Head>
      {children}
      <Footer />
    </Box>
  );
};

export default index;
