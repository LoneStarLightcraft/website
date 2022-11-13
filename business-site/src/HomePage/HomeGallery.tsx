import React from "react";
import { Box, Typography } from "@mui/material";
import Shop from "../Images/ShopImage.png";

export const HomeGallery: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        backgroundSize: "cover",
        width: "100%",
        minHeight: "600px",
        marginTop: 2,
      }}
    >
      <Typography
        variant="h2"
        component="div"
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          fontFamily: "Oswald, sans-serif",
          color: "#116466",
          paddingY: "8rem",
          paddingX: "1rem",
        }}
      >
        What we do
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            marginY: 0,
            minWidth: "95%",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <img height="400" width="50%" src={Shop} alt="Paella dish" />
          <Box
            sx={{
              flexGrow: 2,
              display: "flex",
              borderLeft: "solid 0.1px #116466",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 0,
              paddingTop: 0,
              transition: "background 250ms ease",
              "&:last-child": { padding: 0 },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "3rem",
                fontFamily: "Oswald, sans-serif",
                fontWeight: "bold",
                color: "#116466",
                paddingY: "2rem",
                paddingX: "1rem",
              }}
            >
              LED Signs & Logos
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            marginY: 0,
            minWidth: "95%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img height="400" width="50%" src={Shop} alt="Paella dish" />
          <Box
            sx={{
              flexGrow: 2,
              display: "flex",
              borderRight: "solid 0.1px #116466",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 0,
              paddingTop: 0,
              transition: "background 250ms ease",

              "&:last-child": { padding: 0 },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "3rem",
                fontFamily: "Oswald, sans-serif",
                fontWeight: "bold",
                color: "#116466",
                paddingY: "2rem",
                paddingX: "1rem",
              }}
            >
              LED Art & Furniture
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginY: 0,
            minWidth: "95%",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <img height="400" width="50%" src={Shop} alt="Paella dish" />
          <Box
            sx={{
              flexGrow: 2,
              display: "flex",
              borderLeft: "solid 0.1px #116466",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 0,
              paddingTop: 0,
              transition: "background 250ms ease",
              "&:last-child": { padding: 0 },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "3rem",
                fontFamily: "Oswald, sans-serif",
                fontWeight: "bold",
                color: "#116466",
                paddingY: "2rem",
                paddingX: "1rem",
              }}
            >
              Custom LEDs
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
