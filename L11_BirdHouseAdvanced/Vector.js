var L11_BirdHouseAdvanced;
(function (L11_BirdHouseAdvanced) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            let random1 = Math.floor(Math.random() * (1080 - 1) + 1);
            let random2 = Math.floor(Math.random() * (1920 - 1) + 1);
            this.x = random1;
            this.y = random2;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = 3;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    L11_BirdHouseAdvanced.Vector = Vector;
})(L11_BirdHouseAdvanced || (L11_BirdHouseAdvanced = {}));
//# sourceMappingURL=Vector.js.map