import React, { Component } from 'react';
import Menu from './component/Menu/Menu';
import PacotesBrasil from './component/pacote/pacote-brasil/Pacote';
import Disney from './component/pacote/Disney/Disney';

class Pacotes extends Component {

  render() {
    return (
      <div>
           <Menu />
           <PacotesBrasil />
           <Disney />
           
      </div>
    );
  }
}

export default Pacotes;