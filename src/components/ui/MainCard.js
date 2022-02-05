import React from "react";
import { Card } from "@mui/material";

export default function MainCard(props) {
  const cardStyles = {
    borderRadius: 5,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  return (
    <div>
      <Card sx={cardStyles}>{props.children}</Card>
    </div>
  );
}
