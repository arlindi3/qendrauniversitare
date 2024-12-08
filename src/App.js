import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Clubs from "./Components/Clubs";
import Events from "./Components/Events";
import Profile from "./Components/Profile";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    success: {
      main: "#2e7d32",
    },
    warning: {
      main: "#ed6c02",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
});

function App() {
  const [joinedClubs, setJoinedClubs] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/clubs"
            element={
              <Clubs
                joinedClubs={joinedClubs}
                setJoinedClubs={setJoinedClubs}
              />
            }
          />
          <Route
            path="/events"
            element={
              <Events
                joinedEvents={joinedEvents}
                setJoinedEvents={setJoinedEvents}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                joinedClubs={joinedClubs}
                joinedEvents={joinedEvents}
                setJoinedClubs={setJoinedClubs}
                setJoinedEvents={setJoinedEvents}
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
