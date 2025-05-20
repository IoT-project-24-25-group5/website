
import {Box, Card, Divider, Typography} from "@mui/material";


export default function SensorWidget(props: {name: string, value: string}) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{p: 0.7, backgroundColor: "#1d1d1d", alignItems: "center", display: "flex", justifyContent: "center"}}>
        <Typography variant="h6" component="h4" color="white">
          {props.name}
        </Typography>
      </Box>
    <Divider/>
      <Box sx={{p: 2, backgroundColor: "#121212"}}>
        <Typography variant="body1" component="div" color="white">
          {props.value}
        </Typography>
      </Box>
    </Card>
  );
}