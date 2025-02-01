import React from 'react';
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = ( ) =>{
    return(
        <nav className="header__navigation">
            <div className="navigation">

                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta para a esquerda"/>
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta para a direita"/>
                </button>

            </div>

            <div className="header__search">
                <img src={search} alt="Ícone de busca"/> {/*Este alt podee ficar vazio pois esta imageem não esta sendo usada para compor a página, ela não tem valor de conteúdo, só esta "fazendo uma graça", o ideal seria carregar ela no CSS*/}
                <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?"/>
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;


