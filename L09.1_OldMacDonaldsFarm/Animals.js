var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    class Animal {
        constructor(_name, _type, _sing, _food, _foodPortion, _foodAmount) {
            this.name = _name;
            this.type = _type;
            this.sound = _sing;
            this.food = _food;
            this.foodPortion = _foodPortion;
            this.foodAmount = _foodAmount;
        }
        sing() {
            return `<h2>${this.name}</h2> 
    Old MacDonald had a farm, Ee i ee i oh! <br>
    And on that farm he had a ${this.type}, Ee i ee i oh! <br>
    With a ${this.sound}-${this.sound} here, And a ${this.sound}-${this.sound} there <br>
    
    Here a ${this.sound}, there a ${this.sound}, Everywhere a ${this.sound}-${this.sound} <br>
    Old MacDonald had a farm Ee i ee i oh! <br>`;
        }
        eat() {
            return `<br>${this.name} ate ${this.foodPortion} Kg ${this.food}<br>`;
        }
    }
    L09_1_OldMacDonaldsFarm.Animal = Animal;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animals.js.map