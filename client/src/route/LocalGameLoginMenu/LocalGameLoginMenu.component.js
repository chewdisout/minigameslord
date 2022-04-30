import React from 'react';
import PlayerCount from '../../component/PlayerCount/PlayerCount.component';
import './LocalGameLoginMenu.styles.scss';
import {
    Link
} from "react-router-dom";

class LocalGameLoginMenu extends React.Component {
    render() {
        return(
            <div className='MainWindow'>
                <PlayerCount />
                <div className='LocalGameLoginMenu'>
                    <div className='LocalGameLoginMenu-Title'>
                        Выберите свои имена
                    </div>
                    <div className='LocalGameLoginMenu-InputContainer'>

                    </div>
                </div>
                <Link to="/">
                    <div className='MainWindow-InputContainer__item BigButton-Purple'>
                        Назад
                    </div>
                </Link>                
            </div>
        );
    }
}

export default LocalGameLoginMenu;