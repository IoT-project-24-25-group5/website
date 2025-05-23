import {createTheme, List, ListItem, ListItemButton, ListItemText, ThemeProvider} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTab} from "./state/store.ts";


const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!

      },
    },
  },
});

const drawerWidth = '15vw';

export default function DashDrawer() {

  const dispatch = useDispatch()

  const tab = useSelector((state: {currentTab: string}) => state.currentTab);

  return (
    <div style={{width: drawerWidth, height: '100vh', display: 'flex', alignItems: "flex-start", backgroundColor: "#1d1d1d"}}>
      {/*<Toolbar />*/}

        <List sx={{width: '100%'}}>
          {['Location', 'Video', 'Sensors', 'Anomalies', 'WebsocketTest'].map((text) => (
            <ListItem key={text} sx={{width: '100%'}}>
              <ThemeProvider theme={theme}>
              <ListItemButton sx={{ borderRadius: 2, backgroundColor: text == tab? "#121212" : "transparent", margin: "-4px"}} onClick={() => {dispatch(setCurrentTab(text)); console.log(`clicked on ${text}`)}}>
                {/*<ListItemIcon>*/}
                {/*  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                {/*</ListItemIcon>*/}
                <ListItemText primary={text} />
              </ListItemButton>
              </ThemeProvider>
            </ListItem>
          ))}
        </List>
    </div>
  )
}