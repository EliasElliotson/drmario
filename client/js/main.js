import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const socket = io(`wss://didactic-space-goggles-v6779pqwg4fp9pq-3500.app.github.dev`, {
  reconnectionDelayMax: 10000,
});

socket.on("test", (t) => {
  console.log(t);
});