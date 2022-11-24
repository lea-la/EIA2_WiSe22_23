/*
Aufgabe: <L06_ShoppingList_DatabaseServer>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <19.11.22>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/


namespace ShoppingList {
    
    window.addEventListener("load", handleLoad);
    
    interface Input {
        name: string;
        amount: number;
        comment: string;
        date: string;
    
    }
    
    interface Items {
        [category: string]: Input[];
    }
    interface FormDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
      }
   
    async function handleLoad(): Promise<void> {

        document.querySelector(".add").addEventListener("click", handleData);
            
        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~langelea/database?command=find&collection=data");
        let item: string = await response.text();
        let data: Items = JSON.parse(item);
        loadData(data);
    
            }

    function handleData(): void {
                addItem();
                loadItem();
        
            }

    function loadData(_data: Items): void {
                
                let createList: any[] = [];

                for (let x in _data.data) {
                    createList.push(x);
                }

                for (let i of createList) {
                    let newAmount: number = _data.data[i].amount;
                    let newName: string = _data.data[i].name;
                    let newComment: string = _data.data[i].comment;
                
                    let newItem: HTMLDivElement = document.createElement("div");
                    newItem.classList.add("outputItem");
                    newItem.innerHTML = newName + " " + newAmount + " " + newComment + " ";
                    let getItem: HTMLElement = document.querySelector("#product");
                    getItem.appendChild(newItem);

                    let newCheckbox: HTMLInputElement = document.createElement("input");
                    newCheckbox.type = "checkbox";
                    newCheckbox.name = "checkbox";
                    newCheckbox.className = "checkbox";
                    newItem.appendChild(newCheckbox);
                
                   
                    let newEdit: HTMLDivElement = document.createElement("div");
                    newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
                    newItem.appendChild(newEdit);
                    newEdit.className = "edit";
                    
                    let newTrash: HTMLDivElement = document.createElement("div");
                    newTrash.innerHTML = "<i class='fa-solid fa-trash-can clear'></i>";
                    newItem.appendChild(newTrash);
                    newTrash.className = "clear";

                    let newCart: HTMLDivElement = document.createElement("div");
                    newCart.innerHTML = " <i class='fa-solid fa-cart-plus cart'></i>";
                    newItem.appendChild(newCart);
                    newCart.className = "shop";

                    newTrash.addEventListener("click", function (): void {
                        deleteItem(newItem);
                    });

                    

                    
                }
            }

    async function loadItem(): Promise<void> {
    
           let formData: FormData = new FormData(document.forms[0]);
           let json: FormDataJSON = {};

           for (let k of formData.keys())
                   if (!json[k]) {
                let values: FormDataEntryValue[] = formData.getAll(k);
                json[k] = values.length > 1 ? values : values[0];
            }

           let query: URLSearchParams = new URLSearchParams();
           query.set("command", "insert");
           query.set("collection", "data");
           query.set("data", JSON.stringify(json));
          

           let response: Response = await fetch("https://webuser.hs-furtwangen.de/~langelea/database?" + query.toString());
          

        }
    
    function addItem(): void {
    
                let data: FormData = new FormData(document.forms[0]);
                let name: string = data.get("Name")?.toString()!;
                let amount: number = Number(data.get("Amount")!);
                let comment: string = data.get("Comment")?.toString();

                let newItem: HTMLDivElement = document.createElement("div");
                newItem.classList.add("outputItem");
                newItem.innerHTML = name + " " + amount + " " + comment + " ";
                let getItem: HTMLElement = document.querySelector("#product");
                getItem.appendChild(newItem);

                let newCheckbox: HTMLInputElement = document.createElement("input");
                newCheckbox.type = "checkbox";
                newCheckbox.name = "checkbox";
                newCheckbox.className = "checkbox";
                newItem.appendChild(newCheckbox);
                
                   
                let newEdit: HTMLDivElement = document.createElement("div");
                newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
                newItem.appendChild(newEdit);
                newEdit.className = "edit";
                    
                let newTrash: HTMLDivElement = document.createElement("div");
                newTrash.innerHTML = "<i class='fa-solid fa-trash-can clear'></i>";
                newItem.appendChild(newTrash);
                newTrash.className = "clear";

                let newCart: HTMLDivElement = document.createElement("div");
                newCart.innerHTML = " <i class='fa-solid fa-cart-plus cart'></i>";
                newItem.appendChild(newCart);
                newCart.className = "shop";

                newTrash.addEventListener("click", function (): void {
                    deleteItem(newItem);
                });

                
        
                    
    }
            
    
   
    
    async function deleteItem (newItem: HTMLDivElement): Promise<void> {
        console.log("Produkt wird entgültig aus der Einkaufliste entfernt");
        
        newItem.parentElement.removeChild(newItem);
        let query: URLSearchParams = new URLSearchParams();

        query.set("command", "delete");
        query.set("collection", "data");
       

        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~langelea/database?" + query.toString());
        
       
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

