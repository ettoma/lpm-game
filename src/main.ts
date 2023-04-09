
import level1 from "./scenes/1"
import menu from "./scenes/menu"
import Game from "./engine/engine"



Game.addScene("level1", level1)
Game.addScene("menu", menu)


Game.start()
Game.goToScene("menu")
