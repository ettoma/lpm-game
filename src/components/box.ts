import { Actor, Canvas } from "excalibur";


class Box extends Actor {
    bgColour: string

    constructor({ width, height, x = 0, y = 0, bgColour }: {
        width: number,
        height: number,
        bgColour: string,
        x?: number,
        y?: number,
    }) {
        super({
            width: width,
            height: height,
            x: x,
            y: y
        })

        this.bgColour = bgColour
    }

    onInitialize() {
        const canvas = new Canvas({
            width: this.width,
            height: this.height,
            cache: true,

            draw: (ctx) => {
                ctx.fillStyle = this.bgColour;
                ctx.fillRect(0, 0, this.width, this.height);
                ctx.fill();
            }
        })
        this.graphics.use(canvas)


    }
}


export default Box;