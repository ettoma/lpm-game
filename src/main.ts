
import level1 from "./scenes/1"
import menu from "./scenes/menu"
import Game from "./engine/engine"
import { loader } from "./resources"


Game.addScene("level1", level1)
Game.addScene("menu", menu)

Game.start(loader)

console.log(loader.isLoaded())
Game.goToScene("level1")

Game.input.pointers.on("move", (event) => {
    // Best to update the player within its class to avoid dependencies/complexity
    // player.pos.x = event.worldPos.x
    // player.pos.y = event.worldPos.y
    
  })
  
