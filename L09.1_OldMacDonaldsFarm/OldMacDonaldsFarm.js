var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let lion = new L09_1_OldMacDonaldsFarm.Animal("SIMBA", "Lion", "raawr", "meat", 20, 100);
    let warthog = new L09_1_OldMacDonaldsFarm.Animal("PUMBAA", "Warthog ", "oink", "worms", 4, 30);
    let meerkat = new L09_1_OldMacDonaldsFarm.Animal("TIMON", "Meerkat", "wiiek", "insekts", 1, 20);
    let hornbill = new L09_1_OldMacDonaldsFarm.Animal("ZAZU", "Hornbill", "piep", "figs", 2, 20);
    let mandrill = new L09_1_OldMacDonaldsFarm.Animal("RAFIKI", "Mandrill", "uhuhah", "banana", 3, 20);
    let allAnimals = [lion, warthog, meerkat, hornbill, mandrill];
    function handleLoad(_event) {
        startDay();
        document.querySelector("#nextDay").addEventListener("click", newDay);
    }
    function startDay() {
        for (let i = 0; i < allAnimals.length; i++) {
            let p = document.createElement("p");
            p.innerHTML = allAnimals[i].sing() + allAnimals[i].eat();
            let textArea = document.getElementById("textarea");
            textArea.appendChild(p);
        }
        newDay();
    }
    function newDay() {
        for (let index = 0; index < allAnimals.length; index++) {
            allAnimals[index].foodAmount -= allAnimals[index].foodPortion;
        }
        let storageDiv = document.getElementById("storage");
        storageDiv.innerHTML = "<h2>ANIMAL FOOD STORAGE</h2>" +
            allAnimals[0].foodAmount + " kg " + allAnimals[0].food + "<br>" +
            allAnimals[1].foodAmount + " kg " + allAnimals[1].food + "<br>" +
            allAnimals[2].foodAmount + " kg " + allAnimals[2].food + "<br>" +
            allAnimals[3].foodAmount + " kg " + allAnimals[3].food + "<br>" +
            allAnimals[4].foodAmount + " kg " + allAnimals[4].food + "<br>";
        if (allAnimals[0].foodAmount <= 0) {
            alert("animals need more food!");
            window.location.reload();
        }
    }
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=OldMacDonaldsFarm.js.map