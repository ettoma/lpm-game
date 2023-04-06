import { Engine } from "excalibur"
import player from "./player"
import level1 from "./scenes/1"
import menu from "./scenes/menu"

const game = new Engine({
  width: 800,
  height: 800,
})

//* Add all players to the scene before running the game
game.addScene("level1", level1)
game.addScene("menu", menu)


game.start()

game.goToScene("menu")
