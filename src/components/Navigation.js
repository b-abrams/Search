import React from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";
import Hat from "../img/navigation/hat.png";
import "../css/components/navigation.css";

// import {Navbar} from "react-bootstrap";
// const Navigation1 = props => {
//   return (
//     <div className="Navigation">
//       <img id="safariHat" src={Hat} alt="hunter" width="100" height="100" />
//       Job Hunter
//       <Button id="loginButton" variant="success">
//         Login
//       </Button>
//     </div>
//   );
// };

// const Navigation2 = props => {
//   return (
//     <Navbar className="Navigation">
//       <Navbar.Brand id="hatLogo">
//         <img
//           id="safariHat"
//           src={Hat}
//           alt="hunter"
//           className="d-inline-block align-top"
//         />
//         <span id="name">{" Job Hunter"}</span>
//       </Navbar.Brand>
//       <Button id="loginButton" variant="success">
//         Login
//       </Button>
//     </Navbar>
//   );
// };

const Navigation = props => {
  return (
    <Grid className="Navigation">
      <Row>
        <Col lg={6}>
          <img id="safariHat" src={Hat} alt="hunter" />
          <span id="titleSpan">Job Hunter</span>
        </Col>
        <Col lg={6} align="center">
          <Button id="loginButton">Login</Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default Navigation;