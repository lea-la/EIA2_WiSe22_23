namespace L10_2_BirdHousePolymorphie {


    export class Snowflake extends Moveable {
        size: number;

        constructor(_size: number, _position?: Vector) {
            super(_position);

            if (_position)
            this.position = _position.copy();
            else
            this.position = new Vector(0, 0);
            
        
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 100);
            this.size = _size;
        }

        move(_timeslice: number): void {
            

            super.move(0.010);

            
        }

        draw(): void {

            let canvas: HTMLCanvasElement = document.querySelector("canvas");
            let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

            crc2.save();
            crc2.scale(this.size, this.size);
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "white";
            crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();

        }
    }
}