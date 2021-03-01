import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./ShowcaseWork.css";
import Project from "../Project/Project";
import projects from "../Utils/project_data";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="showcasework__appbar__tabpanel"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ShowcaseWork() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="showcasework">
      <AppBar className="showcasework__appbar" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {projects.map((item, index) => {
            return (
              <Tab label={projects[index].title} {...a11yProps({ index })} />
            );
          })}
        </Tabs>
      </AppBar>
      {projects.map((item, index) => {
        return (
          <TabPanel value={value} index={index}>
            <Project index={index} />
          </TabPanel>
        );
      })}
    </div>
  );
}
