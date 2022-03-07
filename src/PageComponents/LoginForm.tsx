import { Box, Button, styled, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { theme } from "src/Theme";

const FormBox = styled("div")(({ theme }) => ({
  width: 270,
  padding: theme.spacing(2, 5),
  border: "solid 1px #dbdbdb",
  background: "white",
  marginBottom: theme.spacing(1),
}));
const TextFieldstyled = styled(TextField)(({ theme }) => ({
  border: "solid 1px #dbdbdb",
  borderRadius: theme.spacing(0.4),
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
        autoComplete="false"
        label="Phone number, username, or email"
        variant="filled"
        fullWidth
        InputProps={{
          disableUnderline: true,
          style: { paddingTop: 0 },
        }}
        InputLabelProps={{
          style: {
            fontSize: "12px",
          },
        }}
        size="small"
        sx={{ mb: 1, backgroundColor: "backgroundColor" }}
      />
      <TextFieldstyled
        autoComplete="false"
        variant="filled"
        label="Password"
        type="password"
        InputLabelProps={{
          style: {
            fontSize: "12px",
          },
        }}
        InputProps={{ disableUnderline: true }}
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
        sx={{ display: "flex", alignItems: "center", my: 0.8 }}
      >
        <Box sx={{ height: "1px", background: "#dbdbdb", width: "100%" }} />
        <Typography
          sx={{ px: 3, mb: -1, fontWeight: "bold", color: "grey" }}
          variant="subtitle2"
        >
          OR
        </Typography>
        <Box sx={{ height: "1px", background: "#dbdbdb", width: "100%" }} />
        <Box />
      </Box>

      <Link href="/">
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "center",
            color: "primary.dark",
            cursor: "pointer",
            mt: 3,
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Log in with Facebook
        </Typography>
      </Link>
      <Link href="/">
        <Typography
          variant="subtitle2"
          sx={{ textAlign: "center", cursor: "pointer" }}
        >
          Forgot Password?
        </Typography>
      </Link>
    </FormBox>
  );
};
export default LoginForm;
