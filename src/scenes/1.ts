import { Scene, Timer } from "excalibur";
import player from "../actors/player";
import ground from "../engine/ground";
import Game from "../engine/engine";
import Ball from "../actors/ball";


const level1 = new Scene


let ballTimer = new Timer({
    fcn: () => {
        let newBall = new Ball(Game.drawHeight / 2, Game.drawWidth / 2,)
        level1.add(newBall)
    },
    interval: 1000,
    repeats: true,
    numberOfRepeats: 20

});

level1.addTimer(ballTimer)
ballTimer.start()


level1.add(ground)
level1.add(player)



export default level1;