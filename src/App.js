import React, { Component } from 'react';
import Menu from './component/Menu/Menu'
import PacotesBrasil from './component/pacote/Pacote'

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