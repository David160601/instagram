import { Box } from "@mui/material";
import Head from "next/head";
import Header from "./Header";

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
      {children}
    </Box>
  );
};

export default index;
