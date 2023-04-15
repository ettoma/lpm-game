
import level1 from "./scenes/1"
import menu from "./scenes/menu"
import Game from "./engine/engine"
import { loader } from "./resources"
import characterSelection from "./scenes/character_selection"



Game.addScene("level1", level1)
Game.addScene("menu", menu)
Game.addScene("character_selection", characterSelection)


Game.start(loader)
console.log(loader.isLoaded())
Game.goToScene("menu")
