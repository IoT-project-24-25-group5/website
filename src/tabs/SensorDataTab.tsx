import {useSelector} from "react-redux";


export default function SensorDataTab() {

  const sensorData = useSelector((state: {serverData: {sensors: [any]}}) => state.serverData.sensors)


  return (
    <div>
      <h1>Sensor Data</h1>
      {
        sensorData.map((sensor: { Id: string; Value: string }) => (
          <div key={sensor.Id}>
            <h2>{sensor.Id}</h2>
            <p>{sensor.Value}</p>
          </div>
        ))
      }
    </div>
  )
}