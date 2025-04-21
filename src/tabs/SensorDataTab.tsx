import {useSelector} from "react-redux";


export default function SensorDataTab() {

  const sensorData = useSelector((state: {serverData: {sensors: [any]}}) => state.serverData.sensors)


  return (
    <div>
      <h1>Sensor Data</h1>
      {
        sensorData.map((sensor: { name: string; value: string }) => (
          <div key={sensor.name}>
            <h2>{sensor.name}</h2>
            <p>{sensor.value}</p>
          </div>
        ))
      }
    </div>
  )
}