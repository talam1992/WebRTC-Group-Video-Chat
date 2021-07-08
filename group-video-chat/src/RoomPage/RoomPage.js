import React from "react";

import "./RoomPage.css";

const RoomPage = () => {
  return <div className="room_container">
    <ParticipantsSection />
    <VideoSection />
    <ChatSection />
  </div>;
};

export default RoomPage;
