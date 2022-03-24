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
      <Box component="div">
        <Button
          onClick={() => {
            dispatch(logoutUser());
            router.push("/");
          }}
        >
          logout
        </Button>
        test
      </Box>
    </HomeLayout>
  );
};

export default Home;
