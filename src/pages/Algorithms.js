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
import AlgorLogo from "../assets/algor-logo.jpg";

const Algorithms = () => {
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
          <Grid item xs={2}>
            <Typography gutterBottom variant="h5" align="center">
              Main goals
            </Typography>
            <Typography variant="body1" align="justify" paragraph={true}>
              <a target="__blank" href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/">
                JavaScript Algorithms and Data Structures
              </a>
              <br />
              &emsp;In this course I will learn how to analyze code’s time and space complexity using Big O notation.
              <br /> &emsp;Will cover the ins and outs of Recursion. <br />
              Learn a 5-step approach to solving any difficult coding problem. <br />
              &emsp; Cover common programming patterns and popular searching algorithms.
              <br /> Implement 6 different sorting algorithms: Bubble, Selection, Insertion, Quick, Merge, and Radix
              Sort. <br /> &emsp;Then, implement data structures from scratch, including linked lists, trees, heaps,
              hash tables, and graphs. Learn how to traverse trees and graphs, and cover Dijkstra's Shortest Path
              Algorithm. The course also includes an entire section devoted to Dynamic Programming.
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
                    <li>Problem solving algorithm</li>
                    <li>Big O notation</li>
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
                    Section 1
                  </Typography>
                  <Typography>Recursion & searching algorithms</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
                  Bubble, Selection, Insertion, Quick, Merge, and Radix Sort
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
                    Section 2
                  </Typography>
                  <Typography>Sorting algorithms</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
                  Linked lists, trees, heaps, hash tables
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
                    Section 3
                  </Typography>
                  <Typography>Data structures</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
                  Dijkstra's Shortest Path Algorithm, Dynamic Programming
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
                    Section 4
                  </Typography>
                  <Typography>Graphs</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid marginRight="1rem" item xs={2}>
            <Card raised={true} sx={{ maxWidth: 400 }}>
              <CardHeader align="center" title="Certificate of completion" />
              <CardMedia component="img" height="250" image={AlgorLogo} />
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
                  <LinearProgress value="0" variant="determinate" />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">{`0%`}</Typography>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Algorithms;
