import { Box, Container, Grid } from "@mui/material";
import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: JSX.Element;
};

const index = ({ children }: Props) => {
  return (
    <Box
      component="div"
      sx={{ minHeight: "100vh", backgroundColor: "backgroundColor" }}
    >
      <Head>
        <title>Instagram</title>
      </Head>
      <Header />
      <Container disableGutters maxWidth="md">
        <Grid container>
          <Grid item xs={7}>
            {children}
          </Grid>
          <Grid item xs={5}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default index;
