import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import card1 from "../../img/card1.png";
import card2 from "../../img/card2.png";
import box from "../../img/box.PNG";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function MediaCard({ img, title, des }) {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 325,
          minHeight: 280,
          borderRadius: "20px",
          textAlign: "center",
          alignItems: "center",
        }}
        elevation={0}
      >
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default function Services() {
  return (
    <div>
      <br/>
      <br/>
      <Container style={{ textAlign: "cetner" }}>
        <Typography gutterBottom variant="h5" component="h1" textAlign="center">
          <b>Our commitment</b> - Providing local expertise and quality services
          so you can spend more time enjoying your villa. Don’t just take our
          word for it, look what our clients have to say about us.
        </Typography>
        <br />
        <Row>
          <Col  sm={true} sm>
            <MediaCard
              img={box}
              title="Service"
              des="Short description bla bla bla bla bal bla bla bla bla bla bla bla bla bla bla bla bla bla read more..."
            />
          </Col>
          <Col  sm={true} sm>
            <MediaCard
              img={box}
              title="Service"
              des="Short description bla bla bla bla bal bla bla bla bla bla bla bla bla bla bla bla bla bla read more..."
            />
            <Stack spacing={2}>
              {/* <Pagination count={10} variant="outlined" /> */}
              <Pagination count={10} variant="outlined" color="primary" />
              {/* <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled /> */}
            </Stack>
          </Col>
          <Col sm={true} sm>
            <MediaCard
              img={box}
              title="Service"
              des="Short description bla bla bla bla bal bla bla bla bla bla bla bla bla bla bla bla bla bla read more..."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
