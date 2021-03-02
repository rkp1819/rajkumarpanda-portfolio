import React, { useEffect, useState } from "react";
import "./Project.css";
import projects from "../Utils/project_data";
import { Link, Paper } from "@material-ui/core";
import { Redirect, useHistory } from "react-router-dom";
function Project({ index }) {
  let history = useHistory();

  return (
    <div className="project">
      <Paper square={true} elevation={5} className="project__title">
        {projects[index].title}
      </Paper>
      <Paper elevation={3} className="project__desc">
        {projects[index].description}
      </Paper>
      <div className="project__techStack">
        {projects[index].techStack.map((item, index) => {
          return (
            <Paper className={"project__techStack__item"} elevation={10}>
              {item}
            </Paper>
          );
        })}
      </div>
      <Paper
        elevation={5}
        className="project__liveDemo"
        onClick={() => {
          window.location.href = projects[index].liveOn;
        }}
      >
        {projects[index].liveOn}
      </Paper>
    </div>
  );
}

export default Project;
