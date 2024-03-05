import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import LOGO from "/gdsc.png";
const Appbar = () => {
  const theme = useTheme();
  const mb = useMediaQuery(theme.breakpoints.down("sm"));

  const links = [
    {
      name: "About Us",
      path: "",
    },
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
      <Typography color={"#000c"} fontWeight={500} fontSize={"1.3rem"}>
        {mb ? "GDSC TIU" : "GDSC Techno India University"}
      </Typography>

      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
        {links.map((l, i) => (
          <Button key={i} variant="text">
            {l.name}
          </Button>
        ))}
      </Box>

      <Stack direction={"row"} gap={1}>
        <Button
          variant="contained"
          LinkComponent={"a"}
          href="https://gdsc.community.dev/techno-india-university-kolkata/"
          target="_BLANK"
        >
          Join Us
        </Button>
      </Stack>
    </Box>
  );
};

export default Appbar;
