import { Actor, Canvas, Color, Font, Label, Vector, vec } from "excalibur";
import player from "../actors/player";
import Game from "../engine/engine";
import Healthbar from "../components/healthbar";


export const side_menu_width_ratio = 0.2;

class SideMenu extends Actor {

    playerName: string;

    constructor(pos: Vector, width: number, height: number, playerName: string) {
        super({
            name: "side_menu",
            x: pos.x,
            y: pos.y,
            width: width,
            height: height,
            // color: Color.DarkGray,

        });
        this.graphics.use(canvas)

        this.playerName = playerName;

        this.addChild(new Healthbar(0, 0, player.health, this.width));

        this.addChild(new Label({
            font: new Font({
                size: 20,
                bold: true,
            }),
            text: this.playerName,
            // TODO need to find a way to have responsive positioning, not hardcoded coordinates
            x: -75,
            y: -300,
        }));
        // this.on('precollision', (evt) => this.onPreCollision(evt));

    }
}

const canvas = new Canvas({
    width: 200,
    height: Game.drawHeight,
    cache: true,
    opacity: 0.5,

    draw: (ctx) => {
        ctx.fillStyle = 'white';
        ctx.roundRect(0, Game.drawHeight * 0.075, 200, Game.drawHeight * 0.85, 25);

        ctx.fill();
    }
})



// This abomination of a position is because the origin when drawing is in the center...
const side_menu = new SideMenu(
    vec(Game.drawWidth - (Game.drawWidth * side_menu_width_ratio) / 2,
        Game.drawHeight / 2),
    Game.drawWidth * side_menu_width_ratio,
    Game.drawHeight,
    "DragonpayLover");



export default side_menu;