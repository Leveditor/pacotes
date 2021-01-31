import React, { Component } from 'react';
import Menu from './component/Menu/Menu';
import PacotesBrasil from './component/pacote/pacote-brasil/Pacote';
import Disney from './component/pacote/Disney/Disney';
import Usa from './component/pacote/usa/Usa';
import Footer from './component/footer/Footer';

class Pacotes extends Component {

  render() {
    return (
      <div>
           <Menu />
           <PacotesBrasil />
           <Disney />
           <Usa />
           <Footer />
           
      </div>
    );
  }
}

export default Pacotes;