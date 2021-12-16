import React from "react";
import {
  Container,
  Card,
  Typography,
  CardContent,
  Link,
  CardMedia,
} from "@mui/material";
import OdinLogo from "../assets/mydevjourney/odinlogo.png";

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
            <Typography variant="h4" color="#330e62">
              {" "}
              My Developer Journey{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              Teaching myself development started off as a mess to say the
              least. I wasted about 5 months jumping from resource to resource
              because I didn't know exactly what to look for. The only reason I
              ended up finding the right path was because I was persistent. I
              decided I wanted to have a career as a software developer for many
              reasons. For starters, I was attracted to the amount of mobility a
              career as a developer would give me. Along with being a travel
              bean who can't be locked away to any one part of the world, I also
              have a disability where I need to find work where I'm able to work
              from home. I knew that developer roles would be able to fulfill
              both those needs while still offering me decent pay.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              When I first started I looked into bootcamps. They seemed great at
              first glance but I didnt have the ability to dedicate the time
              while working a full time job and I also didn't have $9,000 to
              shell out. My only option was teaching myself. I did feel a little
              discouraged but I knew this was what I really wanted to do so I
              looked into finding as many free resources online. I tried
              platforms like{" "}
              <Link href="https://www.codecademy.com/" target="_blank">
                Codecademy
              </Link>{" "}
              and free trials of paid courses. I didn't get to create anything
              noteworthy during this time but I was able to play around with a
              lot of different languages and tools.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <CardMedia
              sx={{ maxWidth: 600 }}
              component="img"
              image={OdinLogo}
            />
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              It wasn't until I stumbled upon{" "}
              <Link href="https://www.theodinproject.com/" target="_blank">
                {" "}
                The Odin Project{""}
              </Link>{" "}
              that I began to make any real progress towards becoming a
              developer. A bunch of developers compiled all the free tools and
              resources to launch a career in web development. They also
              included projects and a community discord. It was everything I
              needed in order to get started, the only catch was I had to be
              willing to actually do the work. I knew there were only three
              things I needed to do: sit down, get to work and keep persistent.
              So I did just that and it took me about two months to get through
              their foundations path. I spent about 4-8 hours a day working
              through the modules and projects and ended with a really good
              foundation to build off of.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              When I was finished with their foundations path I had to choose
              between their Ruby or JavaScript track. I felt a bit at a
              crossroads but after doing some job searches on local job boards I
              saw there were significantly more jobs available that required
              JavaScript. This made my choice pretty straightforward.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              I went through a good part of the JavaScript track but I didnt end
              up completing the whole thing. I stopped with vanilla JavaScript
              after I learned about WebPacks. I was really intrigued by them and
              saw the benefit of using them for larger scale projects; I wanted
              to work with them more. I remembered a friend working as a
              software engineer saying he works with React and he was pretty
              sure it was operating off a webpack so I looked into it. After I
              did my research I concluded that React was JavaScript on steroids.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              It ended up being exactly what I never knew I needed.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
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
              the odin project and I didn't have $200 for a full stack React
              course. I just needed the basics to be explained so I spent twenty
              dollars on a Udemy course. I thought it might help but I found out
              pretty quickly it was just a follow along tutorial. I could have
              found the same thing on Youtube.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              I never made the mistake of spending money on courses ever again.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1"> Anyways. </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              Eventualy, I found{" "}
              <Link
                href="https://www.youtube.com/watch?v=Dorf8i6lCuk"
                target="_blank"
              >
                this{""}
              </Link>{" "}
              YouTube video from Academind and it was exactly what I was looking
              for! He gives an explanation of React basics by using an easy
              tutorial that's broken down so you're actually understanding
              what's going on. The video is four hours long and it can be a
              little dense so I took about two days to get through it with a
              good understanding. By the end I understood enough to have a good
              foundation of React basics and I felt confident I could move into
              more advanced topics.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              I started building whatever projects I could think to practice and
              from there I started to learn about the different tools available
              like Redux, Material UI, Firebase, etc. React being relatively new
              means there are a lot of frequent changes and update. A lot of the
              videos and help guides were outdated even though they were
              uploaded only a few months prior so I had to really practice
              researching finding updated and best practices. Tech is always
              changing so this is an essential skill to develop for any
              engineer, knowing this allowed me to not get too annoyed by these
              smaller issues.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              I feel like I have been able to get a good foundation for my path
              forward but I know this is only the beginning. I've only scratched
              the surface so far, there's so many things I dont know and so many
              paths I could take. Currently my goals are to create quality web
              and mobile applications using React.JS and React Native while also
              learning to program blockchain applications. I never thought I
              would have had the ability to teach myself something so valuable
              but thanks to the surplus of free resources plus the supportive
              tech community, I know anything is possible as long as I'm willing
              to put in the effort.{" "}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
}
