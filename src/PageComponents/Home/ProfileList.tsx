import React from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
type Props = {};

const ProfileList = (props: Props) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sizes="small"
          sx={{ width: 50, height: 50, mr: 2, cursor: "pointer" }}
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
        />
        <Box component="div">
          <Typography variant="subtitle1">pheng_david</Typography>
          <Typography variant="subtitle2">pheng david</Typography>
        </Box>
      </Box>
      <Typography
        variant="subtitle2"
        sx={{ color: "primary.main", cursor: "pointer" }}
      >
        See All
      </Typography>
    </Box>
  );
};

export default ProfileList;
