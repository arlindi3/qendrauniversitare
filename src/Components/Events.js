import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

const Events = ({ joinedEvents, setJoinedEvents }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = [
        {
          id: 1,
          title: "Hackathon 2024",
          date: "2024-12-01",
          location: "Auditori 103",
        },
        {
          id: 2,
          title: "Punishtja Fotografise",
          date: "2024-11-20",
          location: "Auditori 101",
        },
        {
          id: 3,
          title: "Kompeticioni Kercimit",
          date: "2024-11-30",
          location: "Auditori 102",
        },
        {
          id: 4,
          title: "Kampjonati Shahut",
          date: "2024-12-3",
          location: "Auditori 107",
        },
        {
          id: 5,
          title: "Kampjonati Futbollit",
          date: "2024-11-30",
          location: "Kalceto Eurodrini",
        },
        {
          id: 6,
          title: "Kampjonati Basketbollit",
          date: "2024-11-30",
          location: "Vollga",
        },
      ];
      setEvents(response);
    };
    fetchEvents();
  }, []);

  const handleJoin = (event) => {
    if (!joinedEvents.some((e) => e.id === event.id)) {
      setJoinedEvents([...joinedEvents, event]);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 4, bgcolor: "background.paper" }}>
      <Avatar
        src="https://uamd.edu.al/wp-content/uploads/2022/07/Universiteti_i_Durresit__Aleksander_Moisiu_.svg.png"
        alt="University Logo"
        sx={{
          width: 40,
          height: 40,
          mb: 3,
          position: "absolute",
          left: 185,
          top: 31,
        }}
      />
      <Typography variant="h4" color="success.main" gutterBottom>
        EVENTET
      </Typography>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" color="text.primary">
                  {event.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Date: {event.date}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Location: {event.location}
                </Typography>
                <Button
                  variant="contained"
                  color={
                    joinedEvents.some((e) => e.id === event.id)
                      ? "success"
                      : "primary"
                  }
                  onClick={() => handleJoin(event)}
                  disabled={joinedEvents.some((e) => e.id === event.id)}
                >
                  {joinedEvents.some((e) => e.id === event.id)
                    ? "Joined"
                    : "Join"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Events;
