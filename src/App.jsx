import { Box } from "@mui/material";
import "./App.css";
import Appbar from "./components/Appbar";
import Home from "./pages/Home";

function App() {
  return (
    <Box minHeight={"100vh"}>
      <Appbar />
      <Box>
        <Home />
      </Box>
    </Box>
  );
}

export default App;
