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
            left: "3.5%",
          }}
        >
          <Typography
            sx={{
              textDecorationColor: "#2c3531",
              textShadow: "3px 3px 3px #2c3531",
              fontSize: "4rem",
              fontFamily: "Oswald, sans-serif",
              fontWeight: "bold",
              color: "#d9b08c",
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
          background: "white",
          position: "fixed",
          top: 0,
          left: 0,
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
            paddingX: "0.5rem",
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
        >
          Lone Star
          <br /> Lightcraft
        </Typography>
      </Box>
    </>
  );
};
