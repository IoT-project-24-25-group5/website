import store, {setConnected, setNewState} from './state/store.ts';

const socket = new WebSocket('wss://iot.philippevoet.dev')

socket.onmessage = (event) => {
  console.log('Message from server ', event.data);
  const data = JSON.parse(event.data);
  store.dispatch(setNewState(data))
  // if (data.type == 'location') {
  //   store.dispatch(setLocation({longitude: data.longtitude, latitude: data.latitude}))
  // }
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



