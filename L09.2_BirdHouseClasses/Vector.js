var L09_2_BirdHouseClasses;
(function (L09_2_BirdHouseClasses) {
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
    }
    L09_2_BirdHouseClasses.Vector = Vector;
})(L09_2_BirdHouseClasses || (L09_2_BirdHouseClasses = {}));
//# sourceMappingURL=Vector.js.map