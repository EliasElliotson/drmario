import express from 'express'

/**
 * A class to listen for incoming requests about rooms
 */
export class RoomsManager {
  app
  port
  rooms = {}

  /**
   * Creates a rooms handler
   * @constructor
   * @param {*} port The port that should be used for requests/connections
   */
  constructor(port = 433) {
    this.app = express();
    this.port = port;
    this.app.set('trust proxy', true)

    // Get info about a room
    this.app.get('/rooms/:room', (req, res) => {
      console.log(`GET   ${req.ip}  /rooms/${req.params.room}`)
      res.send(JSON.stringify(this.rooms.hasOwnProperty(req.params.room)));
    })

    // Get info about a room
    this.app.get('/new-room', (req, res) => {
      console.log(`POST  ${req.ip}  /new-room`)
      
      const roomId = this.generateRoomId();
      this.createRoom(roomId);

      res.send(roomId);
    })
  }

  /**
   * Tells the rooms handler to begin listening for requests
   */
  start() {
    this.app.listen(this.port, () => {
      console.log(`Rooms handler listening on port ${this.port}`)
      console.log('');
    })
  }

  /**
   * Generates a random (and unused) room id
   */
  generateRoomId() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';

    let roomId = '';

    while (roomId === '' || this.rooms.hasOwnProperty(roomId)) {
      for (let i = 0; i < 6; i++) {
        roomId += chars.charAt(Math.round(Math.random() * (chars.length - 1)))
      }
    }

    return roomId;
  }

  /**
   * Creates a new room on the server
   * @param {*} id The id of the room to create
   */
  createRoom(id) {
    this.rooms[id] = {
      games: []
    }
  }

  /**
   * Creates a new room on the server
   * @param {*} id The id of the room to create
   */
  deleteRoom(id) {
    delete this.rooms[id]
  }
}

/*
Player settings

Virus level: 0-20 (including 0 and 20, total number of viruses is xx * 4)
Speed: "LOW" | "MED" | "HI"
Music: "Fever" | "Chills" | "Off" (don't include on the server)
*/
