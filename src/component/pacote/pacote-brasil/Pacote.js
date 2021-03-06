import React, { Component } from 'react';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';


class PacotesBrasil extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // BRASIL
            pacote: [
                { id: 1, titulo: 'Rio de janeiro', viagem: '07 de fev 2021 - 09 d...', valor: '282', img: 'https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                { id: 2, titulo: 'Curitiba', viagem: '26 de fev 2021 - 28 d...', valor: '305', img: 'https://cdn.pixabay.com/photo/2017/03/23/12/44/botanical-garden-2168222_960_720.jpg' },
                { id: 3, titulo: 'Florianópolis', viagem: '22 de fev 2021 - 24 d...', valor: '356', img: 'https://images.pexels.com/photos/5097643/pexels-photo-5097643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                { id: 4, titulo: 'Salvador', viagem: '15 de mai 2021 - 17 d...', valor: '590', img: 'https://images.pexels.com/photos/4172523/pexels-photo-4172523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
            ]
        }
    }

    render() {
        return (
            <div>

                <section>
                    {/* ANIMAÇÃO */}
                    <ScrollAnimation animateIn="slideInLeft">
                        <div className="pacote-ferias">

                            {/* DIV DE PROMOÇÃO */}

                            <div className="div-ferias">
                                <h1><i className="fas fa-suitcase"></i>Pacotes</h1>
                                <span>Promoções imperdíveis</span>

                                <h2>Uma seleção de pacotes para suas próximas férias</h2>
                            </div>
                        </div>

                        <div className="cards">
                            {/* CARDS DE PACOTES NO BRASIL */}
                            {this.state.pacote.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className="cards-pacote" >

                                            <div>
                                                <img src={item.img} />
                                            </div>

                                            {/* CORPO DO CARDS */}
                                            <div className="corpoCards">
                                                <h3>{item.titulo}</h3>
                                                <p><i className="fas fa-plane"></i>{item.viagem}</p>

                                                <small>Pacote a partir de</small>
                                                <p className="valor">R$ {item.valor}</p>

                                                <button className="botao-verMais">Ver pacote</button>
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

export default PacotesBrasil;