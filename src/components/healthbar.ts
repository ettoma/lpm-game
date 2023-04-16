import { Canvas, Color, Engine, Font, Label, ScreenElement } from "excalibur";
import player from "../actors/player";

class Healthbar extends ScreenElement {
    score: number

    constructor(x: number, y: number, score: number, sideMenuWidth: number) {
        super({
            x: x - 100,
            y: y - 100,
            width: sideMenuWidth * 0.85,
            height: 50,
            // color: Color.White,
        });
        this.score = score;

    }


    onInitialize(_engine: Engine): void {
        this.addChild(new Label({
            font: new Font({
                size: 20
            }),
            name: "health_bar",
            text: this.score.toString(),
            x: this.width / 3,
            y: this.height / 2,
        }))


    }

    update(_engine: Engine): void {
        const current_children = this.children;
        for (let i: number = 0; i < current_children.length; i++) {
            if (current_children[i].name == "health_bar") {
                (current_children[i] as Label).text = "♥️ x " + player.health.toString();
            }
        }
    }


}


export default Healthbar