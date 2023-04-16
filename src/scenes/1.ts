import { Color, Scene, Timer, Vector } from "excalibur";
import player from "../actors/player";
import side_menu from "./sidemenu";
import { generate_enemy } from "../actors/enemy"
import Healthbar from "../components/healthbar";


const level1 = new Scene;

let enemy_spawn_timer = new Timer({
    fcn: () => {
        let newEnemy = generate_enemy("");
        level1.add(newEnemy)
    },
    interval: 1000,
    repeats: true,

});

let power_up_spawn_timer = new Timer({
    fcn: () => {
        // TODO: Spawn power ups
    },
    interval: 10000,
    repeats: true,

});

//? If we decide to have the score inside the scene, we don't need to pass the SideMenuWidth
const healthbar = new Healthbar(150, 150, player.health, 300)
healthbar.color = Color.Transparent

level1.add(healthbar)


level1.addTimer(enemy_spawn_timer);
level1.addTimer(power_up_spawn_timer);
enemy_spawn_timer.start();
power_up_spawn_timer.start();

level1.add(player);
level1.add(side_menu);


export default level1;