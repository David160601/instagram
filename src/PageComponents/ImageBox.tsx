import { Box, styled } from "@mui/material";
import React from "react";
import Slider from "react-slick";
const ImgBoxStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
type Props = {};
const ImageBox = (props: Props) => {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
  };
  return (
    <ImgBoxStyled component="div" sx={{ mr: 3 }}>
      <Box component="img" src="/img/phone.png"></Box>
      <Box
        component="div"
        sx={{ position: "absolute", left: 125, top: 26, width: "100%" }}
      >
        <Slider {...settings} arrows={false}>
          <Box component="div">
            <Box
              component="img"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
            ></Box>
          </Box>
          <Box component="div">
            <Box
              component="img"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
            ></Box>
          </Box>
          <Box component="div">
            <Box
              component="img"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
            ></Box>
          </Box>
          <Box component="div">
            <Box
              component="img"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
            ></Box>
          </Box>
        </Slider>
      </Box>
    </ImgBoxStyled>
  );
};

export default ImageBox;
