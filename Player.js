class Player{ 
    constructor( x, y, width, height, img){
        var options = {

            'isStatic': true, 
            'friction': 1.0  
        }

        this.body = Bodies.rectangle( x, y, width, height, options); 
        this.width = width; 
        this.height = height;
        this.image = loadImage(img);
        World.add(world, this.body);
        
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }

} 
