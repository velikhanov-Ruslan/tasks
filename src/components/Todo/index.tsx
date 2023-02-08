import React, { useState } from 'react'
import { AppBar, Checkbox, FormControlLabel, FormGroup, IconButton, Toolbar, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import { Container } from '@mui/system';
import ListTodos from '../List';

const TOdo = () => {
    const [isOpenTodayTasks, setIsOpenTodayTasks] = useState(false);

    const setOpenTodayTasks = () => {
        setIsOpenTodayTasks(opened => !opened)
        console.log(isOpenTodayTasks);
    }

    return (
        <Container>
            <AppBar position='static' style={{ background: "#121212", boxShadow: "none" }}>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }} variant='h3' component={"h3"} align="left">
                        To Do
                    </Typography>
                    <IconButton color='inherit'>
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <FormGroup>
                <FormControlLabel
                    style={{ color: "#F4F4F4" }}
                    control={<Checkbox defaultChecked onClick={setOpenTodayTasks} sx={{color: "#fff"}} />} label="Today Tasks:"
                />
            </FormGroup>
            {!isOpenTodayTasks &&
                <ListTodos/>
            }
        </Container>
    )
}

export default TOdo