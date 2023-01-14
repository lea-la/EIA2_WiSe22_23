var L10_2_BirdHousePolymorphie;
(function (L10_2_BirdHousePolymorphie) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_2_BirdHousePolymorphie.Vector(0, 0);
            this.velocity = new L10_2_BirdHousePolymorphie.Vector(0, 0);
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
        draw() {
            console.log("draw");
        }
    }
    L10_2_BirdHousePolymorphie.Moveable = Moveable;
})(L10_2_BirdHousePolymorphie || (L10_2_BirdHousePolymorphie = {}));
//# sourceMappingURL=Moveable.js.map