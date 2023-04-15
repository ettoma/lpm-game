import { Actor, Color, CollisionType, PreCollisionEvent, Vector, vec } from "excalibur"
import Game from "../engine/engine";


export class Player extends Actor {
  health : number = 10;
  constructor(pos: Vector) {
      super({
          name: "player",
          x: pos.x,
          y: pos.y,
          width: 30,
          height: 30,
          color: Color.Chartreuse,
          collisionType: CollisionType.Passive,
      });
      this.on('precollision', (evt) => this.onPreCollision(evt));
  };

  private onPreCollision(evt: PreCollisionEvent) {
      if (evt.other.name == "enemy") {
          // TODO: reduce health
          this.health -=1;
          if (this.health < 0) {
            // TODO: handle when player loses
          }
      }
  }

  update() {
    player.pos = Game.input.pointers.primary.lastScreenPos;
  }
}

const player = new Player(vec(20,20));


export default player;