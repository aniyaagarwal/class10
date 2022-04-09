class Sprite{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.h = 50;
        this.w = 50;
        this.color = color;
    }

    display(){
        fill(this.color);
        rect(this.x, this.y, this.h, this.w);
    }
}