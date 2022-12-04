namespace L08_2_BirdHouse {
    interface Vector {
     x: number;
     y: number;
    }
 
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.60;
    
 
    function handleLoad(_event: Event): void {
     let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
     if (!canvas)
     return;
     crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
 
     let horizon: number = crc2.canvas.height * golden;
     drawBackground();
     drawSun({x: 640, y: 950});
     drawCloud2({x: 280, y: 160}, {x: 110, y: 60});
     drawCloud({x: 580, y: 100}, {x: 150, y: 50});
     drawCloud({x: 760, y: 150}, {x: 120, y: 50});
     drawCloud({x: 180, y: 130}, {x: 100, y: 50});
     drawCloud2({x: 550, y: 190}, {x: 90, y: 50});
     drawCloud2({x: 710, y: 190}, {x: 110, y: 90});
     drawMountains({x: 0 , y: horizon}, 75, 200, "grey", "white");
     
   
     
     drawSnow();
     drawSnowman();
     drawTree();
     drawBirdHouse();
     drawBird();
     drawSnowflakes();

    

  
    }
 
    function drawBackground(): void {
 
     let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
     gradient.addColorStop(0.3, "#7FA0B8");
     gradient.addColorStop(golden, "#ff9a47");
     gradient.addColorStop(0.9, "#546374");
 
     crc2.fillStyle = gradient;
     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
     
    }
    
    
        
    
    function drawSun(_position: Vector): void {
     
     let r1: number = 30;
     let r2: number = 120;
     let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2 );
     gradient.addColorStop(0, "HSLA(0, 100%, 100%,1");
     gradient.addColorStop(0.5, "HSLA(17, 100%, 62%, 0.50)");
     gradient.addColorStop(1, "HSLA(17, 100%, 62%, 0");
 
     crc2.save();
     crc2.translate(_position.x, _position.y);
     crc2.fillStyle = gradient;
     crc2.arc(0, 0, r2, 0, 2 * Math.PI);
     crc2.fill();
     crc2.restore();
 
 
 
    }
 
    
    function drawCloud(_position: Vector, _size: Vector): void {
 
     let nParticles: number = 40;
     let radiusParticle: number = 40;
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
    
    
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 100;
        let stepMax: number = 250;
        let x: number = 0;
     
     
        crc2.save();
        crc2.translate(_position.x, _position.y);
     
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, _max);
     
        do {
             x += stepMin + Math.random () * (stepMax - stepMin);
             let y: number =  - _min - Math.random () * (_max - _min);
     
             crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
     
        crc2.lineTo(x, 0);
        crc2.closePath();
     
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0.5, _colorLow);
        gradient.addColorStop(1, _colorHigh);
     
        crc2.fillStyle = gradient;
        crc2.fill();
     
        crc2.restore();
     
        }

    function drawSnow(): void {
            
        crc2.fillStyle = "hsla(197, 21%, 82%, 1)";
        crc2.fillRect(0, crc2.canvas.height, crc2.canvas.width, -770);
        }
    

    function drawSnowman(): void {

        crc2.beginPath();
        crc2.arc(900, 1500, 140, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        
        crc2.beginPath();
        crc2.arc(900, 1300, 110, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(900, 1140, 80, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(870, 1120, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(930, 1120, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        //Augen

        crc2.beginPath();
        crc2.arc(903, 1180, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(880, 1170, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(925, 1170, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        //Knöpfe

        crc2.beginPath();
        crc2.arc(900, 1350, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(900, 1300, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        //Hut

        crc2.fillStyle = "black";
        crc2.fillRect(855, 1000, 80, 80);
        crc2.fillRect(840, 1060, 120, 20);
    }   
    
    function drawTree(): void {

        crc2.save();
        crc2.beginPath();
        crc2.translate(0, -330);
        crc2.moveTo(0, 800);
        crc2.bezierCurveTo(60 , 950, 100, 950, 200, 1015);
        crc2.lineTo(0 , 1015);
        crc2.closePath();
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(0, -330);
        crc2.moveTo(0, 815);
        crc2.bezierCurveTo(90 , 1150, 130, 1150, 400, 1315);
        crc2.lineTo(0 , 1315);
        crc2.closePath();
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.restore();


        crc2.save();
        crc2.beginPath();
        crc2.translate(0, -330);
        crc2.moveTo(0, 1015);
        crc2.bezierCurveTo(90 , 1450, 110, 1450, 500, 1615);
        crc2.lineTo(0 , 1615);
        crc2.closePath();
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.restore();

    }
 
    function drawBirdHouse(): void {

        crc2.save();
        crc2.lineWidth = 8;
        crc2.strokeStyle = "black";
        crc2.beginPath();
        crc2.moveTo(200, 1140);
        crc2.lineTo(200, 1350);
        crc2.stroke();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(30, 1500);
        crc2.lineTo(200, 1340);
        crc2.lineTo(370, 1500);
        crc2.closePath();
        crc2.fillStyle = "#b19059";
        crc2.fill();
        crc2.restore();


        crc2.save();
        crc2.lineWidth = 20;
        crc2.strokeStyle = "#b19059";
        crc2.strokeRect(70, 1490, 250, 230);
    }

    function drawBird(): void {

       
        
            for (let index: number = 0; index < 20; index++) {
                let x: number = Math.floor(Math.random() * (800 - (-50)) - 50);
                let y: number = Math.floor(Math.random() * (1900 - (100)) - 100);
                let scale: number = (Math.random() * (0.4 - 0.2) + 0.2);
                
           
                crc2.lineWidth = 1;
               
            // Schnabel
                crc2.save();
                crc2.beginPath();
                crc2.translate(x, y);
                crc2.scale(scale, scale);
                crc2.moveTo(800, 400);
                crc2.lineTo(798, 415);
                crc2.lineTo(832, 410);
                crc2.closePath();
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.restore();
    
            // Körper
                crc2.save();
                crc2.beginPath();
                crc2.translate(x, y);
                crc2.scale(scale, scale);
                crc2.moveTo(800, 400);
                crc2.lineTo(798, 415);
                crc2.bezierCurveTo(710, 470, 710, 460, 540, 430);
                crc2.lineTo(440, 430);
                crc2.lineTo(455, 405);
                crc2.bezierCurveTo(540, 410, 540, 420, 610, 400);
                crc2.bezierCurveTo(590, 330, 590, 340, 540, 300);
                crc2.bezierCurveTo(580, 260, 580, 270, 615, 290);
                crc2.lineTo(615, 240);
                crc2.bezierCurveTo(625, 230, 625, 220, 750, 320);
                crc2.lineTo(740, 390);
                crc2.bezierCurveTo(780, 375, 780, 380, 800, 400);
                crc2.closePath ();
    
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 100, 0, 400);
                gradient.addColorStop(0.5, "#808080");
                gradient.addColorStop(1, "#140505");
                crc2.fillStyle = gradient;
                crc2.fill();
                crc2.restore();
           
           
             //Auge
                crc2.save();
                crc2.beginPath();
                crc2.translate(x, y);
                crc2.scale(scale, scale);
                crc2.arc(780, 400, 5, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = "yellow";
                crc2.fill();
    
                crc2.beginPath();
                crc2.arc(780, 400, 3, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = "black";
                crc2.fill();
    
            
    
                crc2.restore();
            }
        
        }

    function drawSnowflakes(): void {
            
    
            for (let index: number = 0; index < 1500; index++) {
                let x: number = Math.floor(Math.random() * (1080 - 1) + 1);
                let y: number = Math.floor(Math.random() * (1920 - 1) + 1);
                let scale: number = Math.floor(Math.random() * (3 - 1) + 1);
    
                
                
    
                crc2.save();
                crc2.scale(scale, scale);
                crc2.beginPath();
                crc2.translate(x, y);
                crc2.fillStyle = "white";
                crc2.arc(0, 0, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
                crc2.restore();
            }
    }

 

}