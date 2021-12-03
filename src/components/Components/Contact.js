import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Hidden } from "@material-ui/core";
import "./Input.css";

export default function AppIntro() {
  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#74CEE1"
          fill-opacity="1"
          d="M0,224L1440,96L1440,320L0,320Z"
        ></path>
      </svg> */}
      <div
        style={{
          backgroundColor: "#74CEE1",
          // height: "85vh",
          // width: "98.7vw",
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
            <b>Get in touch </b> - Whatever your needs, we have someone who can
            help
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            textAlign="center"
          >
            <b>Message:</b>
          </Typography>
          <br />
          <Form>
            <Row>
              <Col>
                <Form.Label className="label">Name :</Form.Label>
                <div className="inputWithIcon">
                  <input type="text" placeholder="Your name"  />
                  <i className="fa fa-user fa-lg fa-fw" aria-hidden="true" />
                </div>
                <Form.Label className="label">Email Address :</Form.Label>
                <div className="inputWithIcon">
                  <input type="text" placeholder="Email" />
                  <i
                    className="fa fa-envelope fa-lg fa-fw"
                    aria-hidden="true"
                  />
                </div>
                <Form.Label className="label">Phone Number :</Form.Label>
                <div className="inputWithIcon">
                  <input type="text" placeholder="Phone Number" />
                  <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true" />
                </div>
                <Form.Label className="label">Address :</Form.Label>
                <div className="inputWithIcon">
                  <input type="text" placeholder="Address" />
                  <i className="fa fa-home fa-lg fa-fw" aria-hidden="true" />
                </div>

              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={13} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
}
