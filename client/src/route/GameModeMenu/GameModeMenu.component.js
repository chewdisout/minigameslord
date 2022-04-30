import React from 'react';
import {
    Link
} from "react-router-dom";
import './GameModeMenu.styles.scss';

class GameModeMenu extends React.Component {
    renderGameModeMenu() {
        return(
            <div className='MainWindow'>
                <div className='MainWindow-Title'>MiniGamesLord</div>
                <div className='MainWindow-InputContainer'>
                    <Link to="/localgame">
                        <div className='MainWindow-InputContainer__item BigButton-Purple'>
                            Локальная игра
                        </div>
                    </Link>
                    <div className='MainWindow-InputContainer__item BigButton-Pink BigButton__disabled'>
                        Онлайн игра
                    </div>
                    <div className='MainWindow-InputContainer__item BigButton-Darkpurple BigButton__disabled'>
                        Список игр
                    </div>               
                </div>
            </div>     
        );
    }

    render() {
        return (
            <div className='MainWindow'>
                { this.renderGameModeMenu() }
            </div>
        );
    }
}

export default GameModeMenu;
