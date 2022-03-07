import { Box, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {};

const AppBox = (props: Props) => {
  return (
    <Box component="div">
      <Typography variant="subtitle2" sx={{ textAlign: "center",mb:2.5}}>
        Get the app.
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <Box
            sx={{ width: "130px" }}
            component="img"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
          ></Box>
        </Grid>
        <Grid item>
          <Box
            sx={{ width: "130px" }}
            component="img"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppBox;
