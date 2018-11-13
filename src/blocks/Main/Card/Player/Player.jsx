import React from 'react';
import './Player.scss';
import { cn } from '@bem-react/classname';

const cnPlayer = cn('Player');

class Player extends React.Component {
    render() {
        return (
            <div className={ cnPlayer() + " mt-26"}>
                <div className="flex flex-al-fs">
                    <img className={cnPlayer('Image')} src="img/player-img.png"/>
                        <div className={cnPlayer('Wrapper') + " ml-16"}>
                            <div className={cnPlayer('Song') + " Card-Description-2"}>Florence & The Machine - Big God</div>
                            <div className="flex mt-11">
                                <div className={cnPlayer('SongLine')}></div>
                                <div className={cnPlayer('SongMoment')}></div>
                                <div className={cnPlayer('Value')+ " ml-20"}>4:31</div>
                            </div>
                        </div>
                </div>
                <div class="flex mt-18">
                    <div className="icon-music-prev"></div>
                    <div className="icon-music-next"></div>
                    <div className={cnPlayer('VolumeLine') + " ml-16"}></div>
                    <div className={cnPlayer('VolumeMoment')}></div>
                    <div className={cnPlayer('Volume') + " ml-24"}>80%</div>
                </div>
            </div>
        );
    }
}

export default Player;
