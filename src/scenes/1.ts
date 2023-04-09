import { Scene, vec } from "excalibur";
import player from "../engine/player";
import ball from "../engine/ball";
import ground from "../engine/ground";


const level1 = new Scene

ball.acc = vec(0, 10)
ball.rotation = 50


level1.add(ground)
level1.add(player)
level1.add(ball)


export default level1;