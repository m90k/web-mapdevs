import React from "react";

import Reset from "./styles/Reset";
import Sidebar from "./Components/Sidebar";
import List from "./Components/List";

import { Container } from "./styles";

function App() {
  return (
    <>
      <Reset />
      <Container>
        <Sidebar />
        <List />
      </Container>
    </>
  );
}
export default App;
