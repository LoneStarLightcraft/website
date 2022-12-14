import { Container } from "@mui/material";
import React from "react";
import { Footer, Founders, HomeGallery, HomeHeader } from ".";

export const Home: React.FunctionComponent = () => {
  return (
    <Container maxWidth={false} sx={{ flexDirection: "column" }}>
      <HomeHeader />
      <HomeGallery />
      <Founders />
      <Footer />
    </Container>
  );
};
