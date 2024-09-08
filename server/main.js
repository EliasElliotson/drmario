import { RoomsHandler } from "./rooms-handler.js";

const roomsHandler = new RoomsHandler(3000);

roomsHandler.start();



import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(socket)
    io.emit("test", new Date().toDateString());
});

httpServer.listen(3500);