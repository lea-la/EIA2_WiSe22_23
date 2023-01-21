var L11_BirdHouseAdvanced;
(function (L11_BirdHouseAdvanced) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_BirdHouseAdvanced.Vector(0, 0);
            this.velocity = new L11_BirdHouseAdvanced.Vector(0, 0);
        }
        move(_timeslice) {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let offset = this.velocity.copy();
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
    }
    L11_BirdHouseAdvanced.Moveable = Moveable;
})(L11_BirdHouseAdvanced || (L11_BirdHouseAdvanced = {}));
//# sourceMappingURL=Moveable.js.map