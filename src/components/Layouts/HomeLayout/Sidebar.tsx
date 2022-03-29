import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileList from "src/PageComponents/Home/ProfileList";

function Sidebar() {
  return (
    <Box component="div" sx={{ position: "sticky", top: "8vh", left: 0 }}>
      <ProfileList />
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="subtitle2">Suggestions For You</Typography>
        <Typography variant="subtitle2">See All</Typography>
      </Box>
      <ProfileList />
      <ProfileList />
      <ProfileList />
      <ProfileList />
      <ProfileList />
    </Box>
  );
}

export default Sidebar;
