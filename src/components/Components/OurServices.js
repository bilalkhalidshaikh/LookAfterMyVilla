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
import card3 from "../../img/card3.png";
import { Hidden} from "@material-ui/core"




function MediaCard({ img, title, des }) {
  return (
    <div>
      <Card sx={{ maxWidth: 325,minHeight:280,borderRadius:"20px",textAlign:"center",alignItems:'center' }} elevation={15}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           { title}
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

export default function OurServices() {
  return (
    <div>
     <Hidden only="xs">
     <Container style={{textAlign:"cetner"}}>
        <Typography gutterBottom variant="h5" component="h1" textAlign="center">
           <b> Our services</b>
          - Design | Build | Management
        </Typography>
        <br/>
        <Row>
          <Col sm sm={true}>
            <MediaCard img={card1} title="Property management" des="Everything you need to keep you villa looking great" />
          </Col>
          <Col sm sm={true}>
            <MediaCard img={card2} title="Construction" des="Our team are experts in new builds and renovations" />
          </Col>
          <Col sm sm={true}>
            <MediaCard img={card3} title="Architechture & Design" des=" Here for all your architechture needs" />
          </Col>
        </Row>
      </Container>
     </Hidden>
     <Hidden only="lg">
     <Container style={{textAlign:"cetner"}}>
        <Typography gutterBottom variant="h5" component="h1" textAlign="center">
           <b> Our services</b>
          - Design | Build | Management
        </Typography>
        <br/>
        {/* <Row> */}
          {/* <Col sm sm={true}> */}
            <MediaCard img={card1} title="Property management" des="Everything you need to keep you villa looking great" />
          {/* </Col> */}
          <br/>
          {/* <Col sm sm={true}> */}
            <MediaCard img={card2} title="Construction" des="Our team are experts in new builds and renovations" />
            <br/>
          {/* </Col> */}
          {/* <Col sm sm={true}> */}
            <MediaCard img={card3} title="Architechture & Design" des=" Here for all your architechture needs" />
          {/* </Col> */}
        {/* </Row> */}
      </Container>
     </Hidden>
    </div>
  );
}
