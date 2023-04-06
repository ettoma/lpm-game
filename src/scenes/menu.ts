import { Actor, Canvas, Engine, Scene, ScreenElement, Color, Label, Font } from "excalibur";


const menu = new Scene

class StartButton extends ScreenElement {
    constructor() {
        super({
            x: 250,
            y: 250,
            width: 50,
            height: 50,
            color: Color.Green,

        });
    }

    onInitialize(_engine: Engine): void {
        this.on("pointerenter", () => {
            alert("yoyoyo")
        })

        this.addChild(new Label({
            font: new Font({
                size: 20
            }), text: "Start"
        }))
    }
}



menu.add(new StartButton())

export default menu