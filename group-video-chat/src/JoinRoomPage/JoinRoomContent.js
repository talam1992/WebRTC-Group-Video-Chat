import React, { useState } from 'react';
import { connect } from 'react-redux';
import JoinRoomInputs from './JoinRoomInputs';

const JoinRoomContent = (props) => {
    const { isRoomHost } = props;


    const [roomIdValue, setRoomIdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    return (
        <>
          <JoinRoomInputs
          roomIdValue={roomIdValue}
          setRoomIdValue={setRoomIdValue}
          nameValue={nameValue}
          setNameValue={setNameValue}
          isRoomHost={isRoomHost}
          />  
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {};
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