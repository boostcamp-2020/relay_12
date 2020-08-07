import React, { Component } from 'react';
import Board from '../components/BoardView/Board';

const boardView = [
    {
    'postId' : '1', 
    'title' : '1',
    'body' : '1',
    'username' : '1',
    'createdAt' : '1',
    'isChat' : '1',
    },  
    {
    'postId' : '2', 
    'title' : '2',
    'body' : '3',
    'username' : '2',
    'createdAt' : '2',
    'isChat' : '2',
    },  
    {
    'postId' : '3', 
    'title' : '3',
    'body' : '3',
    'username' : '3',
    'createdAt' : '3',
    'isChat' : '3',
    },
]

const BoardView = () =>  {
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

export default BoardView;

