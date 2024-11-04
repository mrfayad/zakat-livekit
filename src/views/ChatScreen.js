import React, { useEffect, useState } from "react";
import {
  LiveKitRoom,
  RoomAudioRenderer,
  VoiceAssistantControlBar,
  useTrackTranscription,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Container, Typography, Box, Paper } from "@mui/material";
import VoiceAgent from "../components/VoiceAgent";
import CallerInfoTable from "../components/CallerInfoTable";

function ChatScreen() {
  const [token, setToken] = useState(null);
  const [callerData, setCallerData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch token from the backend
  const fetchToken = async () => {
    try {
      const identity = "user-identity"; // Replace with actual identity logic
      const name = "User Name"; // Replace with actual name logic

      const response = await fetch(
        `${apiUrl}/getToken?identity=${identity}&name=${name}`
      );

      if (response.ok) {
        const fetchedToken = await response.text();
        setToken(fetchedToken);
      } else {
        console.error("Failed to fetch token from the backend.");
      }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  useEffect(() => {
    fetchToken();

    const sampleData = [
      {
        name: "Ahmad Ali",
        mykadNo: "900101-01-1234",
        location: "Kuala Lumpur",
        sentimentScore: "Positif",
      },
      {
        name: "Nur Aina",
        mykadNo: "950202-02-5678",
        location: "Selangor",
        sentimentScore: "Neutral",
      },
    ];

    setCallerData(sampleData);
  }, []);

  // Use the useTrackTranscription hook to get transcription segments
  const { segments } = useTrackTranscription();

  return (
    <Container>
      <Box my={4} p={2} border={1} borderRadius={4} textAlign="center">
        <Typography variant="h6">Maklumat Penting</Typography>
        <Typography variant="body1">
          Sila pastikan anda berada di tempat yang selamat dan tenang sebelum
          memulakan sesi audio. AI ejen akan mengumpulkan nama, lokasi, dan
          nombor MyKad anda untuk tujuan rekod dan pengesahan.
        </Typography>
      </Box>

      {token ? (
        <LiveKitRoom
          data-lk-theme="default"
          serverUrl={process.env.REACT_APP_LIVEKIT_URL}
          token={token}
          connect={true}
          audio={true}
        >
          <VoiceAgent />
          <VoiceAssistantControlBar />
          <RoomAudioRenderer />
        </LiveKitRoom>
      ) : (
        <Typography variant="h6" textAlign="center">
          Memuatkan konfigurasi...
        </Typography>
      )}

      {/* Display the CallerInfoTable below the chat room */}
      <CallerInfoTable callerData={callerData} />

      {/* Sidebar for Transcriptions */}
      <Box mt={4} display="flex">
        <Paper elevation={3} style={{ padding: "16px", width: "250px", marginLeft: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Transkripsi
          </Typography>
          <ul>
            {segments
              .sort((a, b) => a.firstReceivedTime - b.firstReceivedTime)
              .map((segment) => (
                <li key={segment.id}>{segment.text}</li>
              ))}
          </ul>
        </Paper>
      </Box>
    </Container>
  );
}

export default ChatScreen;