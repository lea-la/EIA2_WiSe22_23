/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <15.10.22>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var Words;
(function (Words) {
    var subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte);
    //console.log(praedikate);
    //console.log(objekte);
    for (var i = subjekte.length; i >= 1; i--) {
        //console.log (i);
        var saetze = getVerse(subjekte, praedikate, objekte);
        console.log(saetze);
    }
    function getVerse(_subjekte, _praedikate, _objekte) {
        var randomWord = Math.floor(Math.random() * subjekte.length);
        var randomWord2 = Math.floor(Math.random() * subjekte.length);
        var randomWord3 = Math.floor(Math.random() * subjekte.length);
        var text = subjekte[randomWord] + "  " + praedikate[randomWord2] + "  " + objekte[randomWord3];
        subjekte.splice(randomWord, 1);
        praedikate.splice(randomWord2, 1);
        objekte.splice(randomWord3, 1);
        return text;
    }
    //console.log(getVerse);   
})(Words || (Words = {}));
//# sourceMappingURL=RandomPoem.js.map