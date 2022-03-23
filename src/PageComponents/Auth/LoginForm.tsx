import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TextFieldstyled from "@components/TextFieldStyled";
import { useFormik, Field, FormikProvider } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "@redux/slices/Auth/Auth";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";
import { FormHelperText } from "@mui/material";
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
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const signInSchema = Yup.object().shape({
    email_or_phone: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email_or_phone: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values: LoginInterface) => {
      const res: any = await dispatch(loginUser(values));
      if (res?.status === 201) {
        router.push("/home");
      } else {
        setError(res.response.data.message);
      }
    },
  });
  const { handleSubmit, errors, isSubmitting } = formik;

  return (
    <FormikProvider value={formik}>
      <FormBox>
        {/* LOGO */}
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
        >
          <Image src="/img/logo.png" alt="nextjs" width="160" height="85" />
        </Box>
        {/* FORM */}
        <Field
          name="email_or_phone"
          id="email_or_phone"
          label="Phone number, username, or email"
          variant="filled"
          fullWidth
          size="small"
          sx={{ mb: 1 }}
          as={TextFieldstyled}
        />
        <Field
          name="password"
          id="password"
          variant="filled"
          label="Password"
          type="password"
          fullWidth
          size="small"
          sx={{ mb: 1 }}
          as={TextFieldstyled}
        />
        <LoadingButton
          loading={isSubmitting}
          disabled={errors.password || errors.email_or_phone ? true : false}
          onClick={() => {
            handleSubmit();
          }}
          type="submit"
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
        </LoadingButton>

        {/* OR */}
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
        {/* LOGIN IN WITH FACEBOOK FORGOT PASSWORD PART*/}
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
        {error !== "" && (
          <FormHelperText sx={{ textAlign: "center" }} error>
            {error}
          </FormHelperText>
        )}
        <Link href="/">
          <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", cursor: "pointer", mt: 1 }}
          >
            Forgot Password?
          </Typography>
        </Link>
      </FormBox>
    </FormikProvider>
  );
};
export default LoginForm;
