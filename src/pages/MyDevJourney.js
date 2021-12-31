import React from "react";
import {
  Container,
  Card,
  Typography,
  CardContent,
  Link,
  CardMedia,
} from "@mui/material";
import Header from "../assets/mydevjourney/header.png";
import OdinLogo from "../assets/mydevjourney/odinlogo.png";
import NoDesk from "../assets/mydevjourney/BegStudy.png";
import ConDesk from "../assets/mydevjourney/NewSetup.png";
import Logos from "../assets/mydevjourney/reactredux.png";

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
        <Card sx={{ borderRadius: 5 }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" color="#330e62">
              {" "}
              My Developer Journey{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <CardMedia
              sx={{ borderRadius: 5 }}
              component="img"
              image={Header}
            />
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              Teaching myself development started off as a mess to say the
              least. I wasted about 5 months jumping from resource to resource
              because I didn't know exactly what to look for. I saw how easy it
              could be to throw in the towel from having a lack of direction but
              I really wanted a career as a developer so I kept going. The only
              reason I ended up on the right path was because I was persistent.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              I decided I wanted to have a career as a developer for many
              reasons. Primarily, I was attracted to the amount of mobility this
              career would allow me. Along with being a little travel bean who
              can't have a career where I'm locked away to any one part of the
              world, I also have a disability where I need to be able to work
              from home. I knew that developer roles would be able to fulfill
              both those needs while also offering good pay & a creative outlet.{" "}
            </Typography>{" "}
          </CardContent>

          <CardContent>
            <Typography variant="body1">
              {" "}
              When I first started transitioning into development I looked into
              bootcamps. They seemed great at first glance but I didnt have the
              ability to dedicate the time while working a full time job and I
              also didn't have $9,000 to shell out. My only option was teaching
              myself. I did feel a little discouraged but I knew this was what I
              really wanted to do so I wasn't going to let those factors hold me
              back. I tried platforms like{" "}
              <Link href="https://www.codecademy.com/" target="_blank">
                Codecademy
              </Link>{" "}
              and some free trials of paid courses. I didn't get to create
              anything noteworthy during this time but I was able to play around
              with a lot of different languages and tools.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <CardMedia component="img" image={OdinLogo} />
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
              I didn't have a desk or a table in my apartment for a while so I
              spent the first couple months working on my couch or on the floor
              randomly. I was very happy when I finally had a desk and a good
              sized monitor to start working with. Now that I have more
              disposable income I like to invest a bit into my workspace because
              I know it's not the desk that makes me a better developer but I
              see how much of a difference it makes having a good workspace.
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              display: "flex",

              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <CardMedia
              sx={{
                maxWidth: 340,
                borderTopLeftRadius: 25,
                borderBottomLeftRadius: 25,
              }}
              component="img"
              image={NoDesk}
            />
            <CardMedia
              sx={{
                maxWidth: 340,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
              }}
              component="img"
              image={ConDesk}
            />
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
              I went through a good part of the JavaScript track but I haven't
              completed the whole thing yet. I stopped with focusing on vanilla
              JavaScript after I learned about WebPacks. I was really intrigued
              by them and saw the benefit of using them for larger scale
              projects; I wanted to work with them more. I remembered a friend
              working as a software engineer saying he works with React and he
              was pretty sure it was operating off a webpack so I looked into
              it. After I did my research I concluded that React was JavaScript
              on steroids and it was exactly what I never knew I needed.{" "}
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body1">
              {" "}
              I tried looking for resources to learn the basics, I didn't
              realize until months later if I would have just scrolled down on
              the Javascript module The Odin Project had a whole section to get
              started in React. I tried to learn straight from the{" "}
              <Link
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
              >
                {" "}
                React Docs{""}
              </Link>
              . Honestly, I didn't have enough developer skills at the time to
              learn from the documentation so I just bookmarked it for later and
              continued my search.
            </Typography>
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
            <CardMedia sx={{}} component="img" image={Logos} />
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              I started building whatever projects I could think to practice and
              from there I started to learn about the different tools available
              like{" "}
              <Link href="https://redux.js.org/" target="_blank">
                Redux,
              </Link>{" "}
              <Link href="https://mui.com/" target="_blank">
                Material UI
              </Link>{" "}
              and{" "}
              <Link href="https://firebase.google.com/" target="_blank">
                Firebase
              </Link>
              . React being relatively new means there are a lot more frequent
              changes and updates. Even though the videos and help guides were
              uploaded only a few months ago I already found them to be
              outdated. I had to put into practice researching and finding the
              updated methods. Tech is always changing so this is an essential
              skill to develop for any developer. I was glad I was given the
              opportunity to experience this early in my development path.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              I'm proud to say I have been able to give myself a good foundation
              to build off of. I still go back to The Odin Project and jump
              around the material because it has a lot of valuable learning
              material that I can use regardless of what programming
              language/framework I end up working with in my career. Currently
              my goals are to create quality web and mobile applications using
              React.JS and React Native while also learning to program
              blockchain applications with Rust. I never thought I would have
              had the ability to teach myself something so valuable but thanks
              to the availability of free resources online plus the supportive
              tech community I know anything is possible as long as I'm willing
              to put in the effort.{" "}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
}
