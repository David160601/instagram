import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Meta
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          About
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Blog
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Jobs
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Help
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Api
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Privacy
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Terms
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Top Accounts
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Hastags
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          Locations
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
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
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          English
        </Typography>
        <Typography variant="subtitle2" sx={{ mr: 2, color: "grey" }}>
          © 2022 Instagram from Meta
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
