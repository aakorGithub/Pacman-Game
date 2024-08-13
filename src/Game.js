import TileMap from "./TileMap.js";

const tileSize = 32;
const velocity = 1;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity);


function gameloop(){
  tileMap.draw(ctx);
  pacman.draw(ctx);

}

tileMap.setCanvasSize(canvas);
setInterval(gameloop, 1000 / 75);