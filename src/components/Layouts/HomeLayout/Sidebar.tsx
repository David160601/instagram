import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProfileList from "src/PageComponents/Home/ProfileList";

function Sidebar() {
  return (
    <Box component="div" sx={{ position: "sticky", top: "9vh", left: 0 }}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <ProfileList />
        </Grid>
        <Grid item>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="subtitle2">Suggestions For You</Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "primary.main", cursor: "pointer" }}
            >
              See All
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <ProfileList />
        </Grid>
        <Grid item>
          <ProfileList />
        </Grid>
        <Grid item>
          <ProfileList />
        </Grid>
        <Grid item>
          <ProfileList />
        </Grid>
        <Grid item>
          <ProfileList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Sidebar;
