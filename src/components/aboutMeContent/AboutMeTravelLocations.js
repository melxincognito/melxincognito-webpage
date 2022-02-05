import React from "react";
import { Container, Card, CardMedia, Typography } from "@mui/material";
import Alcala from "../../assets/alcala.png";
import Sicilia from "../../assets/Sicilia.png";
import Tetas from "../../assets/Tetas.png";
import Bellichi from "../../assets/Bellichi.png";
import Sol from "../../assets/favoritePlaces/PuertaDelSol.png";
import Montseratt from "../../assets/favoritePlaces/Montseratt2.png";
import Zaragoza from "../../assets/favoritePlaces/Zaragoza.png";
import Granada from "../../assets/favoritePlaces/Granada.png";
import Santiago from "../../assets/favoritePlaces/Santiago.png";
import Barcelona from "../../assets/favoritePlaces/Barcelona.png";

export default function AboutMeTravelLocations() {
  const travelCardStyle = {
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
    width: 345,
    borderRadius: 3,
  };

  const containerStyles = {
    display: "flex",
    flexWrap: "wrap",
    width: 800,
    gap: 7,
  };

  return (
    <Container sx={containerStyles}>
      <Card sx={travelCardStyle}>
        <CardMedia component="img" height="320" width="300" image={Alcala} />
        <Typography variant="subtitle1"> Alcala de Henares, Madrid </Typography>
      </Card>

      <Card sx={travelCardStyle}>
        <CardMedia component="img" height="320" width="300" image={Sicilia} />
        <Typography variant="subtitle1"> Sicilia, Italia </Typography>
      </Card>
      <Card sx={travelCardStyle}>
        <CardMedia component="img" height="320" width="300" image={Barcelona} />
        <Typography variant="subtitle1"> Barcelona, Cataluña </Typography>
      </Card>
      <Card sx={travelCardStyle}>
        <CardMedia component="img" height="320" width="300" image={Tetas} />
        <Typography variant="subtitle1"> Madrid, España </Typography>
      </Card>
      <Card sx={travelCardStyle}>
        <CardMedia component="img" height="320" width="300" image={Zaragoza} />
        <Typography variant="subtitle1"> Zaragoza, Aragon </Typography>
      </Card>
      <Card sx={travelCardStyle}>
        <CardMedia component="img" height="320" width="300" image={Granada} />
        <Typography variant="subtitle1"> Granada, Andalusia </Typography>
      </Card>

      <Card sx={travelCardStyle}>
        <CardMedia component="img" height="320" width="300" image={Santiago} />
        <Typography variant="subtitle1">
          {" "}
          Santiago de Compostela, Galicia{" "}
        </Typography>
      </Card>

      <Card sx={travelCardStyle}>
        <CardMedia
          component="img"
          height="320"
          width="300"
          image={Montseratt}
        />
        <Typography variant="subtitle1"> Montserrat, Cataluña </Typography>
      </Card>

      <Card sx={travelCardStyle}>
        <CardMedia component="img" height="320" width="300" image={Sol} />
        <Typography variant="subtitle1"> Puerta Del Sol, Madrid </Typography>
      </Card>

      <Card sx={travelCardStyle}>
        <CardMedia component="img" height="320" width="300" image={Bellichi} />
        <Typography variant="subtitle1"> Bellichi </Typography>
      </Card>
    </Container>
  );
}
