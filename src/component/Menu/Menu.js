import React, { Component } from 'react';
import './style.css'

class Menu extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" id="bt_menu" />
                    <label htmlFor="bt_menu"><i className="fas fa-bars"></i></label>
                   
                    <nav className="menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Pacotes no Brasil</a>
                            </li>
                            <li><a href="#">Pacotes na Disney</a>
                            </li>
                            <li><a href="#">Pacotes nos Estados Unidos</a></li>
                        </ul>
                    </nav>
            </div>
        );
    }
}

export default Menu;