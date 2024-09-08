import express from 'express'
const app = express()
const port = 3000

let rooms = {
  "kdshvjdh": {
    players: ["Eli", "Joe", "Darsh"]
  },
  "memasdia": {
    players: ["CuteFlowerGirl1", "dragon_gems"]
  },
  "akdjasdd": {
    players: ["MatPatGT", "Theorizer", "RaidShadowLegends"]
  }
}

app.get('/rooms', (req, res) => {
  res.send(JSON.stringify(Object.keys(rooms)));
})

app.get('/rooms/:room', (req, res) => {
  res.send(JSON.stringify(rooms[req.params.room]));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})