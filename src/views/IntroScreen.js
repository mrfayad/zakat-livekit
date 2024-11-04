import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function IntroScreen() {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate("/chat");
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom style={{ color: "#0D47A1" }}>
          Selamat Datang ke Aplikasi Chat AI Lembaga Zakat Selangor
        </Typography>
        <Typography variant="body1" paragraph>
          Kami di Lembaga Zakat Selangor sedia membantu anda. Klik butang di bawah untuk memulakan sesi chat audio bersama AI kami.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleStartChat}
          style={{ backgroundColor: "#0D47A1", color: "#FFFFFF" }}
        >
          Mula Chat
        </Button>
      </Box>
    </Container>
  );
}

export default IntroScreen;