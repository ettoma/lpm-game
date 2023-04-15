import { Actor, Canvas, Engine, Scene, ScreenElement, Color, Label, Font, Vector, vec, FontUnit } from "excalibur";
import player from "../actors/player";
import Game from "../engine/engine";


export const side_menu_width_ratio = 0.2;
const font_size = 20;

class SideMenu extends Actor {
    constructor(pos : Vector, width : number, height : number) {
        super({
            name: "side_menu",
            x: pos.x,
            y: pos.y,
            width: width,
            height: height,
            color: Color.DarkGray,

        });
        // this.on('precollision', (evt) => this.onPreCollision(evt));
    };

    update() {
        const current_children = this.children;
        for (let i : number = 0; i < current_children.length; i++) {
            if (current_children[i].name == "health_bar") {
                (current_children[i] as Label).text = "Health: " + player.health.toString();
            }
        }
    }

    onInitialize(_engine: Engine): void {
        // TODO: add more elemnts like a score board
        // TODO: make a UI container for tex fields
        this.addChild(new Label({
            font: new Font({
                size: font_size
            }),
            name: "health_bar",
            text: "Health: " + player.health.toString(),
            x: this.width * -0.5,
            y: this.height * -0.25
        }))
    }
}

// This abomination of a position is because the origin when drawing is in the center...
const side_menu = new SideMenu(vec(Game.drawWidth - (Game.drawWidth * side_menu_width_ratio) / 2,
                                    Game.drawHeight / 2), 
                                Game.drawWidth * side_menu_width_ratio,
                                Game.drawHeight);


export default side_menu;