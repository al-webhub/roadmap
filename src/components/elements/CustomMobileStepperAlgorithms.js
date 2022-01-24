import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import SortByAlphaOutlinedIcon from "@mui/icons-material/SortByAlphaOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import { Card, CardMedia, CardContent, CardActions, CardHeader } from "@mui/material";
import AlgorLogo from "../../assets/algor-logo.jpg";
import LinearProgress from "@mui/material/LinearProgress";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const data = [
  {
    slide: (
      <Grid item xs={12}>
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
          <br /> Implement 6 different sorting algorithms: Bubble, Selection, Insertion, Quick, Merge, and Radix Sort.{" "}
          <br /> &emsp;Then, implement data structures from scratch, including linked lists, trees, heaps, hash tables,
          and graphs. Learn how to traverse trees and graphs, and cover Dijkstra's Shortest Path Algorithm. The course
          also includes an entire section devoted to Dynamic Programming.
        </Typography>
      </Grid>
    ),
  },
  {
    slide: (
      <Grid xs={12}>
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
    ),
  },
  {
    slide: (
      <Grid item xs={12}>
        <Card raised={true} sx={{ maxWidth: 400 }}>
          <CardHeader align="center" title="Certificate of completion" />
          <CardMedia component="img" height="250" image={AlgorLogo} />
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
    ),
  },
];

function CustomMobileStepperAlgorithms() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box
      zIndex={10000}
      position="absolute"
      bottom={0}
      direction="row"
      justifyContent="center"
      sx={{ maxWidth: 400, flexGrow: 1 }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "transparent",
        }}
      >
        <Typography>{data[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.label}>{Math.abs(activeStep - index) <= 2 ? step.slide : null}</div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="text"
        sx={{
          bgcolor: "transparent",
          marginTop: "5px",
        }}
        style={{ color: "white" }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button style={{ color: "white" }} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button style={{ color: "white" }} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default CustomMobileStepperAlgorithms;
