import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer: React.FunctionComponent = () => {
  return (
    <Box sx={{ backgroundColor: "black", minHeight: "200px" }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: "1rem",
          fontFamily: "Oswald, sans-serif",
          fontWeight: "normal",
          color: "#ffffff",
          paddingTop: "4rem",
          paddingX: "1rem",
        }}
      >
        Copyright © 2022 Lone Star Lightcraft LLC.
        <br /> All rights reserved.
      </Typography>
    </Box>
  );
};
