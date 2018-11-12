import React from 'react';
import { cn } from '@bem-react/classname';
import './Card.scss';

const cnCard = cn('Card');

class Card extends React.Component {

    render() {
        //default value
        let sizeCardCss = "grid-c-4";
        let flexCardCss = "flex flex-jc-sb-m flex-fd-col-d flex-al-fs-d";
        if(this.props.size === "big"){
            sizeCardCss = "grid-c-8 grid-r-3";
            flexCardCss = "flex flex-jc-sb";
        }else if(this.props.size === "small"){
            sizeCardCss = "grid-c-4";
            flexCardCss = "flex flex-jc-sb-m flex-fd-col-d flex-al-fs-d";
        }
        return (
            <div className={ cnCard() + " " + sizeCardCss}>
                <div className="icon-close"></div>
                <div className={"Card_m-t flex"}>
                    <div className={cnCard("Icon") + " " + this.props.iconName}></div>
                    <div className={cnCard("Title")}>{this.props.title}</div>
                </div>
                <div className={flexCardCss}>
                    <div className={cnCard("Text")}>{this.props.sensorName}</div>
                    <div className={cnCard("Text")}>{this.props.time}</div>
                </div>
                { this.props.description ? <div className={cnCard("Description") + " mt-24"}> {this.props.description} </div> : ' ' }

                { this.props.imageName ? <img className={cnCard("Image") + " mt-54"} src={"img/" + this.props.imageName} alt="profffesional graph"/> : '' }

                <div className="icon-next"></div>
            </div>
        );
    }
}

export default Card;
