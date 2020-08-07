import React, { Component } from 'react';
import Board from '../components/BoardView/Board';

const boardView = {
    'postId' : '1', 
    'title' : '2',
    'body' : '3',
    'username' : '4',
    'createdAt' : '5',
    'isChat' : '6',
}

class BoardView extends React.Component {
    render() {
        return (
            <div>
                { boardView.map( b => {
                    return (
                        <Board
                            key={b.postId}
                            postId = {b.postId}
                            title = {b.title}
                            body = {b.body}
                            username = {b.username}
                            createdAt = {b.createdAt}
                            isChat = {b.isChat}
                        />
                    )
                })}
            </div>
        )
    }
}

export default BoardView;

