import { styled, TextField, TextFieldProps } from "@mui/material";
import React from "react";
const CustomTextField = styled(TextField)(({ theme }) => ({
  border: `solid 1px ${theme.palette.borderColor}`,
  borderRadius: theme.spacing(0.4),
  backgroundColor: "white !important",
  "& .MuiFilledInput-input": {
    backgroundColor: theme.palette.backgroundColor,
    fontSize: 11,
  },
}));
const TextFieldstyled = (props: TextFieldProps) => {
  return (
    <CustomTextField
      InputProps={{
        disableUnderline: true,
      }}
      InputLabelProps={{
        style: {
          fontSize: 11.5,
        },
      }}
      size="small"
      {...props}
    />
  );
};

export default TextFieldstyled;
