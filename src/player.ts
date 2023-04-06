import { Actor, Color, CollisionType } from "excalibur"

const player = new Actor({
  width: 20,
  height: 10,
  x: 50,
  y: 100,
  color: Color.Chartreuse
})

//* make sure the player has collisions
player.body.collisionType = CollisionType.Fixed;

export default player;
