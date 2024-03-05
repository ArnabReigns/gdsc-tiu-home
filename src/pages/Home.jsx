import { Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box p={4}>
      <Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "3rem",
          }}
        >
          Welcome to <span style={{ color: "#EB4132" }}>Google </span>
          <span style={{ color: "#4086F4" }}>Developer </span> <br />
          <span style={{ color: "#069E56" }}>Students </span>
          <span style={{ color: "#FABC00" }}>Club </span> of{" "}
          <span className="code">Techno India University</span>
        </Typography>
        <Typography
          sx={{
            fontWeight: 100,
            mt: 2,
          }}
        >
          Helping students bridge the gap between theory and practice" Connect.
          Learn. Grow Developer Student Clubs (DSC) is a program in
          collaboration with Google Developers that targets passionate students
          from developer communities across the globe. Be it Android, Cloud, or
          Data Science - this is a unique platform for students to not just
          learn through P2P workshops but solve actual real-world problems for
          the local community through sponsored projects. JIT Coimbatore is now
          part of the few institutes that have been selected for this program.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
