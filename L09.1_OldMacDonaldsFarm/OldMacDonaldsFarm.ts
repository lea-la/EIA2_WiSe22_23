namespace L09_1_OldMacDonaldsFarm {
    window.addEventListener("load", handleLoad);
    let lion: Animal = new Animal("SIMBA", "Lion", "raawr", "meat", 20, 100);
    let warthog: Animal = new Animal("PUMBAA", "Warthog ", "oink", "worms", 4, 30);
    let meerkat: Animal = new Animal("TIMON", "Meerkat", "wiiek", "insekts", 1, 20);
    let hornbill: Animal = new Animal("ZAZU", "Hornbill", "piep", "figs", 2, 20);
    let mandrill: Animal = new Animal("RAFIKI", "Mandrill", "uhuhah", "banana", 3, 20);
    let allAnimals: Animal[] = [lion, warthog, meerkat, hornbill, mandrill];

    

    function handleLoad(_event: Event): void {
        startDay();
        document.querySelector("#nextDay").addEventListener("click", newDay);
    }


    function startDay(): void {

        for (let i: number = 0; i < allAnimals.length; i++) {
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerHTML = allAnimals[i].sing() + allAnimals[i].eat();
            let textArea: HTMLDivElement = <HTMLDivElement>document.getElementById("textarea");
            textArea.appendChild(p);

            
            
        }
        newDay();
    }

    function newDay(): void {
        
        for (let index: number = 0; index < allAnimals.length; index++) {
          allAnimals[index].foodAmount -= allAnimals[index].foodPortion;
        } 

        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "<h2>ANIMAL FOOD STORAGE</h2>"  + 
        allAnimals[0].foodAmount + " kg " + allAnimals[0].food  + "<br>" + 
        allAnimals[1].foodAmount + " kg " + allAnimals[1].food  + "<br>" +
        allAnimals[2].foodAmount + " kg " + allAnimals[2].food  + "<br>" +
        allAnimals[3].foodAmount + " kg " + allAnimals[3].food  + "<br>" +
        allAnimals[4].foodAmount + " kg " + allAnimals[4].food  + "<br>" ;

        if (allAnimals[0].foodAmount <= 0) {
            alert("animals need more food!");
            window.location.reload(); }


    }

}

