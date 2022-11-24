/*
Aufgabe: <L06_ShoppingList_DatabaseServer>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <19.11.22>
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
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            document.querySelector(".add").addEventListener("click", handleData);
            let response = yield fetch("https://webuser.hs-furtwangen.de/~langelea/database?command=find&collection=data");
            let item = yield response.text();
            let data = JSON.parse(item);
            loadData(data);
        });
    }
    function handleData() {
        addItem();
        loadItem();
    }
    function loadData(_data) {
        let createList = [];
        for (let x in _data.data) {
            createList.push(x);
        }
        for (let i of createList) {
            let newAmount = _data.data[i].amount;
            let newName = _data.data[i].name;
            let newComment = _data.data[i].comment;
            let newItem = document.createElement("div");
            newItem.classList.add("outputItem");
            newItem.innerHTML = newName + " " + newAmount + " " + newComment + " ";
            let getItem = document.querySelector("#product");
            getItem.appendChild(newItem);
            let newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.name = "checkbox";
            newCheckbox.className = "checkbox";
            newItem.appendChild(newCheckbox);
            let newEdit = document.createElement("div");
            newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
            newItem.appendChild(newEdit);
            newEdit.className = "edit";
            let newTrash = document.createElement("div");
            newTrash.innerHTML = "<i class='fa-solid fa-trash-can clear'></i>";
            newItem.appendChild(newTrash);
            newTrash.className = "clear";
            let newCart = document.createElement("div");
            newCart.innerHTML = " <i class='fa-solid fa-cart-plus cart'></i>";
            newItem.appendChild(newCart);
            newCart.className = "shop";
            newTrash.addEventListener("click", function () {
                deleteItem(newItem);
            });
        }
    }
    function loadItem() {
        return __awaiter(this, void 0, void 0, function* () {
            let formData = new FormData(document.forms[0]);
            let json = {};
            for (let k of formData.keys())
                if (!json[k]) {
                    let values = formData.getAll(k);
                    json[k] = values.length > 1 ? values : values[0];
                }
            let query = new URLSearchParams();
            query.set("command", "insert");
            query.set("collection", "data");
            query.set("data", JSON.stringify(json));
            let response = yield fetch("https://webuser.hs-furtwangen.de/~langelea/database?" + query.toString());
        });
    }
    function addItem() {
        var _a, _b;
        let data = new FormData(document.forms[0]);
        let name = (_a = data.get("Name")) === null || _a === void 0 ? void 0 : _a.toString();
        let amount = Number(data.get("Amount"));
        let comment = (_b = data.get("Comment")) === null || _b === void 0 ? void 0 : _b.toString();
        let newItem = document.createElement("div");
        newItem.classList.add("outputItem");
        newItem.innerHTML = name + " " + amount + " " + comment + " ";
        let getItem = document.querySelector("#product");
        getItem.appendChild(newItem);
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "checkbox";
        newCheckbox.className = "checkbox";
        newItem.appendChild(newCheckbox);
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
        newItem.appendChild(newEdit);
        newEdit.className = "edit";
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<i class='fa-solid fa-trash-can clear'></i>";
        newItem.appendChild(newTrash);
        newTrash.className = "clear";
        let newCart = document.createElement("div");
        newCart.innerHTML = " <i class='fa-solid fa-cart-plus cart'></i>";
        newItem.appendChild(newCart);
        newCart.className = "shop";
        newTrash.addEventListener("click", function () {
            deleteItem(newItem);
        });
    }
    function deleteItem(newItem) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Produkt wird entgültig aus der Einkaufliste entfernt");
            newItem.parentElement.removeChild(newItem);
            let query = new URLSearchParams();
            query.set("command", "delete");
            query.set("collection", "data");
            let response = yield fetch("https://webuser.hs-furtwangen.de/~langelea/database?" + query.toString());
        });
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