import React from 'react';
import './App.css';
import styled from 'styled-components';

import Character from './components/Character';

const Styled = styled.div `
 
  width: 100%;
  height: 100vh;

 h1 {
      font-size: 70px;
      transition: 0.4s;

      &:hover {
        opacity: 0.6;
        transition: 0.8s;
      }

    }

`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Styled className="App">
      <h1 className="Header">React Wars ></h1>
      <Character />  
    </Styled>
  );
}

export default App;
