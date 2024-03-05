import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const Home = () => {
  const mb = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <Box p={4}>
      <Box className="hero">
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { md: "2.6rem", xs: "2rem" },
          }}
        >
          Welcome to <span style={{ color: "#EB4132" }}>Google </span>
          <span style={{ color: "#4086F4" }}>Developer </span> {!mb && <br />}
          <span style={{ color: "#069E56" }}>Students </span>
          <span style={{ color: "#FABC00" }}>Club </span>of{" "}
          <span>Techno India University</span>
        </Typography>
        <Typography
          sx={{
            fontWeight: 100,
            mt: 2,
          }}
        >
          Building Bridges Between Theory and Practice: Engage. Empower.
          Elevate. Techno India University's Google Developer Student Clubs
          (GDSC) is a dynamic initiative in partnership with Google Developers,
          aimed at nurturing the passion of budding developers within our
          university community. Whether delving into Web, Android, Cloud
          Computing, or Data Science and many more, our platform offers an
          exclusive space for students to not only participate in peer-to-peer
          workshops but also to tackle real-world challenges through sponsored
          projects, making meaningful contributions to our local community. Join
          us as we proudly become a beacon of innovation among the select
          institutions chosen for this prestigious program.
        </Typography>

        <Button
          variant="contained"
          sx={{ fontSize: "1.3rem", mt: 3, fontFamily: "monospace " }}
          LinkComponent={"a"}
          href="https://gdsc.community.dev/techno-india-university-kolkata/"
          target="_BLANK"
        >
          Join Our Journey
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
