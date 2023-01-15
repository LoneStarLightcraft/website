import React from "react";
import { Box, Typography } from "@mui/material";
import Rocket from "../Images/WeHaveAProblem.png";
import Rabbit from "../Images/Wabbits.png";
import Cowork from "../Images/Coworking.png";

export const HomeGallery: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        backgroundSize: "cover",
        width: "100%",
        minHeight: "600px",
        marginTop: 1,
        paddingBottom: 8,
      }}
    >
      <Typography
        variant="h2"
        component="div"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "Oswald, sans-serif",
          color: "#2c3531",
          paddingY: "3rem",
          paddingX: "1rem",
        }}
      >
        Houston's #1 Source for
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            marginY: 0,
            paddingX: 2,
            flexDirection: "collumn",
            width: {
              sm: 400, // 600
              lg: 450, // 1200
            },
            maxWidth: "450px",
          }}
        >
          <img
            style={{ height: "auto", minHeight: 350, objectFit: "cover" }}
            width="100%"
            src={Rocket}
            alt="Paella dish"
          />

          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                sm: "2.5vw", // 600
                lg: "2vw", // 1200
                xl: "1.75vw", // 1536
              },
              fontFamily: "Oswald, sans-serif",
              fontWeight: "bold",
              color: "#2c3531",
              paddingY: "2rem",
              paddingX: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            LED Signs & Logos
          </Typography>
        </Box>

        <Box
          sx={{
            marginY: 0,
            paddingX: 2,
            flexDirection: "collumn",
            width: {
              sm: 400, // 600
              lg: 450, // 1200
            },
            maxWidth: "450px",
          }}
        >
          <img
            style={{
              height: "auto",
              minHeight: 350,
              objectFit: "cover",
              minWidth: "50%",
            }}
            width="100%"
            src={Cowork}
            alt="Paella dish"
          />

          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                sm: "2.5vw", // 600
                lg: "2vw", // 1200
                xl: "1.78vw", // 1536
              },
              fontFamily: "Oswald, sans-serif",
              fontWeight: "bold",
              color: "#2c3531",
              paddingY: "2rem",
              paddingX: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            LED Art & Furniture
          </Typography>
        </Box>
        <Box
          sx={{
            marginY: 0,
            paddingX: 2,
            flexDirection: "collumn",
            width: {
              sm: 400, // 600
              lg: 450, // 1200
            },
            maxWidth: "450px",
          }}
        >
          <img
            style={{ height: "auto", minHeight: 350 }}
            width="100%"
            src={Rabbit}
            alt="Paella dish"
          />

          <Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  sm: "2.5vw", // 600
                  lg: "2vw", // 1200
                  xl: "1.8vw", // 1536
                },
                fontFamily: "Oswald, sans-serif",
                fontWeight: "bold",
                color: "#2c3531",
                paddingY: "2rem",
                paddingX: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              Custom LEDs
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        variant="h2"
        component="div"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "Oswald, sans-serif",
          color: "#2c3531",
          paddingY: "3rem",
          paddingX: "1rem",
        }}
      >
        Satisfying your LED needs
      </Typography>
    </Box>
  );
};
