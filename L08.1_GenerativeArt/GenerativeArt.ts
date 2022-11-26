namespace L08_GenerativeArt {
    interface Vector {
     x: number;
     y: number;
    }
 
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.61;
 
    function handleLoad(_event: Event): void {
     let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
     if (!canvas)
     return;
     crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
 
     let horizon: number = crc2.canvas.height * golden;
     drawBackground();
     drawSun({x: 640, y: 205});
     drawCloud2({x: 280, y: 160}, {x: 110, y: 60});
     drawCloud({x: 580, y: 100}, {x: 150, y: 50});
     drawCloud({x: 760, y: 150}, {x: 120, y: 50});
     drawCloud({x: 180, y: 130}, {x: 100, y: 50});
     drawCloud2({x: 550, y: 190}, {x: 90, y: 50});
     drawCloud2({x: 710, y: 190}, {x: 110, y: 90});
     drawWaves({x: 0 , y: crc2.canvas.height - 50}, 120, 150);
     drawWaves({x: 0 , y: crc2.canvas.height}, 130 , 150);
     drawSand ({x: 0, y: 460}, 70, 90 );
    

  
    }
 
    function drawBackground(): void {
 
     let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
     gradient.addColorStop(0.3, "#7FA0B8");
     gradient.addColorStop(golden, "#FFC9BD");
     gradient.addColorStop(0.9, "#546374");
 
     crc2.fillStyle = gradient;
     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
     
    }
    
    
        
    
    function drawSun(_position: Vector): void {
     
     let r1: number = 30;
     let r2: number = 120;
     let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2 );
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
 
    
    function drawCloud(_position: Vector, _size: Vector): void {
 
     let nParticles: number = 40;
     let radiusParticle: number = 30;
     let particle: Path2D = new Path2D;
     let gradient: CanvasGradient = crc2.createRadialGradient (0, 0, 0, 0, 0, radiusParticle);
 
     particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
     gradient.addColorStop(0, "HSLA(0, 0%, 70%, 0.5)");
     gradient.addColorStop(1, "HSLA(0, 0%, 90%, 0)");
 
     crc2.save();
     crc2.translate(_position.x, _position.y);
 
     crc2.fillStyle = gradient;
     
     for (let draw: number = 0; draw < nParticles; draw++) {
         crc2.save();
         let x: number = (Math.random() - 0.5) * _size.x;
         let y: number = (Math.random() * _size.y);
         crc2.translate(x, y);
         crc2.fill(particle); 
         crc2.restore(); 
     }
     crc2.restore();
     
    }
    function drawCloud2(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);
    
        let nParticles: number = 40;
        let radiusParticle: number = 30;
        let particle: Path2D = new Path2D;
        let gradient: CanvasGradient = crc2.createRadialGradient (0, 0, 0, 0, 0, radiusParticle);
    
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 0%, 90%, 0.15)");
        gradient.addColorStop(1, "HSLA(10.29, 61.4%, 88.82%, 0)");
    
        crc2.save();
        crc2.translate(_position.x, _position.y);
    
        crc2.fillStyle = gradient;
        
        for (let draw: number = 0; draw < nParticles; draw++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle); 
            crc2.restore(); 
        }
        crc2.restore();
        
       }
 
    function drawSand(_position: Vector, _widthBack: number, _widthFront: number): void {
     crc2.beginPath();
     crc2.moveTo(_position.x , _position.y);
     crc2.lineTo(_position.x, _position.y + 100);
     crc2.lineTo(_position.x + 400 , _position.y + 100);
     crc2.closePath();
 
     let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
     gradient.addColorStop(0, `rgb(${Math.floor(255 * Math.random())}, ${Math.floor(230 * Math.random())}, ${Math.floor(180 * Math.random())})`);
     gradient.addColorStop(0.8, `rgb(${Math.floor(230 * Math.random())}, ${Math.floor(200 * Math.random())}, ${Math.floor(210 * Math.random())})`); 

    
      
     crc2.fillStyle = gradient;
     crc2.fill();

     crc2.strokeStyle = "#FEE2B8";
     crc2.stroke();
    }
    
    function drawWaves(_position: Vector, _min: number, _max: number): void {
   
    let stepMin: number = 10;
    let stepMax: number = 150;
    let x: number = 0;
 
 
    crc2.save();
    crc2.translate(_position.x, _position.y);
 
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(0, _max);
 
    do {
         x += stepMin + Math.random () * (stepMax - stepMin);
         let y: number =  - _min - Math.random () * (_max - _min);
 
         crc2.bezierCurveTo(x + 60, y + 60, x + 10, y + 10, x, y );
    } while (x < crc2.canvas.width);
 
    crc2.lineTo(x , 0);
    crc2.closePath();
   
 
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
    gradient.addColorStop(0, "hsla(192.12, 100%, 38.82%, 1)");
    gradient.addColorStop(1, "hsla(186.27, 100%, 86.86%, 1)");
 
    crc2.fillStyle = gradient;
    crc2.fill();
    
 
    crc2.restore();
 
    }

   
 }