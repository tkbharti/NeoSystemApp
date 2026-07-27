import { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketProvider";

export default function useSocket() {

    const socket = useContext(SocketContext);

    // Emit event
    const emit = (event, data = {}) => { 
        socket.emit(event, data); 
    };

    // Emit and wait for acknowledgement
    const requestData = (event, data = {}) => {
        return new Promise((resolve, reject) => {
            socket.timeout(15000).emit(event, data, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });
    };

    // Listen
    const on = (event, callback) => {
        socket.on(event, callback);
    };

    // Remove listener
    const off = (event, callback) => {
        socket.off(event, callback);
    };

    // React helper
    const useListener = (event, callback) => {
        useEffect(() => {
            socket.on(event, callback);
            return () => {
                socket.off(event, callback);
            };
        }, [event]);
    };

    return {
        socket,
        emit,
        requestData,
        on,
        off,
        connected: socket.connected
    };
}