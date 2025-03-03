import MovingDirection from "./MovingDirection.js";
export default class Pacman {
    constructor(x, y, tileSize, velocity, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;

        this.curreetMovingDirection  = null;
        this.requestedMovingDirection = null;

        document.addEventListener("keydown",this.#keydown)
        
        this.#loadPacmanImages();
      }
   


      draw(ctx) {
        ctx.drawImage(
            this.pacmanImages[this.pacmanImageIndex],
            this.x, 
            this.y,
            this.tileSize,
            this.tileSize
        );
      }

      #loadPacmanImages() {
        const pacmanImage1 = new Image();
        pacmanImage1.src = "../images/pac0.png";

        const pacmanImage2 = new Image();
        pacmanImage2.src = "../images/pac1.png";

        const pacmanImage3 = new Image();
        pacmanImage3.src = "../images/pac2.png";

        const pacmanImage4 = new Image();
        pacmanImage4.src = "../images/pac1.png";

        this.pacmanImages = [
          pacmanImage1,
          pacmanImage2, 
          pacmanImage3,
          pacmanImage4,
        ];

     this.pacmanImageIndex = 0;
  }

  #keydown =(event)=>{
    // Represents Up
    if(event.key === 38){
    }
    // Represents Down
    if(event.key === 40){
    }
    // Represents left
    if(event.key === 37){
    }
    // Represents right
    if(event.key === 39){
    }
  }
}

