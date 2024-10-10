/* eslint-disable no-unused-vars */
import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";
import trophyImg from "../../assets/trophy.png";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  position: "absolute",
  // transform:"rotate(180deg)",
  // width:"200px",
  height: 170,
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  position: "absolute",
  // width:60,
  height: 98,
});
const Achievement = () => {
  return (
    <Card sx={{ position: "relative",
    bgcolor:"#333945",
    color:"white"

     }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: "0.25px" }}>
          shop with Nexra
        </Typography>
        <Typography variant="body2">Congratulations 🤩 </Typography>
        <Typography variant="h5" sx={{my:2.5}}>52.2k</Typography>
        <Button size="small" variant="contained">
          View More
        </Button>
        <TriangleImg></TriangleImg>
        <TrophyImg src={trophyImg}></TrophyImg>
      </CardContent>
    </Card>
  );
};

export default Achievement;
