import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
    setConnectOnlyWithAudio, 
    setIdentity, 
    setRoomId 
} from '../store/actions';
import JoinRoomInputs from './JoinRoomInputs';
import OnluWithAudioCheckbox from './OnluWithAudioCheckbox';
import RoomNotFoundMessage from './RoomNotFoundMessage';
import JoinRoomButtons from './JoinRoomButtons';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { checkIfRoomExists } from '../utils/twilioUtils';

const JoinRoomContent = (props) => {
    const { 
        isRoomHost, 
        setConnectOnlyWithAudioAction, 
        connectOnlyWithAudio, 
        setRoomIdAction,
        setIdentityAction 
    } = props;


    const [roomIdValue, setRoomIdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);
    const history = useHistory();

    const handleJoinToRoom = async () => {
        // add logic to join the room
        setIdentityAction(nameValue);
        if (!isRoomHost) {
            // check if room exist and if yes join
            const roomExists = await checkIfRoomExists(roomIdValue);
            if (roomExists) {
                setRoomId(roomIdValue);
                history.push("/room");
            } else {
                setShowRoomNotFoundMessage(true);
            }
        } else {
            setRoomIdAction(uuidv4());
            history.push("/room");
        }
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
            dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
        setIdentityAction: (identity) => dispatch(setIdentity(identity)),
        setRoomIdAction: (id) => dispatch(setRoomId(id))
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