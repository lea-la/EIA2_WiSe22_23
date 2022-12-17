var L09_2_BirdHouseClasses;
(function (L09_2_BirdHouseClasses) {
    class Snowflake {
        constructor(_size) {
            this.position = new L09_2_BirdHouseClasses.Vector(0, 0);
            this.velocity = new L09_2_BirdHouseClasses.Vector(0, 0);
            this.velocity.random(100, 100);
            this.size = _size;
        }
        move(_timeslice) {
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let offset = new L09_2_BirdHouseClasses.Vector(this.velocity.x, this.velocity.y);
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
    L09_2_BirdHouseClasses.Snowflake = Snowflake;
})(L09_2_BirdHouseClasses || (L09_2_BirdHouseClasses = {}));
//# sourceMappingURL=Snowflake.js.map