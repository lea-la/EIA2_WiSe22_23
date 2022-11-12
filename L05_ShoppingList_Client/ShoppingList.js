/*
Aufgabe: <L05_ShoppingList_Client>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <12.11.22>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ShoppingList;
(function (ShoppingList) {
    let newName;
    let newAmount;
    let newDate;
    let newComment;
    let amountItems = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            document.querySelector(".add").addEventListener("click", addItem);
            let response = yield fetch("Data.json");
            let item = yield response.text();
            let data = JSON.parse(item);
            loadData(data);
        });
    }
    function loadData(_data) {
        for (let i = 0; i < ShoppingList.availableInputs.length; i++) {
            newName = ShoppingList.availableInputs[i].name;
            newAmount = ShoppingList.availableInputs[i].amount;
            newComment = ShoppingList.availableInputs[i].comment;
            newDate = ShoppingList.availableInputs[i].date;
            loadItem();
        }
    }
    function addItem(_event) {
        let formData = new FormData(document.querySelector("inputGroup"));
        newName = formData.get("Name").toString();
        newAmount = Number(formData.get("Amount"));
        newComment = formData.get("Comment").toString();
        loadItem();
    }
    function loadItem() {
        let newItem = document.createElement("div");
        newItem.innerHTML = newName + " " + newAmount + " " + newComment + " " + newDate;
        let getItem = document.querySelector("#product");
        getItem.appendChild(newItem);
        newItem.className = "outputItem" + amountItems;
        newItem.id = amountItems.toString();
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        getItem = document.querySelector("#product");
        newItem.appendChild(newCheckbox);
        newCheckbox.id = "check" + amountItems.toString();
        newCheckbox.className = "check" + amountItems;
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
        newItem.appendChild(newEdit);
        newEdit.id = "edit" + amountItems.toString();
        newEdit.className = "edit" + amountItems;
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<i class='fa-solid fa-trash-can clear'></i>";
        newItem.appendChild(newTrash);
        newTrash.className = "clear" + amountItems;
        let newCart = document.createElement("div");
        newCart.innerHTML = " <i class='fa-solid fa-cart-plus cart'></i>";
        newItem.appendChild(newCart);
        newCart.className = "shop" + amountItems;
        document.querySelector(".clear" + amountItems).addEventListener("click", deleteItem);
        document.querySelector(".check" + amountItems).addEventListener("click", checkItem);
        document.querySelector(".edit" + amountItems).addEventListener("click", editItem);
        document.querySelector(".shop" + amountItems).addEventListener("click", addCart);
        amountItems++;
    }
    function deleteItem(_event) {
        console.log("Produkt wird entgültig aus der Einkaufliste entfernt");
        //Versuche die Funktion noch nachzureichen
    }
    function addCart() {
        console.log("Produkt wurde eingekauft");
    }
    function checkItem() {
        console.log("Produkt soll beim nächsten Einkauf besorgt werden");
    }
    function editItem() {
        console.log("Produkt bearbeiten");
    }
})(ShoppingList || (ShoppingList = {}));
//# sourceMappingURL=ShoppingList.js.map