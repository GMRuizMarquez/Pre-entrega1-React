// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido!" />
    </>
  );
}

export default App;
