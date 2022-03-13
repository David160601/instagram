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
const RegisterForm = (props: Props) => {
  return (
    <FormBox>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", mb: -1 }}
      >
        <Image src="/img/logo.png" alt="nextjs" width="160" height="85" />
      </Box>
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "greyLetter",
        }}
      >
        Sign up to see photos and videos from your friends.
      </Typography>
      <Button
        color="primary"
        disableElevation
        variant="contained"
        size="small"
        fullWidth
        sx={{
          mt: 1,
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Log in with Facebook
      </Button>
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", my: 3 }}
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
      <TextFieldstyled
        label="Phone number, username, or email"
        variant="filled"
        fullWidth
        size="small"
        sx={{ mb: 0.8 }}
      />
      <TextFieldstyled
        label="Full name"
        variant="filled"
        fullWidth
        size="small"
        sx={{ mb: 0.8 }}
      />
      <TextFieldstyled
        label="Username"
        variant="filled"
        fullWidth
        size="small"
        sx={{ mb: 0.8 }}
      />
      <TextFieldstyled
        variant="filled"
        label="Password"
        type="password"
        fullWidth
        size="small"
        sx={{ mb: 0.8 }}
      />
      <Button
        color="primary"
        disableElevation
        variant="contained"
        size="small"
        fullWidth
        sx={{
          my: 0.5,
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Sign up
      </Button>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: "center", color: "greyLetter", mt: 1.5, mb: 2 }}
      >
        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
      </Typography>
    </FormBox>
  );
};
export default RegisterForm;
