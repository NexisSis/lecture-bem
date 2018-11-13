import React from 'react';
import { cn } from '@bem-react/classname';
import './Card.scss';
import Player from './Player/Player';

const cnCard = cn('Card');

class Card extends React.Component {

    render() {
        //default value
        let cardCss = "grid-c-4";
        let flexCardCss = "flex flex-jc-sb";
        if(this.props.size === "big"){
            cardCss = "grid-c-8 grid-r-3";
            flexCardCss = "flex flex-jc-sb";
        }else if(this.props.size === 'middle'){
            cardCss = "grid-c-6";
        } if(this.props.size === "small"){
            cardCss = "grid-c-4";
            flexCardCss = "flex flex-jc-sb-m flex-fd-col-d flex-al-fs-d";
        }
        let indent = 'Card_m-t';
        let colorCss = '';
        let paddingCss = '';
        let CardCssForRed = '';
        if(this.props.red && this.props.red !== 'false'){
            cardCss+= ' no-padding Card_Red';
            colorCss = 'color_white';
            indent = paddingCss = 'p-20-20-0';
            CardCssForRed = cnCard();
        }
        return (
            <div className={ cnCard() + " " + cardCss}>
                <div className="icon-close"></div>
                <div className={"flex" + ' ' + indent}>
                    <div className={cnCard("Icon-2") + " " + this.props.iconName + " " + colorCss}></div>
                    <div className={cnCard("Title") + " " + colorCss}>{this.props.title}</div>
                </div>
                <div className={flexCardCss + ' ' + paddingCss}>
                    <div className={cnCard("Text") + " " + colorCss}>{this.props.sensorName}</div>
                    <div className={cnCard("Text") + " " + colorCss}>{this.props.time}</div>
                </div>
                <div className={CardCssForRed + " mt-24"}>
                    { this.props.description ? <div className={cnCard("Description")}> {this.props.description} </div> : ' ' }
                    { this.props.description2 ? <div className={cnCard("Description-2")}> {this.props.description2} </div> : ' ' }
                    { this.props.imageName ? <img className={cnCard("Image") + " mt-54"} src={"img/" + this.props.imageName}/> : '' }
                    { this.props.player && this.props.player !== 'false' ? <Player/>  : '' }

                    { this.props.buttons && this.props.buttons !== 'false' ?
                    <div class="flex mt-48 flex-jc-sb-m">
                        <button className={cnCard('Button',{'Yellow':true})}>Да</button>
                        <button className={cnCard('Button') + " ml-16"}>Нет</button>
                    </div> : ''}

                    <div class="flex">
                        { this.props.temperature ? <div class="card__text color_black  mt-58">Температура: <span class="text_strong">{this.props.temperature}</span></div> : ''}
                        { this.props.humidity ? <div class="card__text ml-54 color_black  mt-58">Влажность: <span class="text_strong">{this.props.humidity}</span></div> : ''}
                    </div>
                </div>
                <div className="icon-next"></div>
            </div>
        );
    }
}

export default Card;
