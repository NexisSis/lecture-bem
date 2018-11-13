import React from 'react';
import { cn } from '@bem-react/classname';
import './Footer.scss';

const cnHeader = cn('Footer');

class Footer extends React.Component {
    render() {
        let cnFooter = cn('Footer');
        return (
            <div>
                <div className="line"></div>
                <div className="container">
                    <div className={cnFooter() + " flex flex-jc-sb"}>
                        <div className={cnFooter('Nav')}>
                            <a href="#" className={cnFooter('Item') + " text-decoration_none"}>
                                <span className={cnFooter('Text')}>Помощь</span>
                            </a>
                            <a href="#" className={cnFooter('Item') + " text-decoration_none"}>
                                <span className={cnFooter('Text')}>Обратная связь</span>
                            </a>
                            <a href="#" className={cnFooter('Item') + " text-decoration_none"}>
                                <span className={cnFooter('Text')}>Разработчикам</span></a>
                            <a href="#" className={cnFooter('Item') + " text-decoration_none"}>
                                <span className={cnFooter('Text')}>Условия использования</span>
                            </a>
                            <a href="license.pdf" className={cnFooter('Item') +" text-decoration_none"}>
                                <span className={cnFooter('Text')}>Авторские права</span>
                            </a>
                        </div>
                        <div className={cnFooter('Powered')}>
                            <span className={cnFooter('Text')}>© 2001-2017 ООО «Яндекс»</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
