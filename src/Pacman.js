export default class Pacman {
    constructor(x, y, tileSize, velocity, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;
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
        pacmanImage1.src = "../image/pac0.png";

        const pacmanImage2 = new Image();
        pacmanImage2.src = "../image/pac1.png";

        const pacmanImage3 = new Image();
        pacmanImage3.src = "../image/pac2.png";

        const pacmanImage4 = new Image();
        pacmanImage4.src = "../image/pac1.png";

        this.pacmanImages = [
          pacmanImage1,
          pacmanImage2, 
          pacmanImage3,
          pacmanImage4
        ];

     this.pacmanImageIndex = 2;
  }
}

