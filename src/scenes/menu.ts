import { Actor, Canvas, Engine, Scene, ScreenElement, Color, Label, Font, Vector } from "excalibur";
import Game from "../engine/engine";


const menu = new Scene

class StartButton extends ScreenElement {
    constructor() {
        super({
            y: Game.drawHeight / 2 - 25,
            x: Game.drawWidth / 2 - 100,
            width: 100,
            height: 25,
            color: Color.Green,

        });
    }

    onInitialize(_engine: Engine): void {
        this.on("pointerup", () => {
            Game.goToScene("character_selection")
        })

        this.addChild(new Label({
            font: new Font({
                size: 20
            }),
            text: "Start",
            x: 20,
            y: 20
        }))
    }
}

menu.add(new StartButton())


export default menu