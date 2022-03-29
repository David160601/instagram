import React from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
type Props = {};

const ProfileList = (props: Props) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <Grid item xs={2}>
        <Avatar
          sizes="small"
          sx={{ width: 50, height: 50 }}
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
        />
      </Grid>
      <Grid item xs={7}>
        <Typography variant="subtitle1">pheng_david</Typography>
        <Typography variant="subtitle2">pheng david</Typography>
      </Grid>
      <Grid item xs={3}>
        <Button size="small">Switch</Button>
      </Grid>
    </Grid>
  );
};

export default ProfileList;
