import store, {setConnected, setNewState} from './state/store.ts';
import {setAnswer} from "./tabs/rtcpc.ts";

const socket = new WebSocket('wss://iot.philippevoet.dev')

socket.onmessage = (event) => {
  console.log('Message from server ', event.data);
  const data = JSON.parse(event.data);
  if (data['type'] != undefined && data['type'] == 'state') {
    store.dispatch(setNewState(data))
  }
  else if (data['type'] != undefined && data['type'] == 'answer') {
    setAnswer(data['sdp'])
  }
  else if(data['type'] != undefined && data['type'] == 'frame') {
    let videoCanvas = document.getElementById('videoCanvas') as HTMLCanvasElement;
    if (videoCanvas) {
      const ctx = videoCanvas.getContext('2d');
      const img = new Image();
      img.src = 'data:image/jpeg;base64,' + data['frame'];
      img.onload = () => {
        ctx?.drawImage(img, 0, 0, videoCanvas.width, videoCanvas.height);
      }
    }
  }
}

socket.onopen = () => {
    store.dispatch(setConnected(true))
  console.log('WebSocket connection established');
}

socket.onclose = () => {
    store.dispatch(setConnected(false))
  console.log('WebSocket connection closed');
}
export default socket;



