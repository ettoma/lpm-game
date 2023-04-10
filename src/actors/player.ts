import { Actor, Color, CollisionType, predraw, PreDrawEvent } from "excalibur"
import Game from "../engine/engine";

const player = new Actor({
  width: 20,
  height: 10,
  name: "player",
  color: Color.Chartreuse
})

//TODO: make sure all players have collisions

player.body.collisionType = CollisionType.Fixed;

Game.input.pointers.on("move", (event) => {
  player.pos.x = event.worldPos.x
  player.pos.y = event.worldPos.y
})

export default player;
