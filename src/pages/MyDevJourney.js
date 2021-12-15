import { Container, Card, Typography, CardContent, Link } from "@mui/material";
import React from "react";

export default function MyDevJourney() {
  return (
    <Container
      sx={{
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          maxWidth: 690,
          display: "flex",
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h4"> My Web Development Journey </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              As a self-taught developer, I thought I would take a moment to
              share how I've been developing the necessary skills on my own. The
              whole process started out a little shakey but I ended up finding
              the right path because I was persistent. I decided I wanted to
              have a career as a software developer for many reasons. Primarily,
              I was attracted to the amount of mobility a career as a developer
              would give me. I needed a job where I could work from home because
              of my disability. As much as I enjoy working on site, I need a job
              where I'm able to work from home in order to be productive. I was
              also extremely attracted to the career because I knew I wouldn't
              be locked to any one part of the world. I really enjoy moving
              around to different countries so I wanted a career where I
              wouldn't be restricted to any one area.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              When I first started to take the plunge I looked into bootcamps.
              They seemed great at first glance but I didnt have the ability to
              dedicate the necessary time while working a full time job. I also
              didn't have $9,000 of dispensible income to spend on a bootcamp.
              My only option was teaching myself at that point. I knew there
              were a lot of free resources online so I tried platforms like
              codecademy and free trials of paid courses. I wasted about 5
              months jumping from resource to resource because I didn't know
              exactly what to look for. I didn't get to create anything
              noteworthy during this time but I was able to scratch the surface
              of a lot of different languages and tools.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              It wasn't until I stumbled upon{" "}
              <Link href="https://www.theodinproject.com/" target="_blank">
                {" "}
                The Odin Project{""}
              </Link>{" "}
              that I began to make any real progress. A bunch of developers
              compiled all the necessary tools and resources to use online to
              start a career in web development along with projects and a
              community discord. Really, what more could someone in my situation
              ask for? It was exactly what I needed so I sat down and got to
              work. It took me about two months to get through their{" "}
              <Link
                href="https://www.theodinproject.com/paths/foundations/courses/foundations"
                target="_blank"
              >
                {" "}
                Foundations Path{""}
              </Link>{" "}
              spending about 4-8 hours a day working through the modules and
              projects.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              When I was finished with their foundations path I had to choose
              between their Ruby or JavaScript track. After doing some job
              searches on local job boards I saw there were significantly more
              jobs available that required JavaScript. This made my choice
              pretty straightforward.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              I went through a good part of the JavaScript track but I didnt end
              up completing the whole thing. I stopped with vanilla JavaScript
              after I learned about WebPacks. I was really intrigued by them and
              saw the benefit of using them for larger scale projects; I wanted
              to work with them more. I remember a friend working as a software
              engineer saying he works with something called React and he was
              pretty sure it was operating off a webpack so I looked into it.
              React was JavaScript on steroids and it ended up being exactly
              what I never knew I needed.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              I tried to learn straight from the{" "}
              <Link
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
              >
                {" "}
                React Docs{""}
              </Link>{" "}
              but, honestly, I didn't have enough developer skills at the time
              to learn without having someone explain a few things here and
              there. I looked around but I couldn't find another platform like
              the odin project and I didn't have $150 for a full stack React
              course. I just needed the basics to be explained so I spent twenty
              dollars on a udemy course. I thought it might help but I found out
              pretty quickly it was just a follow along tutorial I could have
              found on Youtube.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              I never made the mistake of spending money on courses ever again.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6"> Anyways. </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              Eventualy, I found{" "}
              <Link
                href="https://www.youtube.com/watch?v=Dorf8i6lCuk"
                target="_blank"
              >
                this{""}
              </Link>{" "}
              YouTube video from{" "}
              <Link
                href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w"
                target="_blank"
              >
                {" "}
                Academind
              </Link>{" "}
              and it was exactly what I was looking for! He gives an explanation
              of React basics by using an easy tutorial that's broken down so
              you're actually understanding what's going on. The video is four
              hours long and it can be a little dense so I took about two days
              to get through it with a good understanding. By the end I
              understood enough to have a good foundation of React basics and I
              felt confident I could move into more advanced topics.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              I started building whatever projects I could think to practice and
              from there I started to learn about the different tools available
              like Redux, Material UI, Firebase, etc. React being relatively new
              means there are a lot of frequent changes and update. A lot of the
              videos and help guides were outdated even though they were
              uploaded only a few months prior so I had to really practice
              researching finding updated and best practices. This is an
              essential skill to develop when using any language or framework so
              there's.{" "}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
}
