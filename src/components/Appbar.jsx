import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import React from "react";
import LOGO from "/gdsc.png";
const Appbar = () => {
  const links = [
    {
      name: "Teams",
      path: "",
    },
    {
      name: "Events",
      path: "",
    },
    {
      name: "Resources",
      path: "",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        p: 2,
        px: 4,
        bgcolor: "white",
      }}
    >
      <Typography color={"#000c"} fontWeight={500} fontSize={"1.3rem"} >
        GDSC Techno India University
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        {links.map((l, i) => (
          <Button key={i} variant="text">
            {l.name}
          </Button>
        ))}
      </Box>

      <Stack direction={"row"} gap={1}>
        <Button variant="contained">Join Us</Button>
      </Stack>
    </Box>
  );
};

export default Appbar;
