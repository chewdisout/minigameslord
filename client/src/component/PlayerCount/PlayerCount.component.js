import React from 'react';
import "./PlayerCount.style.scss"

class PlayerCount extends React.Component {
    constructor() {
        super();
        this.state = {
            playerCount: 2
        };
    }

    handlePlayerChange = (playerCount) => {
        this.setState({ playerCount: playerCount });
        console.log(playerCount);
        // const playerChangeButtons = document.getElementsByClassName('PlayerCount-Container__item');
    }
    
    render() {
        return (
            <div className='PlayerCount'>
                <div className='PlayerCount-Title'>
                    Выбери количество игроков
                </div>
                <div className='PlayerCount-Container'>
                    <div className='PlayerCount-Container__item Active' onClick={() => this.handlePlayerChange(2)}><div>2</div></div>
                    <div className='PlayerCount-Container__item' onClick={() => this.handlePlayerChange(3)}><div>3</div></div>
                    <div className='PlayerCount-Container__item' onClick={() => this.handlePlayerChange(4)}><div>4</div></div>
                    <div className='PlayerCount-Container__item' onClick={() => this.handlePlayerChange(5)}><div>5</div></div>
                </div>
            </div>
        );
    }
}

export default PlayerCount;