import { Box, styled, Typography } from "@mui/material";
import React from "react";
const FormBox = styled("div")(({ theme }) => ({
  width: 270,
  padding: theme.spacing(2.5, 5),
  border: `solid 1px ${theme.palette.borderColor}`,
  background: "white",
  marginBottom: theme.spacing(2),
}));
type Props = {};
const OtherBox = (props: Props) => {
  return (
    <FormBox>
      <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <Box
          component="span"
          sx={{ color: "primary.main", fontWeight: "bold", cursor: "pointer" }}
        >
          Sign Up
        </Box>
      </Typography>
    </FormBox>
  );
};
export default OtherBox;
