import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import GunGuy from "../Images/Gunguy.png";
import Shades from "../Images/GlassesMuscles.png";
import Boatman from "../Images/BoatJuan.png";
import Shop from "../Images/ShopImage.png";
import Banner from "../Images/Holitdine.png";

export const Founders: React.FunctionComponent = () => {
  const gridData = [
    {
      title: "Alec Gonzales",
      caption: "CEO & patron saint of the 2nd Amendment",
      image: GunGuy,
    },
    {
      title: "Adan Rodriguez",
      caption: "CFO & could probably rap circles around you",
      image: Shades,
    },
    {
      title: "Juan Diaz",
      caption: "COO & knows what to do with his hands",
      image: Boatman,
    },
    {
      title: "James Opara",
      caption: "CTO & Enthusiast of exotic eats ",
      image: Shop,
    },
  ];

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
          minHeight: "500px",
        }}
      ></Box>
      <Box
        sx={{
          background: "#116466",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "600px",
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
            fontFamily: "Oswald, sans-serif",
            fontWeight: "bold",
            color: "white",
            paddingTop: "3rem",
            paddingBottom: "1rem",
            paddingX: "1rem",
            textShadow: "3px 3px 3px #2c3531",
          }}
        >
          Who we are
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            flexWrap: "wrap",
          }}
        >
          {gridData.map((grid) => (
            <Card
              sx={{
                margin: 5,
                border: "none",
                borderRadius: "0px",
                minWidth: "300px",
                width: "605px",
              }}
            >
              <CardMedia
                component="img"
                height="320"
                image={grid.image}
                alt="Paella dish"
              />
              <CardContent
                sx={{
                  border: "none",
                  boxShadow: 0,
                  paddingBottom: 0,
                  paddingTop: 0,
                  transition: "background 250ms ease",

                  backgroundColor: "#000000",

                  "&:last-child": { padding: 0 },
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "1.7rem",
                    fontFamily: "Oswald, sans-serif",
                    color: "#ffffff",
                    paddingY: "2rem",
                    paddingX: "1rem",
                  }}
                >
                  <span style={{ fontWeight: 900 }}>{`${grid.title}`}</span>{" "}
                  <br />{" "}
                  <span style={{ fontWeight: 100 }}>{`${grid.caption}`}</span>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};
