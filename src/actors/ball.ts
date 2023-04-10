import { Actor, CollisionType, Color, Engine, PreCollisionEvent, vec, Animation, Graphic } from "excalibur";
import Game from "../engine/engine";
import { Images } from "../resources";



class Ball extends Actor {
    constructor(x, y) {
        super({
            name: "ball",
            x: x,
            y: y,
            width: 10,
            height: 10,
            color: Color.Magenta,
            collisionType: CollisionType.Active,
            acc: vec(0, 100),
            rotation: Math.PI / 3
        })
        this.on('precollision', (evt) => this.onPreCollision(evt));
    }

    onInitialize(_engine: Engine): void {
        this.graphics.use(Images.Sword.toSprite())
    }


    // It will trigger every time the actor is colliding with anything with physics
    private onPreCollision(evt: PreCollisionEvent) {
        console.log("colliding with " + evt.other.name)

        this.kill() // removes the actor from the scene
    }
}


export default Ball