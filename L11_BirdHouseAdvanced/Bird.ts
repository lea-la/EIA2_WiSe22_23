namespace L11_BirdHouseAdvanced {

    export class Bird extends Moveable {

        
       public size: number;

       public constructor(_size: number, _position?: Vector) {
            super(_position);

            if (_position)
            this.position = _position.copy();
            else
            this.position = new Vector(0, 0);
            
            this.velocity = new Vector(0, 0);
            this.velocity.random(0, 200);
            this.size = _size;
        }

       public draw(): void {
            
            let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

            crc2.lineWidth = 1;
               
            // Schnabel
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.moveTo(800, 400);
            crc2.lineTo(798, 415);
            crc2.lineTo(832, 410);
            crc2.closePath();
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.restore();
    
            // Körper
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.moveTo(800, 400);
            crc2.lineTo(798, 415);
            crc2.bezierCurveTo(710, 470, 710, 460, 540, 430);
            crc2.lineTo(440, 430);
            crc2.lineTo(455, 405);
            crc2.bezierCurveTo(540, 410, 540, 420, 610, 400);
            crc2.bezierCurveTo(590, 330, 590, 340, 540, 300);
            crc2.bezierCurveTo(580, 260, 580, 270, 615, 290);
            crc2.lineTo(615, 240);
            crc2.bezierCurveTo(625, 230, 625, 220, 750, 320);
            crc2.lineTo(740, 390);
            crc2.bezierCurveTo(780, 375, 780, 380, 800, 400);
            crc2.closePath ();
    
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 100, 0, 400);
            gradient.addColorStop(0.5, "#808080");
            gradient.addColorStop(1, "#140505");
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
           
           
             //Auge
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(780, 400, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "yellow";
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(780, 400, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
    
            
    
            crc2.restore();
            }
        
        

        public move(_timeslice: number): void {
          
            super.move(0.004);
            
            let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

            
            if (this.position.x < -500)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += -400;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

            

            
        }

    }
}
