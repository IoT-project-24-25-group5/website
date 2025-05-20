import {Divider, TextField} from "@mui/material";
import {useState} from "react";
import {Button} from "@mui/material";
import socket from "../websocket_setup.ts";


export default function WebsocketTest() {

  const [textvalue, setText] = useState("");

  return (
    <div style={{margin: 20, display: 'flex', flexDirection: 'column'}}>
      <TextField label="websocket input" variant="outlined" value={textvalue} onChange={(e) => setText(e.target.value)}
                 multiline rows={10}
                 InputProps={{
                   sx: {
                     color: 'white',
                     '& .MuiOutlinedInput-notchedOutline': {
                       borderColor: 'white',
                     },
                     '&:hover .MuiOutlinedInput-notchedOutline': {
                       borderColor: 'white',
                     },
                     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                       borderColor: 'white',
                     },
                   },
                 }}
                 InputLabelProps={{
                   sx: {
                     color: 'white',
                     '&.Mui-focused': {
                       color: 'white',
                     },
                   },
                 }}
                 sx={{minWidth: '300px', marginBottom: '10px', color: 'white', minHeight: '200px', width: '100%'}}
      >

      </TextField>
      <Button variant="contained" onClick={() => {
        socket.send(textvalue);
        setText("");
      }}>Submit</Button>
      <Divider orientation="horizontal"/>
      <div style={{height: 30}}>

      </div>
      Examples:
      <div style={{margin: 5}}>
        <Button variant="outlined" onClick={() => setText("pytrack")}>Become pytrack</Button>
        pytrack
      </div>
      <div style={{margin: 5}}>
        <Button variant="outlined" onClick={() => setText("devBoard")}>Become devBoard</Button>
        devBoard
      </div>
      <div style={{margin: 5}}>
        <Button variant="outlined" onClick={() => setText("getstate")}> get current state</Button>
        getstate
      </div>
      <div style={{margin: 5}}>
        <Button variant="outlined"
                onClick={() => setText('{"type": "location", "longitude": 4.42, "latitude": 51.184}')}> set new
          location</Button>
        {
          '{"type": "location", "longitude": 4.42, "latitude": 51.184}'
        }
      </div>
      <div style={{margin: 5}}>
        <Button variant="outlined"
                onClick={() => setText('{"type": "sensor", "name": "sensor1", "value": "10"}')}> set new sensor
          value</Button>
        {
          '{"type": "sensor", "name": "sensor1", "value": "10"}'
        }
      </div>
      <div style={{margin: 5}}>
        <Button variant="outlined"
                onClick={() => setText('{"type": "locationrange", "value": 50}')}> set location range</Button>
        {
          '{"type": "locationrange", "value": 50}'
        }
      </div>
      <div style={{margin: 5}}>
        <Button variant="outlined"
                onClick={() => setText('{"type": "locationcenter", "longitude": 4.42, "latitude": 51.184}')}> set
          new center
          location</Button>
        {
          '{"type": "locationcenter", "longitude": 4.42, "latitude": 51.184}'
        }
      </div>


    </div>
  )
}