var L08_GenerativeArt;
(function (L08_GenerativeArt) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.61;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        drawBackground();
        drawSun({ x: 640, y: 205 });
        drawCloud2({ x: 280, y: 160 }, { x: 110, y: 60 });
        drawCloud({ x: 580, y: 100 }, { x: 150, y: 50 });
        drawCloud({ x: 760, y: 150 }, { x: 120, y: 50 });
        drawCloud({ x: 180, y: 130 }, { x: 100, y: 50 });
        drawCloud2({ x: 550, y: 190 }, { x: 90, y: 50 });
        drawCloud2({ x: 710, y: 190 }, { x: 110, y: 90 });
        drawMountains({ x: 0, y: crc2.canvas.height - 50 }, 120, 150);
        drawMountains({ x: 0, y: crc2.canvas.height }, 130, 150);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.3, "#7FA0B8");
        gradient.addColorStop(golden, "#FFC9BD");
        gradient.addColorStop(0.9, "#546374");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 120;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0.1, "HSLA(0, 100%, 100%,1");
        gradient.addColorStop(0.5, "HSLA(0, 100%, 100%,0.4");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%,0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let radiusParticle = 30;
        let particle = new Path2D;
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 0%, 70%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 0%, 90%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let draw = 0; draw < nParticles; draw++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawCloud2(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let radiusParticle = 30;
        let particle = new Path2D;
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 0%, 90%, 0.15)");
        gradient.addColorStop(1, "HSLA(10.29, 61.4%, 88.82%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let draw = 0; draw < nParticles; draw++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawStreet(_position, _widthBack, _widthFront) {
        crc2.beginPath();
        crc2.moveTo(_position.x + _widthBack / 2, _position.y);
        crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(_position.x - _widthBack / 2, _position.y);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkgrey");
        gradient.addColorStop(0.6, "black");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawMountains(_position, _min, _max) {
        console.log("Mountains");
        let stepMin = 10;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, _max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        //i, cnvs.height/2-Math.sin(i*(Math.PI/180))*50)
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, "hsla(192.12, 100%, 38.82%, 0.3)");
        gradient.addColorStop(1, "hsla(186.27, 100%, 86.86%, 0.3)");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
})(L08_GenerativeArt || (L08_GenerativeArt = {}));
//# sourceMappingURL=GenerativeArt.js.map