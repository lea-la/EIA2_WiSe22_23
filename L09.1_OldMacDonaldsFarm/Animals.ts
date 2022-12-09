namespace L09_1_OldMacDonaldsFarm {
export class Animal {
 name: string;
 type: string;
 sound: string;
 food: string;
 foodPortion: number;
 foodAmount: number;

constructor(_name: string, _type: string, _sound: string, _food: string, _foodPortion: number, _foodAmount: number) {
    this.name = _name;
    this.type = _type;
    this.sound = _sound;
    this.food = _food;
    this.foodPortion = _foodPortion;
    this.foodAmount = _foodAmount;
}
sing(): string {
    return `<h2>${this.name}</h2> 
    Old MacDonald had a farm, Ee i ee i oh! <br>
    And on that farm he had a ${this.type}, Ee i ee i oh! <br>
    With a ${this.sound}-${this.sound} here, And a ${this.sound}-${this.sound} there <br>
    
    Here a ${this.sound}, there a ${this.sound}, Everywhere a ${this.sound}-${this.sound} <br>
    Old MacDonald had a farm Ee i ee i oh! <br>`;
}

eat(): string {
    return `<br>${this.name} ate ${this.foodPortion} Kg ${this.food}<br>`;
}
}
}