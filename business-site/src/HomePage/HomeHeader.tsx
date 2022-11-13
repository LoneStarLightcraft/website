import React from "react";
import { Box, Typography } from "@mui/material";
import Banner from "../Images/Holitdine.png";

export const HomeHeader: React.FunctionComponent = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "850px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "27%",
            left: "2%",
          }}
        >
          <Typography
            sx={{
              textDecorationColor: "#2c3531",
              fontSize: "4rem",
              fontFamily: "Oswald, sans-serif",
              fontWeight: "bold",
              color: "#2c3531",
              textTransform: "uppercase",
            }}
          >
            {"Houston-Based"} <br /> {"LED"}
            <br />
            {"Creations"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          background: "white",
          opacity: 0.95,
          position: "fixed",
          top: 0,
          right: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            textTransform: "uppercase",
            fontSize: "1.7rem",
            fontFamily: "Oswald, sans-serif",
            fontWeight: "normal",
            color: "#2c3531",
            paddingY: "1rem",
            paddingX: "1rem",
          }}
        >
          Lone Star
          <br /> Lightcraft
        </Typography>
      </Box>
    </>
  );
};
