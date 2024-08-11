import TileMap from "./TileMap.js";

const tileSize = 32;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);
function gameloop(){
  tileMap.draw(ctx);

}

tileMap.setCanvasSize(canvas);
setInterval(gameloop, 1000 / 75);