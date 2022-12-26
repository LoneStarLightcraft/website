import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { Footer } from "../HomePage";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

export const Contact: React.FunctionComponent = () => {
  return (
    <Container maxWidth={false} sx={{ flexDirection: "column" }}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: "100%",
          minHeight: "850px",
        }}
      >
        <Link to="/">
          {" "}
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
                borderBottom: "solid 1.5px black",
                borderRight: "solid 1.5px black",
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
        </Link>

        <Box
          sx={{
            marginTop: "9rem",
          }}
        >
          <Typography
            sx={{
              textDecorationColor: "#2c3531",
              textShadow: "3px 3px 3px #2c3531",
              fontSize: "4rem",
              fontFamily: "Oswald, sans-serif",
              fontWeight: "bold",
              color: "#2c3531",
              textTransform: "uppercase",
            }}
          >
            {"Let's"} <br /> {"Get"}
            <br />
            {"Started"}
          </Typography>
        </Box>
        <Box>
          <Box
            component="form"
            sx={{
              width: "50%",
              marginTop: "2%",
            }}
          >
            <div>
              <TextField
                sx={{ width: "35ch", m: 1 }}
                id="filled-basic"
                label="Name"
                variant="filled"
              />
              <TextField
                sx={{ width: "35ch", m: 1 }}
                id="filled-basic"
                label="Organization"
                variant="filled"
              />
            </div>
            <div>
              <TextField
                sx={{ width: "35ch", m: 1 }}
                id="filled-basic"
                label="Email"
                variant="filled"
              />
              <TextField
                sx={{ width: "35ch", m: 1 }}
                id="filled-basic"
                label="Phone"
                variant="filled"
              />
            </div>
            <TextField
              id="filled-basic"
              label="Describe your idea"
              multiline
              rows={6}
              variant="filled"
              sx={{
                width: {
                  xs: "35ch", // 0
                  sm: "35ch", // 600
                  lg: "35ch", // 1200
                  xl: "71.5ch", // 1536
                },
                maxWidth: "81.5ch",
                m: 1,
              }}
            />
          </Box>
          <Button
            size="large"
            sx={{ m: 1 }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};
