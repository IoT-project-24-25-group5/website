import socket from "../websocket_setup.ts";

let pc : RTCPeerConnection;

export let connected = false;

export function initRTC(): RTCPeerConnection {
  if (pc) {
    console.log('Peer connection already exists');
    pc.close();
  }
  pc = new RTCPeerConnection({
    iceServers: [{urls: 'stun:stun.l.google.com:19302'}],
  });

  pc.onicecandidate = ({ candidate }) => {
    console.log(candidate);
    if (candidate?.candidate.includes("relay")) {
      console.log("TURN is in use 🚨");
      console.log(candidate.candidate);
    }
  };

  pc.ontrack = (event) => {
    console.log('Track event received');
    const video = document.getElementById('video') as HTMLVideoElement;
    if (!video) {
      console.error('Video element not found');
      return;
    }
    video.srcObject = event.streams[0];
  }

  pc.oniceconnectionstatechange = () => {
    console.log('ICE connection state changed:', pc.iceConnectionState);
    if (pc.iceConnectionState === 'connected') {
      connected = true;
    }
    if (pc.iceConnectionState === 'disconnected') {
      connected = false;
      console.log('Disconnected from peer');
      pc.close();
      let videoCanvas = document.getElementById('videoCanvas') as HTMLCanvasElement;
      if (videoCanvas) {
        connected = true;
        let video = document.getElementById('video') as HTMLVideoElement;
        video.hidden = true;
        socket.send("{\"type\": \"frameSub\"}");
      }
    }
  }

  return pc;
}


export function setAnswer(answer: string) {
  if (pc) {
    pc.setRemoteDescription(new RTCSessionDescription({
      type: 'answer',
      sdp: answer
    }));
  } else {
    console.error('Peer connection not initialized');
  }
}