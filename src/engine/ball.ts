import { Actor, CollisionType, Color, vec } from "excalibur";
import Game from "./engine";


const ball = new Actor({
    pos: vec(Game.halfDrawWidth, -100),
    height: 10,
    width: 10,
    color: Color.Magenta,
    collisionType: CollisionType.Active
})


export default ball