import React from 'react';
import { cn } from '@bem-react/classname';
import './Main.scss';
import Card from './Card/Card';

const cnMain = cn('Main');

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={ cnMain() + ' ' + cnMain({Container:true}) + " grid mb-44"}>
                    <h1 className="grid-c-12">Лента событий</h1>
                    <Card
                        size="big"
                        iconName="icon-everyday"
                        imageName="richdata.png"
                        title="Еженедельный отчет по расходам ресурсов"
                        description="Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее"
                        sensorName="Сенсоры потребления"
                        time="19:00, Сегодня"
                    />
                    <Card
                        size="small"
                        iconName="icon-everyday"
                        title="Дверь открыта"
                        sensorName="Сенсор входной двери"
                        time="19:00, Сегодня"
                    />
                    <Card
                        size="small"
                        iconName="icon-everyday"
                        title="Уборка закончена"
                        sensorName="Пылесос"
                        time="18:45, Сегодня"
                    />
                    <Card
                        size="small"
                        iconName="icon-everyday"
                        title="Новый юзер"
                        sensorName="Роутер"
                        time="19:00, Сегодня"
                    />
                    <Card
                        size="middle"
                        iconName="icon-everyday"
                        title="Изменен климатический режим"
                        sensorName="Сенсор микроклимата"
                        time="18:30, Сегодня"
                        description2="Установлен климатический режим «Фиджи»"
                    />


                </div>
            </div>
        );
    }
}

export default Header;
