import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  FloatingLabel,
  InputGroup
} from "react-bootstrap";
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
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Hidden } from "@material-ui/core";
import banner from "../../img/banner.jpg";

export default function About() {
  return (
    <>
      <Card
   sx={{ maxWidth: 825,minHeight:380,borderRadius:"20px",marginLeft:"auto",marginRight:"auto"}} elevation={15}
     
      >
        <Container>
          <br />
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            textAlign="center"
          >
            <b>About Us</b>
          </Typography>
          <br />
         
            <Row>
              <Col>
              <Typography
            gutterBottom
            variant="p"
            component="p"
            textAlign="justify"
          >
            We Are a family run business with over 35 years experience designing, building / renovating and managing properties in Spain.
            <ul>
                <li>
                    Why Chose Us
                </li>
                <li>
                    Why Chose Us
                </li>
                <li>
                    Why Chose Us
                </li>
            </ul>
          </Typography>
               
              </Col>
              <Col>
              <Image src={banner} />
              </Col>
            </Row>
    
        </Container>
   
      </Card>
    </>
  );
}
