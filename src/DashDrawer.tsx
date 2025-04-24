import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useDispatch} from "react-redux";
import {setCurrentTab} from "./state/store.ts";

const drawerWidth = '15vw';

export default function DashDrawer() {

  const dispatch = useDispatch()


  return (
    <div style={{width: drawerWidth, height: '100vh', display: 'flex', alignItems: "flex-start", backgroundColor: "aquamarine"}}>
      {/*<Toolbar />*/}

        <List sx={{width: '100%'}}>
          {['Location', 'Video', 'Sensors', 'Devices'].map((text) => (
            <ListItem key={text} disablePadding sx={{width: '100%'}}>
              <ListItemButton onClick={() => {dispatch(setCurrentTab(text)); console.log(`clicked on ${text}`)}}>
                {/*<ListItemIcon>*/}
                {/*  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                {/*</ListItemIcon>*/}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </div>
  )
}