import { io } from "socket.io-client";

const API_BASE_URL = process.env.REACT_APP_SOCKET_BASE_URL;   

const socket = io(API_BASE_URL, {
    autoConnect: true,
    transports: ["websocket"],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000
});

export default socket;