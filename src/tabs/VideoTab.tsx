import {useEffect} from "react";
import {initRTC, connected} from "./rtcpc.ts";
import socket from "../websocket_setup.ts";

let pc: RTCPeerConnection;


export default function VideoTab() {


  useEffect(() => {
    pc = initRTC();
    pc.addTransceiver("video", { direction: "recvonly" });
    pc.createOffer()
      .then(offer => pc.setLocalDescription(offer))
      .then(() => {
        socket.send(JSON.stringify(pc.localDescription));
        console.log("Offer sent");
        console.log("turn")
      })
    setTimeout(() => {
      if (!connected) {
        console.log("No connection established");
        socket.send("{\"type\": \"frameSub\"}");
      }
    }, 30000);

    return () => {
      pc.close();
      socket.send("{\"type\": \"frameUnsub\"}");
    }
  }, [])


  return (
    <div>
      <h1>Video</h1>
      <video id="video" autoPlay playsInline controls></video>
      <canvas id="videoCanvas" width="640" height="480"></canvas>
      {/*<p>Video tab content goes here.</p>*/}
    </div>
  )
}