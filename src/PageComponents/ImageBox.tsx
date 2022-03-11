import { Box } from "@mui/material";
import React from "react";

type Props = {};

const ImageBox = (props: Props) => {
  return (
    <Box component="div" sx={{ position: "relative" }}>
      <Box
        component="img"
        src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
      ></Box>
      <Box
        component="img"
        src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
        sx={{ position: "absolute", left: 153, top: 28 }}
      ></Box>
    </Box>
  );
};

export default ImageBox;
