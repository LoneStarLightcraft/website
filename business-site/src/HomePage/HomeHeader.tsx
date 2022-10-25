import React from "react";
import { Box, Container } from "@mui/material";
import ShopImage from "../Images/ShopImage.jpg";

export const HomeHeader: React.FunctionComponent = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{ background: { ShopImage }, width: "100%", height: "500px" }}
      ></Box>
      <Box sx={{ background: "green", width: "100%", height: "500px" }}></Box>
    </Container>
  );
};
