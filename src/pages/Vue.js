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
import VueLogo from "../assets/vue_logo.png";

const Vue = () => {
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
              <a target="__blank" href="https://www.udemy.com/course/vuejs-2-the-complete-guide">
                Vue - The Complete Guide (w/ Router, Vuex, Composition API)
              </a>
              We'll start at the very basics, what Vue.js is and how it works before we move on to more complex and
              advanced topics but I'll be honest: It's too much to fit it all into one sentence, so here's what this
              course about:
              <ul>
                <li>What is VueJS and Why would you use it?</li>
                <li>The Basics (including the basic Syntax, Understanding Templates and much more!)</li>
                <li>How to Output Reactive Data & Listen to Events</li>
                <li>Interacting with DOM (Rendering Lists, Conditionally attaching/ detaching Elements ...)</li>
                <li>Setting up a Development Environment and Workflow</li>
                <li>Using Components (and what Components are to begin with)</li>
                <li>A Deep Dive Look Behind the Scenes of Vue</li>
                <li>Binding to Form Inputs</li>
                <li>Sending Http Requests to Backend APIs</li>
                <li>Authentication & Vue</li>
                <li>How to make your App more Beautiful with Animations and Transitions</li>
                <li>How to create an awesome Single-Page-Application (SPA) with Routing</li>
                <li>How to improve State Management by using Vuex</li>
                <li>Implementing Authentication</li>
                <li>More</li>
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
                  Core syntax, Templates, Directives, Data, Methods, Computed properties, Watchers
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
                    Basics
                  </Typography>
                  <Typography>Getting started</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
                  Components, Component communication, Behind the scenes, Forms, HTTP, Routing, Animations
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
                    Intermediate
                  </Typography>
                  <Typography>More core features</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
                  Vuex, Authentication, Deployment & Optimizations, Composition API, Reusing code
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
                    Advanced
                  </Typography>
                  <Typography>Diving deeper</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
                  Course projects, Demos, Assignments, Challenges
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
                    Practice
                  </Typography>
                  <Typography>Demos & challenges</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid marginRight="1rem" item xs={2}>
            <Card raised={true} sx={{ maxWidth: 400 }}>
              <CardHeader align="center" title="Certificate of completion" />
              <CardMedia component="img" height="250" image={VueLogo} />
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
                  <LinearProgress value="15" variant="determinate" />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">{`15%`}</Typography>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Vue;
