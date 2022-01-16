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
  const [user] = useContext(UserContext)
  useEffect(() => {
    let assetUrl = ''
    if (user.nfts) {
      for (let i = 0; i < user.nfts.length; i++) {
        const info = user.nfts[i]
        if (info.animation_url && info.selected === true) {
          assetUrl = info.animation_url
          console.log(assetUrl, 'is selected')
        }
      }
    } else {
      console.log('user.nfts is undefined')
    }
    initScene(assetUrl)
  }, [])
  return (
    <div className="container">
      <canvas className="output_canvas"></canvas>
      <canvas id="threeDCanvas"></canvas>
      <video id="webcam_video" className="input_video"></video>
    </div>
  )
}
