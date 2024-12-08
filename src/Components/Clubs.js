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

const Clubs = ({ joinedClubs, setJoinedClubs }) => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const response = [
        {
          id: 1,
          name: "Klubi Fotografisë",
          description: "Kapni bukurinë e jetës.",
          members: 23,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sRvzg2nq15jZK_fC_lv3-rZVBIQXdsOn3w&s",
        },
        {
          id: 2,
          name: "Klubi Programimit",
          description: "Mësoni dhe ndërtoni projekte të mahnitshme.",
          members: 70,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbprHKsNzb8uHhcGJINV_UavccB8_YFAknA&s",
        },
        {
          id: 3,
          name: "Klubi Shahut",
          description:
            "Një libër nuk mund të mësojë në vetvete si të luash. Mund të shërbejë vetëm si udhërrëfyes, dhe pjesa tjetër duhet të mësohet nga përvoja.",
          members: 33,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvERl0uxulLO8W9AkuVsZ9_Kurvk4ICLf8Q&s",
        },
        {
          id: 4,
          name: "Klubi Kercimit",
          description:
            "Vallëzoni së pari. Mendoni më vonë. Është rendi i natyrshëm.",
          members: 14,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVzuWoTTlk4Mg54A8NnMBvhL06mTYalhlQQ&s",
        },
        {
          id: 5,
          name: "Klubi Futbollit",
          description:
            "Futbolli është i thjeshtë. Por asgjë nuk është më e vështirë se të luash futboll të thjeshtë.",
          members: 120,
          image:
            "https://content.jdmagicbox.com/comp/def_content/football-clubs/screenshot-8-football-clubs-7-z8wtr.jpg",
        },
        {
          id: 6,
          name: "Klubi Basketbollit",
          description:
            "Talenti fiton lojëra, por puna në grup dhe inteligjenca fitojnë kampionate.",
          members: 40,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11YClhBWT1OKJM2JS3ZF4L-X8Hu7qw-_09A&s",
        },
      ];
      setClubs(response);
    };
    fetchClubs();
  }, []);

  const handleJoin = (club) => {
    if (!joinedClubs.includes(club.name)) {
      setJoinedClubs([...joinedClubs, club.name]);
      setClubs((prevClubs) =>
        prevClubs.map((c) =>
          c.id === club.id ? { ...c, members: c.members + 1 } : c
        )
      );
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        bgcolor: "background.paper",
      }}
    >
      <Avatar
        src="https://uamd.edu.al/wp-content/uploads/2022/07/Universiteti_i_Durresit__Aleksander_Moisiu_.svg.png"
        alt="University Logo"
        sx={{
          width: 40,
          height: 40,
          mb: 3,
          position: "absolute",
          left: 160,
          top: 31,
        }}
      />
      <Typography variant="h4" color="primary" gutterBottom>
        KLUBET
      </Typography>
      <Grid container spacing={3}>
        {clubs.map((club) => (
          <Grid item xs={12} sm={6} md={4} key={club.id}>
            <Card
              elevation={3}
              sx={{
                backgroundImage: `url(${club.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 200,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.6)",
                  // color: "text.primary",
                  height: "100%",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(255, 255, 255, 0.75)",
                  }}
                >
                  {club.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "rgba(255, 255, 255, 0.75)" }}
                >
                  {club.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    color: "rgba(255, 255, 255, 0.75)",
                    fontWeight: "bold",
                  }}
                >
                  Anëtarë: {club.members}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ position: "absolute", bottom: 16, right: 16 }}
                  color={
                    joinedClubs.includes(club.name) ? "success" : "primary"
                  }
                  onClick={() => handleJoin(club)}
                  disabled={joinedClubs.includes(club.name)}
                >
                  {joinedClubs.includes(club.name) ? "Joined" : "Join"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Clubs;
