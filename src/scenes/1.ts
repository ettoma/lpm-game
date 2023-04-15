import { Scene, Timer } from "excalibur";
import player from "../actors/player";
import side_menu from "./sidemenu";
import {generate_enemy} from "../actors/enemy"


const level1 = new Scene;

let enemy_spawn_timer = new Timer({
    fcn: () => {
        let newBall = generate_enemy("");
        level1.add(newBall)
    },
    interval: 1000,
    repeats: true,
    // numberOfRepeats: 20

});

let power_up_spawn_timer = new Timer({
    fcn: () => {
        // TODO: Spawn power ups
    },
    interval: 10000,
    repeats: true,
    // numberOfRepeats: 20

});

level1.addTimer(enemy_spawn_timer);
level1.addTimer(power_up_spawn_timer);
enemy_spawn_timer.start();
power_up_spawn_timer.start();

level1.add(player);
level1.add(side_menu);


export default level1;