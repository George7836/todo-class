import React from "react";
import Header from "./Header";
import { Container } from "@mui/material";
import AddTodoBlock from "./AddTodoBlock";
import { NavLink, Outlet } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import styled from "@emotion/styled";

export default function Layout() {
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
            <Chip label="Active" clickable variant="outlined"/>
          </NavLink>
          <NavLink to='/completed'>
            <Chip label="Completed" clickable variant="outlined"/>
          </NavLink>
          <NavLink to='/archive'>
            <Chip label="Archived" clickable variant="outlined"/>
          </NavLink>
        </Stack>
        <Outlet/>
      </Container>
    </>
  )
}