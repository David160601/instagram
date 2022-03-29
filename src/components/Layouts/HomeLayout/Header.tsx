import * as React from "react";
import AppBar from "@mui/material/AppBar";

import { Avatar, Box, Container, Grid, Stack } from "@mui/material";

type Props = {};

const Header = (props: Props) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "1px 1px 1px rgba(0,0,0,0.2)",
        py: 2,
      }}
    >
      <Container disableGutters maxWidth="md">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item sx={{ cursor: "pointer" }}>
            <Box
              component="img"
              sx={{ mb: -1 }}
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            />
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Avatar
                sizes="small"
                sx={{ cursor: "pointer", width: 24, height: 24 }}
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
