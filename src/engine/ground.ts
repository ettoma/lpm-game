import { Actor, vec, Color, CollisionType } from "excalibur";
import Game from "./engine";


const ground = new Actor({
    pos: vec(Game.halfDrawWidth, Game.drawHeight),
    width: Game.drawWidth,
    height: 100,
    color: Color.DarkGray,
    collisionType: CollisionType.Fixed
});

export default ground