import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box component="div" sx={{ height: "10vh" }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Meta
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          About
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Blog
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Jobs
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Help
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Api
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Privacy
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Terms
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Top Accounts
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Hastags
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Locations
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          Instagram Lite
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          my: 2,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          English
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mr: 2, color: "greyLetter", fontWeight: "100" }}
        >
          © 2022 Instagram from Meta
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
