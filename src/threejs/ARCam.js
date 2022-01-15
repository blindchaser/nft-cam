import React, { Component } from "react";
import initScene from "./scene";
import "./scene.scss";
import 'regenerator-runtime/runtime';

class ARCam extends Component {
  componentDidMount = async () => {
    initScene();
  };

  render() {
    return (
      <div className="container">
        <canvas className="output_canvas"></canvas>
        <canvas
          id="threeDCanvas"
        ></canvas>
        <video
          id="webcam_video"
          className="input_video"
        ></video>
      </div>
    );
  }
}

export default ARCam;
