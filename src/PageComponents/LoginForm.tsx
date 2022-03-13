import { Box, Button, styled, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextFieldstyled from "@components/TextFieldStyled";
const FormBox = styled("div")(({ theme }) => ({
  width: 270,
  padding: theme.spacing(2, 5),
  border: `solid 1px ${theme.palette.borderColor}`,
  background: "#FFFFFF",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("mobile")]: {
    width: "100%",

    padding: 0,
    background: "none",
    border: "none",
  },
}));
type Props = {};
const LoginForm = (props: Props) => {
  return (
    <FormBox>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", mb: 2 }}
      >
        <Image src="/img/logo.png" alt="nextjs" width="160" height="85" />
      </Box>
      <TextFieldstyled
        label="Phone number, username, or email"
        variant="filled"
        fullWidth
        size="small"
        sx={{ mb: 1 }}
      />
      <TextFieldstyled
        variant="filled"
        label="Password"
        type="password"
        fullWidth
        size="small"
        sx={{ mb: 1 }}
      />
      <Button
        color="primary"
        disableElevation
        variant="contained"
        size="small"
        fullWidth
        sx={{
          my: 1,
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Log in
      </Button>

      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", my: 1 }}
      >
        <Box sx={{ height: "1px", background: "#dbdbdb", width: "100%" }} />
        <Typography
          sx={{ px: 2.5, mb: -1, fontWeight: "bold", color: "greyLetter" }}
          variant="subtitle2"
        >
          OR
        </Typography>
        <Box sx={{ height: "1px", background: "#dbdbdb", width: "100%" }} />
        <Box />
      </Box>
      <Link href="/">
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
            mb: 2,
          }}
        >
          <Box
            component="img"
            sx={{ width: 18, mr: 1 }}
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          />
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: "center",
              color: "#3A559F",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Log in with Facebook
          </Typography>
        </Box>
      </Link>
      <Link href="/">
        <Typography
          variant="subtitle2"
          sx={{ textAlign: "center", cursor: "pointer", mt: 1 }}
        >
          Forgot Password?
        </Typography>
      </Link>
    </FormBox>
  );
};
export default LoginForm;
