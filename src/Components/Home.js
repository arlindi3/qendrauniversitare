import React from "react";
import { Box, Typography, Button, Stack, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        textAlign: "center",
        p: 4,
      }}
    >
      <Avatar
        src="https://uamd.edu.al/wp-content/uploads/2022/07/Universiteti_i_Durresit__Aleksander_Moisiu_.svg.png"
        alt="University Logo"
        sx={{
          width: 150,
          height: 150,
          mb: 3,
        }}
      />
      <Typography
        variant="h3"
        color="primary"
        gutterBottom
        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
      >
        Mirë Se Vini Në Qendrën Universitare
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Zbuloni klube, ngjarje dhe sesione trajnimi për të përmirësuar përvojën
        tuaj në universitet.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          // style={{ height: "70px", width: "250px" }}
          variant="contained"
          color="primary"
          component={Link}
          to="/clubs"
        >
          Eksploro Klubet
        </Button>
        <Button
          // style={{ height: "70px", width: "250px" }}
          variant="contained"
          color="success"
          component={Link}
          to="/events"
        >
          Shiko Eventet
        </Button>
        <Button
          // style={{ height: "70px", width: "250px" }}
          variant="contained"
          color="warning"
          component={Link}
          to="/profile"
        >
          Profili juaj
        </Button>
        <Button
          // style={{ height: "70px", width: "250px" }}
          variant="contained"
          color="error"
          component={Link}
          to="https://uamd.pitagora.rash.al/login"
        >
          Regjistrohu në sistem
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
