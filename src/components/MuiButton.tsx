import React from 'react'
import {Stack ,Button ,IconButton ,ButtonGroup} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            <Button variant='text' href="www.google.com">Text</Button>
            <Button variant='contained' >Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant='text' color='primary'>Primary</Button>
            <Button variant="text" color="secondary">Secondary</Button>
            <Button variant='text' color='warning'>Error</Button>
            <Button variant='text' color='error'>Warning</Button>
            <Button variant='text' color='info'>Info</Button>
            <Button variant='text' color="success">Success</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="info">Info</Button>
            <Button variant="contained" color="success">Success</Button>
        </Stack>

        <Stack spacing={2} direction="row"> 
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="outlined" color="error">Error</Button>
            <Button variant="outlined" color="warning">Warning</Button>
            <Button variant="outlined" color="info">Info</Button>
            <Button variant="outlined" color="success">Success</Button>
        </Stack>

        <Stack display="block" spacing={2} direction="row">
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">Medium</Button>
            <Button variant="contained" size="large">Large</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant="contained" startIcon={<SendIcon/>} disableRipple>Send</Button>
            <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <IconButton color='primary' onClick={()=> alert("Clicked...")}><SendIcon/></IconButton>
        </Stack>

        <Stack direction="row">
            <ButtonGroup variant="contained" orientation='vertical' size="small" color="secondary">
                <Button onClick={()=> alert("Left Clicked...")}>Left</Button>
                <Button onClick={()=> alert("Center1 Clicked...")}>Center1</Button>
                <Button onClick={()=> alert("Center2 Clicked...")}>Center2</Button>
                <Button onClick={()=> alert("Right Clicked...")}>Right</Button>
            </ButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton