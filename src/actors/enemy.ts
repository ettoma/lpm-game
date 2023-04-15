import { Actor, CollisionType, Color, PreCollisionEvent, vec, Vector, randomIntInRange } from "excalibur";
import Game from "../engine/engine";
import { Images } from "../resources";
import {random_number_from_range} from "../utils/utils"


class Enemy extends Actor {
    gravity : Vector = vec(0, 3);
    constructor(pos: Vector, velocity : Vector, acceleration : Vector) {
        super({
            name: "enemy",
            x: pos.x,
            y: pos.y,
            width: 30,
            height: 30,
            color: Color.Magenta,
            collisionType: CollisionType.Active,
            vel: velocity,
            acc: acceleration,
            rotation: Math.PI / 3
        });
        this.on('precollision', (evt) => this.onPreCollision(evt));
    };

        // onInitialize(_engine: Engine): void {
        //     this.graphics.use(Images.Sword.toSprite())
        // }

    private onPreCollision(evt: PreCollisionEvent) {
        if (evt.other.name == "player") {
            this.kill() 
        }
    }

    update() {
        this.vel = this.vel.add(this.gravity);
        this.vel = this.vel.add(this.acc);
    }
}

const height = Game.drawHeight
const width = Game.drawWidth * 0.75

/*
For now, enemies can spawn from the top or top-halves of the frame edges
 ___________________________________________________________
|"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""|
|"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""|
|"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""|
|"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""|
|"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""|
|"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""|
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
*/
export function generate_enemy(enemy_type : any) : Actor {
    //enemy type is a placeholder for an object
    let enemy_pos = (generate_enemy_location());
    let vel : Vector = vec(0,0);
    let acc : Vector = vec(0,0);
    if (enemy_pos.x == 0) {
        vel = vec(200, 100);
        acc = vec(0,0);
    }
    else if (enemy_pos.y == 0) {
        vel: vec(0, 100);
        acc: vec(0,0);
    }
    else {
        vel = vec(-200, -100);
        acc = vec(0,0);
    }

    return new Enemy(enemy_pos, vel, acc);
}

function generate_enemy_location() : Vector {
    // (width * 0.1) is to increase the chance of generating a location on the edge
    let x = randomIntInRange(width * -0.1, width + width + (width * 0.1));
    let half_height = height / 2;
    let y = random_number_from_range(0, half_height);

    // spawn from the left
    if (x < 0) {
        return vec(0, y);
    }
    // spawn from the right
    else if (x > width) {
        return vec(width, y);
    }
    // spawn from the top
    else {
        return vec(x, 0);
    }
}


export default Enemy