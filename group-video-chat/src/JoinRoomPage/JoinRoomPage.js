import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { setIsRoomHost } from "../store/actions";

import "./JoinRoomPage.css";

const JoinRoomPage = (props) => {
  const { setIsRoomHostAction, isRoomHost } = props;
  
  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get('host');
    if (isRoomHost) {
      // change information about it in our store
      setIsRoomHostAction(true);
    }
  }, []);

  return <div>JoinRoomPage</div>;
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost))
  }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomPage);
