import React, { Component } from "react";
import { Container, Box, Tabs, Tab } from "@mui/material";
import LearningResources from "../components/resourcesContent/LearningResources";
import VSCodeExtensions from "../components/resourcesContent/VSCodeExtensions";
import DeveloperResources from "../components/resourcesContent/DeveloperResources";

export default class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <DeveloperResources />,
    };
  }

  updateDevResources = () => {
    this.setState({ content: <DeveloperResources /> });
  };

  updateLearningResources = () => {
    this.setState({ content: <LearningResources /> });
  };

  updateVSCodeExtensions = () => {
    this.setState({ content: <VSCodeExtensions /> });
  };

  render() {
    return (
      <Container sx={{ display: "grid", alignContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginBottom: 3,
          }}
        >
          <Tabs
            style={{
              background: "#c5cae9",
              text: "white",
              padding: 5,
              borderRadius: 25,
              boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
            }}
          >
            <Tab
              value="one"
              label="Developer Resources"
              onClick={this.updateDevResources}
            />
            <Tab
              value="two"
              label="Learning Resources"
              onClick={this.updateLearningResources}
            />
            <Tab
              value="three"
              label="VS Code Extensions"
              onClick={this.updateVSCodeExtensions}
            />
          </Tabs>
        </Box>
        <Container>
          <Box>
            <div> {this.state.content}</div>
          </Box>
        </Container>
      </Container>
    );
  }
}
