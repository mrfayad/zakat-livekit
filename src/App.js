import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, Typography, Toolbar, AppBar } from "@mui/material";
import ChatScreen from "./views/ChatScreen";
import IntroScreen from "./views/IntroScreen";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5", // Light background color
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#1a237e" }}> {/* Deep Blue color */}
        <Toolbar>
          <img
            src="https://www.zakatselangor.com.my/wp-content/uploads/2018/10/lzs-logo.png"
            alt="Lembaga Zakat Selangor Logo"
            style={{ height: "50px", marginRight: "16px" }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#fff" }}>
            Lembaga Zakat Selangor AI Chat
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          py: 4, // Padding top and bottom
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<IntroScreen />} />
            <Route path="/chat" element={<ChatScreen />} />
          </Routes>
        </Router>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: "center",
          backgroundColor: "#e8eaf6", // Light background for footer
          mt: "auto",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Lembaga Zakat Selangor. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default App;