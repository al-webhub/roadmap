import React from "react";
import Delay from "../components/elements/Delay";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardMedia, CardContent, Typography, CardHeader } from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import LinearProgress from "@mui/material/LinearProgress";
import { CardActions } from "@mui/material";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import SortByAlphaOutlinedIcon from "@mui/icons-material/SortByAlphaOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ReactLogo from "../assets/react-logo.png";

const Backend = () => {
  return (
    <>
      <Delay />
      <Box
        style={{
          zIndex: 10000,
        }}
        marginTop={`1rem`}
        position="absolute"
        width={`100vw`}
        sx={{ flexGrow: 1 }}
      >
        <Grid container direction="row" justifyContent="flex-end" alignItems="" spacing={1}>
          <Grid item xs={4}>
            <Typography gutterBottom variant="h5" align="center">
              Main goals
            </Typography>
            <Typography variant="body1" align="left" paragraph={true}>
              <a target="__blank" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </a>
              <br />A thorough introduction to React.js <br />
              All the core basics: <br /> How React works, building components with React & building UIs with React
              Components, props & dynamic data binding.
              <ul>
                <li>Working with user events and state to create interactive applications</li>
                <li>A look behind the scenes to understand how React works under the hood</li>
                <li>Detailed explanations on how to work with lists and conditional content</li>
                <li>React Hooks (in-depth)! Working with built-in Hooks and building custom Hooks</li>
                <li>Working with "Fragments" & "Portals"</li>
                <li>Dealing with side effects</li>
                <li>Class-based components and functional components</li>
                <li>Sending Http requests & handling transitional states + responses</li>
                <li>Handling forms and user input (incl. validation</li>
                <li>Redux & Redux Toolkit</li>
                <li>Routing with React Router</li>
                <li>An in-depth introduction into Next.js</li>
                <li>Deploying React Apps</li>
                <li>Implementing Authentication</li>
                <li>Unit Tests</li>
              </ul>
            </Typography>
          </Grid>
          <Grid flexGrow={1} item xs={3}>
            <Typography variant="h5" align="center">
              Section roadmap
            </Typography>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} align="right" variant="body2" color="text.secondary">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                    }}
                  >
                    <li>Javascript refresher</li>
                    <li>Working with components</li>
                    <li>Conditions, State</li>
                  </ul>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="error">
                    <ReportProblemOutlinedIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Sections 1 to 8
                  </Typography>
                  <Typography>React basics</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
                  Side effects, Reducers, Context API, Class based components, Sending HTTP Requests
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <SortByAlphaOutlinedIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Sections 9 to 15
                  </Typography>
                  <Typography>Diving deeper</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
                  Forms & User input, Redux, Deploying react apps, Authentication in react Apps
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary" variant="outlined">
                    <AccountTreeOutlinedIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Sections 16 to 24
                  </Typography>
                  <Typography>More advanced features</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
                  Unit testing, React Hooks summary, Core feature walk-through
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <AltRouteOutlinedIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Sections 26 to 31
                  </Typography>
                  <Typography>Summary</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid marginRight="1rem" item xs={2}>
            <Card raised={true} sx={{ maxWidth: 400 }}>
              <CardHeader align="center" title="Certificate of completion" />
              <CardMedia component="img" height="250" image={ReactLogo} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Progress
                </Typography>
                <Typography variant="body2" marginTop={`1em`} color="text.secondary">
                  Last updated: 16.01.2022
                </Typography>
              </CardContent>
              <CardActions>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress value="20" variant="determinate" />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">{`20%`}</Typography>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Backend;
