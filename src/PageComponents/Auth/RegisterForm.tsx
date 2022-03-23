import { Box, Button, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TextFieldstyled from "@components/TextFieldStyled";
import * as Yup from "yup";
import { useFormik, Field, FormikProvider } from "formik";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerUser } from "@redux/slices/Auth/Auth";
import { LoadingButton } from "@mui/lab";
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
  const dispatch = useDispatch();
  const router = useRouter();
  const registerSchema = Yup.object().shape({
    email_or_phone: Yup.string().required("Required"),
    fullname: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email_or_phone: "",
      password: "",
      confirm_password: "",
      gender: 1,
    },
    validationSchema: registerSchema,
    onSubmit: async (values: LoginInterface) => {
      const res: any = await dispatch(registerUser(values));
      if (res.status === 201) {
        router.push("/home");
      }
    },
  });
  const { handleSubmit, isSubmitting, errors, values } = formik;

  return (
    <FormikProvider value={formik}>
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
        <Field
          name="email_or_phone"
          id="email_or_phone"
          label="Phone number, username, or email"
          variant="filled"
          fullWidth
          size="small"
          sx={{ mb: 0.8 }}
          as={TextFieldstyled}
        />
        <Field
          name="fullname"
          id="fullname"
          label="Full Name"
          variant="filled"
          fullWidth
          size="small"
          sx={{ mb: 0.8 }}
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
          sx={{ mb: 0.8 }}
          as={TextFieldstyled}
        />
        <Field
          name="confirm_password"
          id="confirm_password"
          label="Confirm Password"
          type="password"
          variant="filled"
          fullWidth
          size="small"
          sx={{ mb: 0.8 }}
          as={TextFieldstyled}
        />
        <LoadingButton
          disabled={
            errors.password ||
            errors.email_or_phone ||
            errors.fullname ||
            errors.confirm_password
              ? true
              : false
          }
          onClick={() => {
            handleSubmit();
          }}
          loading={isSubmitting}
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
        </LoadingButton>
        <Typography
          variant="subtitle2"
          sx={{ textAlign: "center", color: "greyLetter", mt: 1.5, mb: 2 }}
        >
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
          .
        </Typography>
      </FormBox>
    </FormikProvider>
  );
};
export default RegisterForm;
