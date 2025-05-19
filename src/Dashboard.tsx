// import {Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, Typography} from "@mui/joy";
import {useSelector} from "react-redux";
import DashDrawer from "./DashDrawer.tsx";

// @ts-ignore
import MapTab from "./tabs/MapTab.jsx";
import SensorDataTab from "./tabs/SensorDataTab.tsx";
import WebsocketTest from "./tabs/WebsocketTest.tsx";
// import MailIcon from '@mui/icons-material/Mail';
// import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function Dashboard() {

  const state = useSelector((state: {currentTab:string, connected: boolean}) => state)

  return(
    <div style={{display: 'flex'}}>
      {/*<CssBaseline />*/}
      {/*<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>*/}
      {/*  <Toolbar>*/}
      {/*    <Typography variant="h6" noWrap component="div">*/}
      {/*      Clipped drawer*/}
      {/*    </Typography>*/}
      {/*  </Toolbar>*/}
      {/*</AppBar>*/}

        <DashDrawer/>
      {
        (() => {
          switch (state.currentTab) {
            case 'home':
              return (<>{state.connected? 'Connected' : 'Disconnected'}</>)
            case 'Location':
              return (<MapTab/>)
            case 'Video':
              return (<></>)
            case 'Devices':
              return (<></>)
            case 'Sensors':
              return (<SensorDataTab/>)
            case 'WebsocketTest':
              return (<WebsocketTest/>)
          }
        })()
      }
    </div>
  )
}