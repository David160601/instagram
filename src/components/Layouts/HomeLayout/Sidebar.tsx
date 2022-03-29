import { Box } from "@mui/material";
import React from "react";

function Sidebar() {
  return (
    <Box
      component="div"
      sx={{ background: "yellow", position: "sticky", top: "10vh", left: 0 }}
    >
      test
    </Box>
  );
}

export default Sidebar;
