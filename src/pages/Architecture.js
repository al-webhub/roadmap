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


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#000",
}));

const Headline = styled(Paper)(({ theme }) => ({
  ...theme.typography.h6,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#000",
}));

const Architecture = () => {
  return (
    <>
      <Delay />
      <Box marginTop={`1rem`} position="absolute" width={`100vw`} sx={{ flexGrow: 1 }}>
        <Grid container direction="row" justifyContent="flex-end" alignItems="" spacing={1}>
          <Grid marginRight="1rem" item xs={2}>
            <Card raised={true} sx={{ maxWidth: 400 }}>
              <CardHeader align="center" title="" />
              <CardMedia
                style={{
                  objectFit: "contain",
                }}
                component="img"
                height="350"
                image="https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg"
              />
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
          <Grid marginRight="1rem" item xs={2}>
            <Card raised={true} sx={{ maxWidth: 400 }}>
              <CardHeader align="center" title="" />
              <CardMedia
                style={{
                  objectFit: "contain",
                }}
                component="img"
                height="350"
                image="https://images-na.ssl-images-amazon.com/images/I/41z8YYwOblL._SX348_BO1,204,203,200_.jpg"
              />
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
          <Grid marginRight="1rem" item xs={2}>
            <Card raised={true} sx={{ maxWidth: 400 }}>
              <CardHeader align="center" title="" />
              <CardMedia
                style={{
                  objectFit: "contain",
                }}
                component="img"
                height="350"
                image="https://images-na.ssl-images-amazon.com/images/I/51dxkfagmwL._SX258_BO1,204,203,200_.jpg"
              />
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
          <Grid marginRight="1rem" item xs={2}>
            <Card raised={true} sx={{ maxWidth: 400 }}>
              <CardHeader align="center" title="" />
              <CardMedia
                style={{
                  objectFit: "contain",
                }}
                component="img"
                height="350"
                image="https://images-na.ssl-images-amazon.com/images/I/51uO-K+V5dL._SX381_BO1,204,203,200_.jpg"
              />
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

export default Architecture;
