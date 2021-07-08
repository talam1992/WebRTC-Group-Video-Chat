import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setConnectOnlyWithAudio } from '../store/actions';
import JoinRoomInputs from './JoinRoomInputs';
import OnluWithAudioCheckbox from './OnluWithAudioCheckbox';
import RoomNotFoundMessage from './RoomNotFoundMessage';
import JoinRoomButtons from './JoinRoomButtons';

const JoinRoomContent = (props) => {
    const { isRoomHost, setConnectOnlyWithAudioAction, connectOnlyWithAudio } = props;


    const [roomIdValue, setRoomIdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);

    const handleJoinToRoom = () => {
        // add logic to join the room
    };

    return (
        <>
          <JoinRoomInputs
          roomIdValue={roomIdValue}
          setRoomIdValue={setRoomIdValue}
          nameValue={nameValue}
          setNameValue={setNameValue}
          isRoomHost={isRoomHost}
          />
          <OnluWithAudioCheckbox 
          setConnectOnlyWithAudio={setConnectOnlyWithAudioAction}
          connectOnlyWithAudio={connectOnlyWithAudio}
          />
          <RoomNotFoundMessage showRoomNotFoundMessage={showRoomNotFoundMessage} />
          <JoinRoomButtons 
          isRoomHost={isRoomHost}
          handleJoinToRoom={handleJoinToRoom}
          /> 
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setConnectOnlyWithAudioAction: (onlyWithAudio) => 
        dispatch(setConnectOnlyWithAudio(onlyWithAudio))
    };
};

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

export default connect(
    mapStoreStateToProps, 
    mapDispatchToProps)
    (JoinRoomContent);