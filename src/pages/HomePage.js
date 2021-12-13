import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Retiro from "../assets/Retiro.png";

export default function HomePage() {
  return (
    <Container sx={{ maxWidth: 700 }}>
      <Card>
        <CardContent>
          <CardMedia
            sx={{ maxHeight: 300, maxWidth: 690 }}
            component="img"
            image={Retiro}
          />
        </CardContent>
        <CardContent>
          <Typography variant="h5">Mel Incögnito</Typography>
          <Typography variant="body1">
            Welcome to my page! Here you'll find a bit of everything here and
            there. Feel free to look around and check back every now and again
            to see any updates to the site. I'll be growing and expanding on
            this webpage while I continue through my web development journey.{" "}
          </Typography>
          <Typography variant="body2">
            {" "}
            Thanks for taking a peek at my site! There's not much now, I'm just
            getting started on my web development journey. I hope that with time
            I'll be able to grow and expand this site in many different forms.
            Add new features, pages and themes for customization. Feel free to
            check back every now and again, there will probably be thousands of
            frequent updates and changes as I go through my web development
            journey!{" "}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
