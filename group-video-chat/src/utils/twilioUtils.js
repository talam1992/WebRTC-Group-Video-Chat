import axios from 'axios';


export const checkIfRoomExists = async (roomId) => {
    const response = await axios.get(
        `https://group-video-chat-service-7794-dev.twil.io/room-exists?roomId=${roomId}`
    );

    return response.data.roomExists
};