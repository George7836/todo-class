import React from "react";
import Header from "./components/Header";
import { Container } from "@mui/material";
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
     <>
      <Header/>
      <Container
        maxWidth='lg' 
        sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
      >

      </Container>
    </>
    )
  }
}

export default App