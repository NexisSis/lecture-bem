import React from 'react';
import { cn } from '@bem-react/classname';
import './Button.scss';
const cnButton = cn('Button');

class Button extends React.Component {
    render() {
        return (
            <button className={cnButton()}>
                {this.props.children}
            </button>

        );
    }
}

export default Button;