import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function AboutMeGoals() {
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" color="#330e62">
              {" "}
              My Goals for 2022{" "}
            </Typography>
          </div>
        </CardContent>
      </div>
      <CardContent>
        <Typography variant="body1">
          {" "}
          I've lived a lot of adventure being able to travel around the globe
          and live in different places. The adventure isn't over but this year
          is meant to be dedicated to advancing myself in my career so I can get
          to where I really want to be in life while being financially secure
          and most importantly, happy.{" "}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          My top goal for 2022 is landing my first position as a Junior
          Developer. I would love the opportunity to work with senior developers
          so I can learn from them and gain the experience needed to become a
          developer who can not only complete tasks but can also provide
          additional value.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          An additional goal that extends from my top goal is to learn how to
          create reliable, large scale applications with React for mobile and
          web. I plan on continuing with my current path of focusing on building
          with React.JS for web applications before I begin to touch on React
          Native for mobile applications. I would also like to deepen my
          knowledge of Blockchain applications and learn how to write programs
          with Rust.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          The final goal on my list is related to my health. I would like to
          gain twenty pounds by the end of the year. I am very thin and I like
          the way I look now but I would like to look healthy, full and strong.
          I have a hard time keeping on weight so I plan on spending 2022
          lifting weights to try and gain muscle mass while meal planning and
          tracking my calories to ensure I'm eating enough and gaining healthy
          fats.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          I know my goals will take a lot of hard work and effort to reach but
          with dedication & persistence I know I'll be able to exceed them. I
          hope the path forward isn't too rocky, I know this year will be a good
          adventure.
        </Typography>
      </CardContent>
    </Card>
  );
}
