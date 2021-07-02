import React from 'react';
import ConnectingButton from './ConnectingButton';
import { useHistory } from 'react-router-dom';

const ConnectingButtons = () => {
    
    let history = useHistory();

    const pushJoinRoomPage = () => {
        history.push('/join-room');
    };

    const pushJoinRoomPageAsHost = () => {
        history.push('/join-room?host=true');
    };

    return (
        <div className='connecting_buttons_container'>
            <ConnectingButton
            buttonText='Join a meeting'
            onClickHandler={pushJoinRoomPage} 
            />
            <ConnectingButton
            buttonText='Host a meeting'
            createRoomButton
            onClickHandler={pushJoinRoomPageAsHost} 
            />
        </div>
    );
};

export default ConnectingButtons;