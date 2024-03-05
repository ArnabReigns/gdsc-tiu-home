import { Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box p={4}>
      <Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "2.6rem",
          }}
        >
          Welcome to <span style={{ color: "#EB4132" }}>Google </span>
          <span style={{ color: "#4086F4" }}>Developer </span> <br/>
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
      </Box>
    </Box>
  );
};

export default Home;
