import { styled, Typography } from "@mui/material";
import React from "react";
const FormBox = styled("div")(({ theme }) => ({
  width: 270,
  padding: theme.spacing(2.5, 5),
  border: `solid 1px ${theme.palette.borderColor}`,
  background: "white",
  marginBottom: theme.spacing(2.5),
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("mobile")]: {
    width: "100%",
    padding: 0,
    background: "none",
    border: "none",
  },
}));
type Props = {};
const OtherBox = (props: Props) => {
  return (
    <FormBox>
      <Typography variant="subtitle2" sx={{ textAlign: "center", mr: 0.5 }}>
        Don't have an account?{"  "}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: "primary.main", fontWeight: "bold", cursor: "pointer" }}
      >
        Sign Up
      </Typography>
    </FormBox>
  );
};
export default OtherBox;
