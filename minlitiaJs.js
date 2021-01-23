class Players{
    constructor(){

        this.fireState = 'nofire';
        this.direction = "right";
        this.health = 288;
        this.kills = 0;
        this.mousy = null;
       // this.positions = null;
       // this.velocities = null;
        this.name = null;

        this.body = new Man(-820,3300,45,180);

        console.clear();
        console.log(this.body.position)
        
        this.ani1 = createSprite(2070,300);
        this.ani1.addAnimation("a",rf1);
        this.ani1.scale = 1.35;

        this.ani2 = createSprite(2070,300);
        this.ani2.addAnimation("b",rf2);
        this.ani2.scale = 1.35;

        this.ani3 = createSprite(2070,300);
        this.ani3.addAnimation("c",lf1);
        this.ani3.scale = 1.35;

        this.ani4 = createSprite(2070,300);
        this.ani4.addAnimation("d",lf2);
        this.ani4.scale = 1.35;

        this.ani5 = createSprite(2070,300);
        this.ani5.addImage(rf3);
        this.ani5.scale = 1.35;

        this.ani6 = createSprite(2070,300);
        this.ani6.addImage(lf3);
        this.ani6.scale = 1.35;

        this.hand1 = createSprite(2070,300);
        this.hand1.addImage(s1);

        this.hand2 = createSprite(2070,300);
        this.hand2.addImage(s3);

        this.head1 = createSprite(2070,300);
        this.head1.addImage(s4);

        this.head2 = createSprite(2070,300);
        this.head2.addImage(s2);

        this.bulletGroup = new Group();
        
        /// default mode me sare animations invisible 

        this.ani1.visible = false;
        this.ani2.visible = false;
        this.ani3.visible = false;
        this.ani4.visible = false;
        this.ani5.visible = false;
        this.ani6.visible = false;


    }

    mummy(){

        let pos = this.body.position;
        
        this.hand1.x = pos.x+655;
        this.hand1.y = pos.y+315;
        this.hand1.scale = 0.34901000000000004;
        this.hand1.rotation = 7;

        this.hand2.x = pos.x+710;
        this.hand2.y = pos.y+305;
        this.hand2.scale =  0.95;
        this.hand2.rotation =-8;

        this.ani1.x = pos.x+790-110;
        this.ani1.y = pos.x+310+70;

        this.ani2.x = pos.x+790-110;
        this.ani2.y = pos.x+310+70;

        this.ani3.x = pos.x+790-110;
        this.ani3.y = pos.x+310+70;

        this.ani4.x = pos.x+790-110;
        this.ani4.y = pos.x+310+70;

        this.ani5.x = pos.x+790-110;
        this.ani5.y = pos.x+310+70;

        this.ani6.x = pos.x+790-110;
        this.ani6.y = pos.x+310+70;

        this.head1.x = pos.x+790-110;
        this.head1.y = pos.x-130+310+70;
        this.head1.scale = 0.79;

        this.head2.x = pos.x+790-110;
        this.head2.y = pos.x-130+310+70;
        this.head2.scale = 0.79;

        this.ani1.frameDelay = 2.5;
        this.ani2.frameDelay = 1;
        this.ani3.frameDelay = 2.5;
        this.ani4.frameDelay = 1;

        if(direction==="right"){

            if(this.body.velocity.y<0){

                this.ani1.visible = false;
                this.ani2.visible = true;

            }else{

                this.ani1.visible = true;
                this.ani2.visible = false;

            }

            this.ani3.visible = false;
            this.ani3.visible = false;

            this.head1.visible = false;
            this.head2.visible = true;

            angleMode(RADIANS); 
            translate(width / 2, height / 2);
            push();
            imageMode(CORNERS);
            translate(pos.x-705+790-110,pos.y-405+310+70);
            rotate(mousy);
            image(s3,0,0,s3.width,s3.height);
            pop();
      
            push();
            angleMode(RADIANS); 
            translate(width / 2, height / 2);
            imageMode(CORNER);
            translate(pos.x-1385+790-110,pos.y-700+310+70);
            rotate(mousy);
            image(gun1,30,0,s3.width,s3.height);
            pop();

            if(fire==="onfire"){

                if (frameCount % 5 === 0){
        
                bullet1();
        
                }
                
              }

        }

        if(direction==="left"){

            this.ani1.visible = false;
            this.ani2.visible = false;

            this.head1.visible = true;
            this.head2.visible = false;

            if(this.body.velocity.y<0){

                this.ani3.visible = false;
                this.ani4.visible = true;

            }else{

                this.ani1.visible = true;
                this.ani2.visible = false;
            }
            
            push();
            angleMode(RADIANS); 
            translate(width / 2, height / 2);
            imageMode(CORNER);
            translate(pos.x-645+790-110,pos.y-365+310+70);
            rotate(mousy);
            image(gun2,50,0,s3.width,s3.height);
            pop();
                        
            angleMode(RADIANS); 
            translate(width / 2, height / 2);
            push();
            imageMode(CORNER);
            translate(pos.x+-640+790-110,pos.y-370+310+70);
            rotate(mousy);
            image(s5,0,0,s3.width,s3.height);
            pop();
            
        }

   



    }

    bullet1(){

        let pos = this.body.position;
        angleMode(DEGREES);

        let bullet = createSprite(pos.x-15+790-110,pos.y-70+310+70,25,10);
        bullet.rotation = this.mousy;
        bullet.setSpeedAndDirection(75,bullet.rotation);
        bullet.shapeColor = 'white';

        fs1.play();
        fs1.setVolume(0.3);

        this.bulletGroup.add(bullet);

        if(this.bulletGroup.isTouching(spritesGroup)){
            this.bulletGroup.destroyEach();    
        
          }

    }

    bullet2(){

        let pos = this.body.position;
        angleMode(DEGREES);

        let bullet = createSprite(pos.x+40+790-110,pos.y-75+310+70,25,10);
        bullet.rotation = this.mousy;
        bullet.setSpeedAndDirection(75,bullet.rotation);
        bullet.shapeColor = 'white';

        fs1.play();
        fs1.setVolume(0.3);

        this.bulletGroup.add(bullet);

        if(this.bulletGroup.isTouching(spritesGroup)){
            this.bulletGroup.destroyEach();    
        
          }

    }
}