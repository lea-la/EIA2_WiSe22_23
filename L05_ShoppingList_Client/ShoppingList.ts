/*
Aufgabe: <L05_ShoppingList_Client>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <12.11.22>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/

// Würde die Abgabe gerne nachreichen
namespace ShoppingList {
    
    let newName: string;
    let newAmount: number;
    let newDate: string;
    let newComment: string;
    let amountItems: number = 0;
    
    
    
    window.addEventListener("load", handleLoad);
    
    interface Input {
        name: string;
        amount: number;
        comment: string;
        date: string;
    }
    

   
    async function handleLoad(_event: Event): Promise<void> {

       
            
        document.querySelector(".add").addEventListener("click", addItem);
            
        let response: Response = await fetch("Data.json");
        let item: string = await response.text();
        let data: Input = JSON.parse(item);
        loadData(data);
    
            }

    function loadData(_data: Input): void {
                
                for (let i: number = 0; i < availableInputs.length; i++) {
                    
                    newName = availableInputs[i].name;
                    newAmount = availableInputs[i].amount;        
                    newComment = availableInputs[i].comment;
                    newDate = availableInputs[i].date;
                    loadItem();

                }
            }

    function addItem(_event: MouseEvent): void {
    
                    let formData: FormData = new FormData(document.querySelector("inputGroup"));
            
                    newName = formData.get("Name").toString();
                    newAmount = Number(formData.get("Amount"));
                    newComment = formData.get("Comment").toString();
                    loadItem();
                }
    
    function loadItem(): void {
    
                  
        
                    let newItem: HTMLDivElement = document.createElement("div");
                    newItem.innerHTML = newName + " " + newAmount + " " + newComment + " " + newDate;
                    let getItem: HTMLElement = document.querySelector("#product");
                    getItem.appendChild(newItem);
                    newItem.className = "outputItem" + amountItems;
                    newItem.id = amountItems.toString();
                
                    let newCheckbox: HTMLInputElement = document.createElement("input");
                    newCheckbox.type = "checkbox";
                    getItem = document.querySelector("#product");
                    newItem.appendChild(newCheckbox);
                    newCheckbox.id = "check" + amountItems.toString();
                    newCheckbox.className = "check" + amountItems;
                   
                    let newEdit: HTMLDivElement = document.createElement("div");
                    newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
                    newItem.appendChild(newEdit);
                    newEdit.id = "edit" + amountItems.toString();
                    newEdit.className = "edit" + amountItems;
                    
                    let newTrash: HTMLDivElement = document.createElement("div");
                    newTrash.innerHTML = "<i class='fa-solid fa-trash-can clear'></i>";
                    newItem.appendChild(newTrash);
                    newTrash.className = "clear" + amountItems;

                    let newCart: HTMLDivElement = document.createElement("div");
                    newCart.innerHTML = " <i class='fa-solid fa-cart-plus cart'></i>";
                    newItem.appendChild(newCart);
                    newCart.className = "shop" + amountItems;
               
                    document.querySelector(".clear" + amountItems).addEventListener("click", deleteItem);
                    document.querySelector(".check" +  amountItems).addEventListener("click", checkItem);
                    document.querySelector(".edit" +  amountItems).addEventListener("click", editItem);
                    document.querySelector(".shop" +  amountItems).addEventListener("click", addCart);
                   
                    amountItems++;
                }
            
    
   
    
    function deleteItem (_event: MouseEvent): void  {
        console.log("Produkt wird entgültig aus der Einkaufliste entfernt");
        
        //Versuche die Funktion noch nachzureichen
       
        }
    function addCart(): void {
            console.log("Produkt wurde eingekauft");
        }

    function checkItem(): void {
            console.log("Produkt soll beim nächsten Einkauf besorgt werden");
        }

     
    function editItem(): void {
            console.log("Produkt bearbeiten");
        }       
        
    
    } 