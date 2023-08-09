import React from "react";
import Header from "./Header";
import { Container } from "@mui/material";
import AddTodoBlock from "./AddTodoBlock";
import { NavLink, Outlet } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { TodoContext } from "../context/TodoContexxt";

export default class Layout extends React.Component {

  render() {
    const lightMode = this.context.theme

    return (
      <>
        <Header/>
        <Container
          maxWidth='lg' 
          sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
        >
          <AddTodoBlock/>
          <Stack direction="row" spacing={1} marginTop={2}>
            <NavLink to='/'>
              <Chip 
                label="Active" 
                clickable 
                variant="outlined"
                sx={{ color: lightMode === 'dark' && '#fff'}}
              />
            </NavLink>
            <NavLink to='/completed'>
              <Chip 
                label="Completed" 
                clickable 
                variant="outlined"
                sx={{ color: lightMode === 'dark' && '#fff'}}
              />
            </NavLink>
            <NavLink to='/archive'>
              <Chip 
                label="Archived" 
                clickable 
                variant="outlined"
                sx={{ color: lightMode === 'dark' && '#fff'}}
              />
            </NavLink>
          </Stack>
          <Outlet/>
        </Container>
      </>
    )
  }
}

Layout.contextType = TodoContext