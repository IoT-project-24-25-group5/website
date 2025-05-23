import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useSelector} from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function AnomaliesTab() {

  const anomalies = useSelector((state: {serverData: {anomalies: [any]}}) => state.serverData.anomalies)

  return (
    <div style={{margin: 15}}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline /> {/* This normalizes styling for dark mode */}
      <h1>Anomalies</h1>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              anomalies.slice().reverse().map((anomaly: { message: string; timestamp: string }) => (
                <TableRow key={anomaly.timestamp}>
                  <TableCell>{anomaly.message}</TableCell>
                  <TableCell>{anomaly.timestamp}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      </ThemeProvider>

    </div>
  )
}