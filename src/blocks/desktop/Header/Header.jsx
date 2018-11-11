import React from 'react';
import { cn } from '@bem-react/classname';
import './Header.scss';
import Nav from './Nav/Nav';

const cnHeader = cn('Header');

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className={cnHeader() + " flex flex-jc-start flex-jc-sb-tablet"}>
                        <img className={cnHeader('Logo')} src="img/logo.svg" title="Яндекс Дом логотип" alt="Яндекс дом логотип"/>
                        <Nav/>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        );
    }
}

export default Header;
