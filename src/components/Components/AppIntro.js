import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import mobile from "../../img/mobile.png";
import apple from "../../img/apple.png";
import google from "../../img/google.png";
import circle from "../../img/circle.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Hidden } from "@material-ui/core";

function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {/* 9:30 am */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: "secondary.main" }}  />
          {/* <TimelineDot> */}
          {/* <FastfoodIcon /> */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "none",
              outline: "none",
              color: "#094C72",
              textAlign: "center",
              alignItems:"center",
              justifyContent:"center",
              float:"top",
              fontSize:"32pt",
            }}
          >
            <p style={{marginTop:"5px"}}>1</p>
          </div>
          {/* </TimelineDot> */}
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Download the app
          </Typography>
          <Typography>
            Download the app from the apple App Store or Google Play Store
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          {/* 10:00 am */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          {/* <TimelineDot color="primary"> */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "none",
              outline: "none",
              color: "#094C72",
              textAlign: "center",
              alignItems:"center",
              justifyContent:"center",
              float:"top",
              fontSize:"32pt",
            }}
          >
            <p style={{marginTop:"5px"}}>2</p>
          </div>
          {/* </TimelineDot> */}
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Select the services
          </Typography>
          <Typography>
            Select the services you would like for your villa or property (We
            even have an option for emergencies)
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          {/* <TimelineDot color="primary" variant="outlined"> */}
          {/* <HotelIcon /> */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "none",
              outline: "none",
              color: "#094C72",
              textAlign: "center",
              alignItems:"center",
              justifyContent:"center",
              float:"top",
              fontSize:"32pt",
            }}
          >
            <p style={{marginTop:"5px"}}>3</p>
          </div>
          {/* </TimelineDot> */}
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Begin to manage
          </Typography>
          <Typography>
            Begin to manage and receive progress updates on your services
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {/*       
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <div style={{width:"60px",height:"60px",borderRadius:"50%",backgroundColor:"white",border:"none",outline:"none"}} />
  
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
          Download the app
          </Typography>
          <Typography>Download the app from the apple App Store or Google Play Store</Typography>
        </TimelineContent>
      </TimelineItem>
   */}
    </Timeline>
  );
}

export default function AppIntro() {
  return (
    <>
      <Hidden only="xs">
        <div
          style={{
            backgroundColor: "#74CEE1",
            height: "85vh",
            width: "98.7vw",
            color: "#fff",
          }}
        >
          <Container>
            <br />
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              textAlign="center"
            >
              <b> Our app </b>- The quick and easy way to request a service and
              get progress updates
            </Typography>
            <br />
            <Row>
              <Col>
                <Image src={mobile} style={{ height: "24em", width: "23em" }} />
                <br />
                <Image src={google} />
                <Image src={apple} />
              </Col>
              {/* <Hidden only="xs"> */}

              <Col>
                <CustomizedTimeline />
              </Col>
              {/* </Hidden> */}
            </Row>
          </Container>

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#74CEE1" fill-opacity="1" d="M0,224L1440,96L1440,0L0,0Z"></path>
</svg> */}
        </div>
      </Hidden>
      <Hidden only="lg">
        <div
          style={{
            backgroundColor: "#74CEE1",
            color: "#fff",
          }}
        >
          <Container>
            <br />
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              textAlign="center"
            >
              <b> Our app </b>- The quick and easy way to request a service and
              get progress updates
            </Typography>
            <br />
            <Row>
              <Col sm={8}>
                <Image src={mobile} style={{ height: "40vh" }} />
                <br />
                <Image src={google} />
                <Image src={apple} />
              </Col>
              {/* <Hidden only="xs"> */}

              <Col sm={4}>
                <CustomizedTimeline />
              </Col>
              {/* </Hidden> */}
            </Row>
          </Container>
        </div>
      </Hidden>
    </>
  );
}
