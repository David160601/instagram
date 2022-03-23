import { styled, Typography } from "@mui/material";
import Link from "next/link";
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
type Props = {
  title: string;
  label: string;
  href: string;
};
const OtherBox = ({
  title = "Title",
  href = "href",
  label = "label",
}: Props) => {
  return (
    <FormBox>
      <Typography variant="subtitle2" sx={{ textAlign: "center", mr: 0.5 }}>
        {title}
      </Typography>
      <Link href={href}>
        <Typography
          variant="subtitle2"
          sx={{ color: "primary.main", fontWeight: "bold", cursor: "pointer" }}
        >
          {label}
        </Typography>
      </Link>
    </FormBox>
  );
};
export default OtherBox;
