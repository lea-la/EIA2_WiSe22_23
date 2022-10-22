/*
Aufgabe: <L02_EventInspector>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <20.10.22>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var Inspector;
(function (Inspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("keyup", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);
        document.querySelector("#button").addEventListener("click", Custom);
    }
    function setInfoBox(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        var target = _event.target;
        var positon = "x: " + x + ", y: " + y + ", target: " + target;
        var span = document.getElementById("span");
        span.innerHTML = positon;
        span.style.left = x + 10 + "px";
        span.style.top = y + 15 + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function Custom(_event) {
        var event = new CustomEvent("someSpecialType", { bubbles: false, detail: { someKey: someData } });
        // send the event from some dispatcher
        someEventTarget.dispatchEvent(event);
    }
})(Inspector || (Inspector = {}));
//# sourceMappingURL=EventInspector.js.map