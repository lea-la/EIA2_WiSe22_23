var L10_2_BirdHousePolymorphie;
(function (L10_2_BirdHousePolymorphie) {
    class Snowflake extends L10_2_BirdHousePolymorphie.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_2_BirdHousePolymorphie.Vector(0, 0);
            this.velocity = new L10_2_BirdHousePolymorphie.Vector(0, 0);
            this.velocity.random(100, 100);
            this.size = _size;
        }
        move(_timeslice) {
            super.move(0.010);
        }
        draw() {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
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
    L10_2_BirdHousePolymorphie.Snowflake = Snowflake;
})(L10_2_BirdHousePolymorphie || (L10_2_BirdHousePolymorphie = {}));
//# sourceMappingURL=Snowflake.js.map