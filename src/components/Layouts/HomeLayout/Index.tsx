import { Box } from "@mui/material";
import Head from "next/head";

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
      {children}
    </Box>
  );
};

export default index;
