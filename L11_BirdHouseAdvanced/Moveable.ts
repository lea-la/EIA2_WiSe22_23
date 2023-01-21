namespace L11_BirdHouseAdvanced {

export abstract class Moveable {
    public position: Vector;
    public velocity: Vector;

    protected constructor(_position?: Vector) {

        if (_position)
        this.position = _position.copy();
        else
        this.position = new Vector(0, 0);

        this.velocity = new Vector(0, 0);

    }

    public move(_timeslice: number): void {
        
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        let offset: Vector = this.velocity.copy();
        offset.scale(_timeslice);
        this.position.add(offset);

        if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
        if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
        if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
    }

    public abstract draw(): void;
}


}