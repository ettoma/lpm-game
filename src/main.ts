
import level1 from "./scenes/1"
import menu from "./scenes/menu"
import Game from "./engine/engine"
import { loader } from "./resources"

Game.addScene("level1", level1)
Game.addScene("menu", menu)

Game.start(loader)

Game.goToScene("level1")


