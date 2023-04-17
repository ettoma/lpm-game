import { Actor, Canvas, Color, Font, Label, Vector, vec, Entity, FontStyle } from "excalibur";
import player from "../actors/player";
import Game from "../engine/engine";
import Healthbar from "../components/healthbar";
import { getTextWidth } from "../utils/utils";


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
            color: Color.DarkGray,

        });
        this.graphics.use(canvas)
        this.playerName = playerName;
        
        // this.on('precollision', (evt) => this.onPreCollision(evt));

    }
    mountElement(element : Entity) : Entity {
        return this.addChild(element);
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



initializeSideMenu(side_menu);



function initializeSideMenu(sideMenu : SideMenu) : void {
    let fontSize = 20;
    let font = new Font({ size: fontSize, bold: true, family: "verdana", style: FontStyle.Normal });
    let playerNameLabel : Label = new Label({
        font: font,
        text: sideMenu.playerName,
        // TODO need to find a way to have responsive positioning, not hardcoded coordinates
        x: getTextWidth(sideMenu.playerName, font.style, font.size.toString(), font.family) / -2,
        y: -300,
        
    });



    sideMenu.mountElement(playerNameLabel);
    sideMenu.mountElement(new Healthbar(sideMenu.width * -0.6, sideMenu.height * -0.3, player.health, sideMenu.width));

}



export default side_menu;