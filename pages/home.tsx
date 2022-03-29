import { Box, Button } from "@mui/material";
import { logoutUser } from "@redux/slices/Auth/Auth";
import React from "react";
import { useDispatch } from "react-redux";
import HomeLayout from "src/components/Layouts/HomeLayout/Index";

import { useRouter } from "next/router";
type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <HomeLayout>
      <Box component="div" sx={{ height: "300vh" }}>
        <Box
          component="img"
          sx={{ width: "100%" }}
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/therock-244700385-287824776511811-9217011658444215511-n-1634123861.jpg?resize=980:*"
        ></Box>
        <Box
          component="img"
          sx={{ width: "100%" }}
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/therock-244700385-287824776511811-9217011658444215511-n-1634123861.jpg?resize=980:*"
        ></Box>
        <Button
          onClick={() => {
            dispatch(logoutUser());
            router.push("/");
          }}
        >
          Logout
        </Button>
      </Box>
    </HomeLayout>
  );
};

export default Home;
