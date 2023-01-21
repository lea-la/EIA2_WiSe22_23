namespace L11_BirdHouseAdvanced {

    export class Vector {
        x: number;
        y: number;
    
        public constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }
    
        public set(_x: number, _y: number): void {
            let random1: number = Math.floor(Math.random() * (1080 - 1) + 1);
            let random2: number = Math.floor(Math.random() * (1920 - 1) + 1);
            this.x = random1;
            this.y = random2;
        }
    
        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
    
        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    
        public random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = 3;
    
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        public copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }
    
}

