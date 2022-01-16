import React, { Component, useContext, useEffect, useState } from 'react'
import initScene from './scene'
import './scene.scss'
import 'regenerator-runtime/runtime'
import { UserContext } from '../LoginContext'

// class ARCam extends Component {
//   componentDidMount = async () => {
//     initScene()
//   }

//   render() {
//     const [user] = useContext(UserContext)
//     return (
//       <div className="container">
//         <canvas className="output_canvas"></canvas>
//         <canvas id="threeDCanvas"></canvas>
//         <video id="webcam_video" className="input_video"></video>
//       </div>
//     )
//   }
// }

// export default ARCam

export default function ARCam() {
  useEffect(() => {
    initScene()
  }, [])
  return (
    <div className="container">
      <canvas className="output_canvas"></canvas>
      <canvas id="threeDCanvas"></canvas>
      <video id="webcam_video" className="input_video"></video>
    </div>
  )
}
