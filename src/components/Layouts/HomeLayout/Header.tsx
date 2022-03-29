import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Avatar,
  Badge,
  Container,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "backgroundColor",
        boxShadow: "1px 1px 1px rgba(0,0,0,0.2)",
      }}
    >
      <Container disableGutters maxWidth="md">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item sx={{ cursor: "pointer" }}>
            <Image src="/img/logo.png" alt="logo" width="120" height="60" />
          </Grid>
          <Grid item>
            <TextField placeholder="Search" size="small" />
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{ cursor: "pointer" }}
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
