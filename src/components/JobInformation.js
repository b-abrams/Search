import React from "react";
import { Button, Spinner } from "react-bootstrap";

const styleNoJobRender = {
  textAlign: "center",
  marginTop: "25%",
  padding: 0
};
const styleJobRender = { textAlign: "center", padding: 0 };
const styleDescriptionRender = { textAlign: "left", whiteSpace: "pre-wrap" };

const JobInformation = props => {
  if (props.loading) {
    return (
      <div style={styleNoJobRender}>
        {"Searching for Jobs. It shouldn't take long"}
        <br />
        <br />
        <Spinner
          animation="border"
          variant="success"
          style={{ width: "10vh", height: "10vh" }}
        />
      </div>
    );
  }
  if (props.job === null) {
    return <div style={styleNoJobRender}>{"Please Click on a Job"}</div>;
  } else {
    return (
      <div style={styleJobRender}>
        <br />
        <br />
        {props.job.jobTitle} <br />
        {props.job.company} <br />
        {props.job.jobType} <br />
        {"% Resume Match: " + Math.random() * 101}
        <br />
        <br />
        <Button
          variant={props.job.source === "Indeed" ? "primary" : "success"}
          href={props.job.link}
          target="_blank"
        >
          {"Apply Through " + props.job.source}
        </Button>
        <br />
        <br />
        <div style={styleDescriptionRender}>
          {props.job.jobDescription}
        </div>{" "}
        <br />
      </div>
    );
  }
};

export default JobInformation;
