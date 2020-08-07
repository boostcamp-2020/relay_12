import React from 'react';
import './style.css';

const Board = () => {

    return (

        <div className="BoardView">
            <div className="title">
                <h2>title</h2>
            </div>
            <div className="info">
                <span>userName</span>
                <span>createdAt</span>
            </div>

            <div className="board">
                <p>board</p>
            </div>
        </div>
      );
    
}

export default Board;
