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
                        title="Новый пользователь"
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
                        temperature="24C"
                        humidity="80%"
                    />
                    <Card
                        size="middle"
                        iconName="icon-everyday"
                        title="Невозможно включить кондиционер"
                        sensorName="Кондиционер"
                        time="18:21, Сегодня"
                        description2="В комнате открыто окно, закройте его и повторите попытку"
                        red="true"
                    />
                    <Card
                        size="middle"
                        iconName="icon-everyday"
                        title="Музыка включена"
                        sensorName="Яндекс.Станция"
                        time="18:16, Сегодня"
                        description2="Сейчас проигрывается:"
                        player="true"
                    />
                    <Card
                        size="middle"
                        iconName="icon-everyday"
                        title="Заканчивается молоко"
                        sensorName="Холодильник"
                        time="17:23, Сегодня"
                        description2="Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?"
                        buttons="true"
                    />
                    <Card
                        size="small"
                        iconName="icon-everyday"
                        title="Зарядка завершена"
                        sensorName="Оконный сенсор"
                        time="16:22, Сегодня"
                        description2="Ура! Устройство «Оконный сенсор» снова в строю!"
                    />
                    <Card
                        size="small"
                        iconName="icon-everyday"
                        title="Зарядка завершена"
                        sensorName="Оконный сенсор"
                        time="16:22, Сегодня"
                        description2="Ура! Устройство «Оконный сенсор» снова в строю!"
                    />
                    <Card
                        size="small"
                        iconName="icon-everyday"
                        title="Зарядка завершена"
                        sensorName="Оконный сенсор"
                        time="16:22, Сегодня"
                        description2="Ура! Устройство «Оконный сенсор» снова в строю!"
                    />
                    <Card
                        size="big"
                        iconName="icon-everyday"
                        title="Пылесос застрял"
                        sensorName="Сенсор движения"
                        time="16:17, Сегодня"
                        description="Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь."
                        imageName="card-last-m.png"
                        red="true"
                    />

                </div>
            </div>
        );
    }
}

export default Header;
