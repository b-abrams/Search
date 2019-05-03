import React, { Component } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

import ListingThumb from "../components/ListingThumb";
import JobInformation from "../components/JobInformation";

import "../css/views/listings.css";
export default class Lisitings extends Component {
  constructor(props) {
    super(props);

    this.state = { current: null };

    this.createThumbs = this.createThumbs.bind(this);
  }

  createThumbs() {
    return this.props.jobs.map(job => (
      <Button
        variant="success"
        className="listingThumbButton"
        onClick={event => this.setState({ current: job })}
      >
        <ListingThumb job={job} />
      </Button>
    ));
  }

  render() {
    return (
      <Row className="lisitngs">
        <Col id="lsitingThumbCol" className="listingsCol" lg={4}>
          {this.createThumbs()}
        </Col>
        <Col id="jobInfo" className="listingsCol" lg={8}>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} id="jobInfoInnerCol">
              <JobInformation job={this.state.current} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
