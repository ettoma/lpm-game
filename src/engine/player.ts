import { Actor, Color, CollisionType, predraw, PreDrawEvent } from "excalibur"
import Game from "./engine";

const player = new Actor({
  width: 20,
  height: 10,

  color: Color.Chartreuse
})

//* make sure the player has collisions
player.body.collisionType = CollisionType.Fixed;

Game.input.pointers.on("move", (event) => {
  player.pos.x = event.worldPos.x
  player.pos.y = event.worldPos.y
})

export default player;
