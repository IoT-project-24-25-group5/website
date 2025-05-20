import {useSelector} from "react-redux";
import {Grid} from "@mui/material";
import SensorWidget from "./SensorWidget.tsx";


export default function SensorDataTab() {

  const sensorData = useSelector((state: {serverData: {sensors: [any]}}) => state.serverData.sensors)

  const ff = () => {
    // console.log(sensorData)
    return <div></div>
  }


  return (
    <div style={{margin: 15}}>
      <h1>Sensor Data</h1>
      {ff()}
      <Grid container spacing={2} sx={{padding: '10px', width: '80vw'}}>
      {
        sensorData.map((sensor: { Id: string; Value: string }) => (
          <Grid key={sensor.Id} size={{xs: 3}}>
            <SensorWidget  value={sensor.Value} name={sensor.Id}/>
          </Grid>
          // <div key={sensor.Id}>
          //   <h2>{sensor.Id}</h2>
          //   <p>{sensor.Value}</p>
          // </div>
        ))
      }
      </Grid>
    </div>
  )
}
