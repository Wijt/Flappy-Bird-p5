class Bird {
    constructor(x,y) {
        this.pos = {x: x, y: y};
        this.radius = BIRD_R,

        this.live = true;
        this.point = 0;
        this.velocity = 0;
    }

    show(){
        pop();
            fill(color(BIRD_COLOR));
            ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
        push();
    }

    jump(){
        this.velocity = 0;
        this.velocity -= BIRD_JUMP_POWER;
    }

    die(){
        this.live = false;
        try { soundEffects[2].play(); } catch(e) {}
        console.warn("HIT!");
        try { soundEffects[1].play(); } catch(e) {}
    }

    update() {
        if(this.live){
            if (this.pos.y < 0 || this.pos.y > height - GROUND_HEIGHT){
                bird.die();
            }
        }

        if(this.pos.y < height - GROUND_HEIGHT){
            this.pos.y += this.velocity;
            this.velocity += 0.4;
        }else{
            this.pos.y = height - GROUND_HEIGHT;
        }
    }

}