import React from 'react';
import './Nav.scss';

import { cn } from '@bem-react/classname';

const cnNav = cn('Nav');

class Nav extends React.Component {
    render() {
        return (
            <div className={cnNav() + " flex flex-jc-sb"}>
                <a className={cnNav('Item')} href="/">
                    <span className={cnNav('Text')}>События</span>
                </a>
                <a className={cnNav('Item')} href="/">
                    <span className={cnNav('Text')}>Сводка</span>
                </a>
                <a className={cnNav('Item')} href="/">
                    <span className={cnNav('Text')}>Устройства</span>
                </a>
                <a className={cnNav('Item')} href="/">
                    <span className={cnNav('Text')}>Сценарии</span>
                </a>
                <a className={cnNav('Item')} href="/">
                    <span className={cnNav('Text')}>Сенсорныый ввод</span>
                </a>
                <a className={cnNav('Item')} href="/">
                    <span className={cnNav('Text')}>Камеры наблюдения</span>
                </a>
            </div>
        );
    }
}

export default Nav;
