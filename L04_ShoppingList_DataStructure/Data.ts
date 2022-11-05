namespace ShoppingList {

    
    export interface Input {
        name: string;
        amount: number;
        comment: string;
        date: string;
    }



    export let availableInputs: Input[] = [

        {
            name: "Brot",
            amount: 1,
            comment: "Vollkorn",
            date: "11.03.2022"
            
        },
        {
            name: "Gurken",
            amount: 3,
            comment: "Bio",
            date: "15.03.2022"
            
        },
        {
            name: "Tomaten",
            amount: 1,
            comment: "Kilo",
            date: "28.03.2022"
            
        }
    ];

    export let savedItem: string = "";

}