import { YouTube, YoutubeSearchedForRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { height, width } from "@mui/system";
import React from "react";
import {
  Box,
  Github,
  Grid,
  Instagram,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";

const FooterComponent = () => {
  return (
    <div
      style={{
        height: "17vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // margin:"2rem",
        // gap: "1.5rem",
        padding:"7rem",

        flexDirection: "column",
        // color: "#0e0968 !important",
        backgroundColor:" hsla(210, 14%, 28%, 0.3)"
      }}
    >
      <div
        style={{
          height: "10vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin:"2rem",
          gap: "1.5rem",
          // flexDirection: "column",
          color: "#0e0968 !important",
        }}
      >
        <Linkedin fontSize={"2rem"} color="#05014A"/>
        <Instagram fontSize={"2rem"} color="#05014A" />
        <Youtube fontSize={"2rem"} color="#05014A"/>
        <Github fontSize={"2rem"} color="#05014A"/>
      </div>
      <div style={{color:"#05014A"}}>bluewonk @2024</div>
    </div>
    //     <Box sx={{width:"100%",height:"9vh",backgroundColor:"black"}}>
    //       <Typography>
    //
    // asda
    //       </Typography>
    //       <Instagram />
    //       <YouTube />
    //       <Github />
    //       askdjfhksdjfhdskjafh
    //     </Box>
  );
};

export default FooterComponent;
