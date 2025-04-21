
let state: {} = {
  connected: false,
  currentTab: 'home',
  location: {longtitude: 0, latitude: 0},
}

let _subscribers: Function[] = []


export function subscribe(callback: (curr_state:{}) => void) {
  _subscribers.push(callback)
}

async function notifySubscribers() {
  _subscribers.forEach((callback) => callback(state))
}

export function unsubscribe(callback: Function) {
  _subscribers = _subscribers.filter((cb) => cb !== callback)
}

export function setState(variablee: any, value: any) {
  switch (variablee) {
    case 'connected':
      state = {...state, connected: value}
      break
    case 'currentTab':
      state = {...state, currentTab: value}
      break
    default:
      return
  }
  notifySubscribers()
  // state = {...state, variablee: value}
}

export default function getState() {
  return state
}

