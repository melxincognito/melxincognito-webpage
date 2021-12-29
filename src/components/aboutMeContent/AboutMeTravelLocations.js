import React from "react";
import { Container, Card, CardMedia, Typography } from "@mui/material";
import Alcala from "../../assets/alcala.png";
import Sicilia from "../../assets/Sicilia.png";
import Tetas from "../../assets/Tetas.png";
import Bellichi from "../../assets/Bellichi.png";

export default function AboutMeTravelLocations() {
  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", width: 800, gap: 7 }}>
      <Card
        sx={{
          width: 345,
          borderRadius: 3,
        }}
      >
        <CardMedia component="img" height="320" width="300" image={Alcala} />
        <Typography variant="subtitle1"> Alcala de Henares, España </Typography>
      </Card>

      <Card sx={{ width: 345, borderRadius: 3 }}>
        <CardMedia component="img" height="320" width="300" image={Sicilia} />
        <Typography variant="subtitle1"> Sicilia, Italia </Typography>
      </Card>
      <Card sx={{ width: 345, borderRadius: 3 }}>
        <CardMedia component="img" height="320" width="300" image={Tetas} />
        <Typography variant="subtitle1"> Madrid, España </Typography>
      </Card>
      <Card sx={{ width: 345, borderRadius: 3 }}>
        <CardMedia component="img" height="320" width="300" image={Bellichi} />
        <Typography variant="subtitle1"> Bellichi </Typography>
      </Card>
    </Container>
  );
}
