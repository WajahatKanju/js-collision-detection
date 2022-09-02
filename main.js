const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = window.innerWidth);
const CANVAS_HEIGHT = (canvas.height = window.innerHeight);

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

class Rectangle {
  constructor(x, y, width, height, color = "red") {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.draw();
  }
}
let rect = new Rectangle(250, 250, 200, 200);

class InteractiveRectange extends Rectangle {
  initial_color = this.color;
  update() {
    // this.x = mouse.x;
    // this.y = mouse.y;
    this.x = mouse.x - this.width / 2;
    this.y = mouse.y - this.height /2 ;
    if (
      (this.x + this.width > rect.x &&
      this.y + this.height > rect.y ) && (
        this.x < rect.x + rect.width &&
        this.y < rect.y + rect.height 
      )
      // && this.y + this.height < rect.y + rect.height
    ) {
      this.color = "red";
      rect.color = "blue";
    } else {
      this.color = "black";
      rect.color = 'black'
    }
    


    this.draw();
  }
}

let mouse_rect = new InteractiveRectange(100, 300, 50, 50);

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  rect.update();
  mouse_rect.update();
};

animate();
