import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Profile = ({
  joinedClubs = [],
  setJoinedClubs,
  joinedEvents = [],
  setJoinedEvents,
}) => {
  const user = {
    name: "XX XX",
    email: "XX@gmail.com",
  };

  // Handle removing a club
  const handleRemoveClub = (club) => {
    setJoinedClubs(joinedClubs.filter((c) => c !== club));
  };

  // Handle removing an event
  const handleRemoveEvent = (event) => {
    setJoinedEvents(joinedEvents.filter((e) => e.id !== event.id));
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 4, bgcolor: "background.default" }}>
      <Avatar
        src="https://uamd.edu.al/wp-content/uploads/2022/07/Universiteti_i_Durresit__Aleksander_Moisiu_.svg.png"
        alt="University Logo"
        sx={{
          width: 40,
          height: 40,
          mb: 3,
          position: "absolute",
          left: 255,
          top: 31,
        }}
      />
      <Typography variant="h4" color="warning.main" gutterBottom>
        PROFILI JUAJ
      </Typography>
      <Typography variant="h6" color="text.primary" gutterBottom>
        Emri: {user.name}
      </Typography>
      <Typography variant="h6" color="text.primary" sx={{ mb: 3 }}>
        Email: {user.email}
      </Typography>

      {/* Joined Clubs */}
      <Typography variant="h5" color="primary" gutterBottom>
        Klube të anëtarësuara
      </Typography>
      {joinedClubs.length > 0 ? (
        <List>
          {joinedClubs.map((club, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleRemoveClub(club)}>
                  <DeleteIcon color="error" />
                </IconButton>
              }
            >
              <ListItemText primary={club} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Ju nuk jeni anëtarësuar ende në asnjë klub.
        </Typography>
      )}
      <Divider sx={{ my: 3 }} />

      {/* Joined Events */}
      <Typography variant="h5" color="success.main" gutterBottom>
        Evente të anëtarësuara
      </Typography>
      {joinedEvents.length > 0 ? (
        <List>
          {joinedEvents.map((event, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleRemoveEvent(event)}>
                  <DeleteIcon color="error" />
                </IconButton>
              }
            >
              <ListItemText
                primary={event.title}
                secondary={`Date: ${event.date}, Location: ${event.location}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Ju nuk jeni anëtarësuar ende në asnjë event.
        </Typography>
      )}
    </Box>
  );
};

export default Profile;
