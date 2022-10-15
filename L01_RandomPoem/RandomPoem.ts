/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <15.10.22>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/





namespace Words {
    
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid" , "Snape" , "Dumbledore"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    //console.log(subjekte);
    //console.log(praedikate);
    //console.log(objekte);
    
    for (let i: number = subjekte.length ;  i >= 1; i--) {
        //console.log (i);

    
        let saetze: string = getVerse(subjekte,  praedikate, objekte);
        console.log(saetze);
     
        
    }

    function getVerse(_subjekte: string [], _praedikate: string [], _objekte: string []): string {
    
     let randomWord: number = Math.floor(Math.random() * subjekte.length);
     let randomWord2: number = Math.floor(Math.random() * subjekte.length);
     let randomWord3: number = Math.floor(Math.random() * subjekte.length);
     let text: string = subjekte[ randomWord ] + "  " + praedikate[randomWord2] + "  " + objekte[randomWord3];
     
   
     subjekte.splice(randomWord, 1);
     praedikate.splice(randomWord2,  1);
     objekte.splice(randomWord3,  1);
     return text;
        
    }
  
     
    //console.log(getVerse);   
    
}