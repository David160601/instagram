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
      sx={{ backgroundColor: "backgroundColor", boxShadow: "1px 2px 2px rgba(0,0,0,0.1)" }}
    >
      <Container maxWidth="md">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Image src="/img/logo.png" alt="nextjs" width="120" height="60" />
          </Grid>
          <Grid item>
            <TextField placeholder="Search" size="small" />
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Badge badgeContent={4} color="primary">
                {/* <HomeIcon color="action" /> */}
              </Badge>
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
