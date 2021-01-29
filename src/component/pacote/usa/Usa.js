import React, { Component } from 'react';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';


class Usa extends Component {
    constructor(props) {
        super(props);
        this.state = {

            pacote: [
                { id: 1, titulo: 'Chicago', viagem: '15 de mar 2021 - 20 d...', valor: '2.151', img: 'https://images.pexels.com/photos/1798130/pexels-photo-1798130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                { id: 2, titulo: 'Las Vegas', viagem: '06 de jun 2021 - 16 d...', valor: '2.206', img: 'https://images.pexels.com/photos/2600214/pexels-photo-2600214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                { id: 3, titulo: 'Nova York', viagem: '11 de abr 2021 - 18 d...', valor: '2.665', img: 'https://images.pexels.com/photos/5627275/pexels-photo-5627275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                { id: 4, titulo: 'Miami', viagem: '01 de abr 2021 - 03 d...', valor: '3.434', img: 'https://images.pexels.com/photos/3773651/pexels-photo-3773651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
            ]
        }
    }

    render() {
        return (
            <div>

                <section>
                    {/* ANIMAÇÃO */}
                    <ScrollAnimation animateIn="slideInUp">

                        {/* DIV FALANDO SOBRE O PACOTE */}
                        <div className="pacote-ferias-usa">

                            <h2>Pacotes para os Estados Unidos</h2>

                            <p>Os pacotes para Estados Unidos que você está procurando para as suas férias estão na AQUI</p>
                        </div>

                        <div className="cards">
                            {/* CARDS DE PACOTES NOS ESTADOS UNIDOS */}
                            {this.state.pacote.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className="cards-pacote-usa" >

                                            <div>
                                                <img src={item.img} />
                                            </div>

                                            {/* CORPO DO CARDS */}
                                            <div className="corpoCards-usa">
                                                <h3>{item.titulo}</h3>
                                                <p><i className="fas fa-plane"></i>{item.viagem}</p>

                                                <small>Pacote a partir de</small>
                                                <p className="valor-usa">R$ {item.valor}</p>

                                                <button className="botao-verMais-usa">Ver pacote</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollAnimation>


                </section>
            </div>
        );
    }
}

export default Usa;