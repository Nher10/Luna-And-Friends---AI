import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";

import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { Toaster } from "react-hot-toast";

import Paragraph from "./pages/Paragraph";
import Summy from "./pages/Summy";
import Luna from "./pages/Luna";

function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/luna" element={<Luna />} />
          <Route path="/summy" element={<Summy />} />
          <Route path="/paragraph" element={<Paragraph />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
