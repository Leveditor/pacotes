import React, { Component } from 'react';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Disney extends Component {

    constructor(props) {
        super(props);
        this.state = {

            pacote: [
                { id: 1, titulo: 'Orlando Flórida', viagem: '10 de fev 2021 - 20 d...', valor: '2.996', img: 'https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                { id: 2, titulo: 'Orlando Flórida', viagem: '17 de fev 2021 - 2 d...', valor: '3.237', img: 'https://images.pexels.com/photos/618902/pexels-photo-618902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                { id: 3, titulo: 'Orlando Flórida', viagem: '23 de fev 2021 - 28 d...', valor: '3.234', img: 'https://images.unsplash.com/photo-1534450539339-6d1c81ad18e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=419&q=80' },
                { id: 4, titulo: 'Orlando Flórida', viagem: '15 de mai 2021 - 25 d...', valor: '3.303', img: 'https://images.unsplash.com/photo-1509407336566-fca158fddcce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=375&q=80' },
            ]
        }
    }

    render() {
        return (
            <div>
                <div>
                    <ScrollAnimation animateIn="slideInRight">
                        <div className="titulo-disney">
                            <h2>Nossos Melhores Pacotes na Disney em Orlando</h2>
                            <p>Pensamos estas propostas para que você desfrute de nossos hotéis de maior confiança e atrações imperdíveis com o preço mais conveniente para sua viagem.</p>
                        </div>

                        <div className='todosCards'>
                            {this.state.pacote.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className="cards-pacote">

                                            <div>
                                                <img src={item.img} />
                                            </div>

                                            {/* CORPO DO CARDS */}
                                            <div className="corpoCards">
                                                <h3>{item.titulo}</h3>
                                                <p><i className="fas fa-plane"></i>{item.viagem}</p>

                                                <small>Pacote a partir de</small>
                                                <p className="valor">R$ {item.valor}</p>

                                                <button className="botao-verPacote">Ver pacote</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}

export default Disney;