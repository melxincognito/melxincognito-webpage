import { CardContent, Typography } from "@mui/material";
import React from "react";
import MainCard from "../components/ui/MainCard";
export default function Services() {
  const headerStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    color: "#330e62",
  };

  return (
    <>
      {" "}
      <MainCard>
        <CardContent sx={headerStyles}>
          <Typography variant="h4"> Services</Typography>
        </CardContent>
        <CardContent>
          Website Design & Development, Website maintenance, custom QR codes,
          5-10 year custom domain name registration, SEO optimization
        </CardContent>

        <CardContent>
          Web Design and Development. I work with my clients from start to
          finish. We'll start with choosing a design for your site to fit your
          business' particular needs. After we've settled on a design I'll work
          on creating everything using the best development tools for your
          project.
        </CardContent>
        <CardContent>
          SEO Optimization. Increase your business visibility with SEO
          optimization.{" "}
        </CardContent>
        <CardContent>
          Website Maintenance. The web is always changing with new practices
          being introduced everyday. I'll make sure everything on your website
          stays up to date and working smoothly.
        </CardContent>
        <CardContent>
          Domain name registration. Your website wouldn't be complete without a
          custom domain name. I'll be sure to have your site hosted online at a
          domain that's associated with your business.
        </CardContent>
        <CardContent>
          QR Code creation. Gone are the days where you manually input a website
          name. In todays world your website wouldn't be complete without a QR
          code that'll allow users to go directly to your site.
        </CardContent>
      </MainCard>
    </>
  );
}
