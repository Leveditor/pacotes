import React, { Component } from 'react';
import Menu from './components/Menu/Menu'
import PacotesBrasil from './components/pacote/Pacote'
import { Animated } from "react-animated-css";


class Pacotes extends Component {

 


  render() {
    return (
      <div>
           <Menu />
           <PacotesBrasil />
      </div>
    );
  }
}

export default Pacotes;