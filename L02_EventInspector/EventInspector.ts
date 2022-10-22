/*
Aufgabe: <L02_EventInspector>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <20.10.22>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/

namespace Inspector {
    window.addEventListener("load", handleLoad);
    
   
    function handleLoad(): void {
         document.addEventListener("mousemove", setInfoBox);
         
         document.addEventListener("click", logInfo);
         document.addEventListener("keyup", logInfo);

         document.body.addEventListener("click", logInfo);
         document.body.addEventListener("keyup", logInfo);

         document.querySelector("#div0").addEventListener("click", logInfo);
         document.querySelector("#div1").addEventListener("click", logInfo);
         document.querySelector("#div0").addEventListener("keyup", logInfo);
         document.querySelector("#div1").addEventListener("keyup", logInfo);
         
         document.querySelector("#button").addEventListener("click", custom);
         document.addEventListener("customEvent", logInfo);
         
    }
 
    function setInfoBox(_event: MouseEvent): void {
        
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let target: EventTarget = _event.target;
        let positon: string = "x: " + x + ", y: " + y + ", target: " + target;
        let span: HTMLSpanElement = document.getElementById("span");

        span.innerHTML = positon;
        span.style.left = x + 10 + "px";
        span.style.top = y + 15 + "px";
        
    }
    
    function logInfo(_event: Event): void {
        
            console.log(_event.type);
            console.log(_event.target);
            console.log(_event.currentTarget);
            console.log(_event);
        }

    function custom(_event: MouseEvent): void {
        let newEvent: CustomEvent = new CustomEvent("customEvent", {bubbles: true});
        let button: HTMLElement = document.querySelector("#button");
        button.dispatchEvent(newEvent);

    }
   
}