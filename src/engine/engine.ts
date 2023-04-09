import { Engine, Physics, vec } from "excalibur";

Physics.useRealisticPhysics();
// Physics.acc = vec(0, 300);

const Game = new Engine({
    width: 800,
    height: 800,
})



export default Game