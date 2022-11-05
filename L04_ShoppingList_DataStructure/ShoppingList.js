/*
Aufgabe: <L04_ShoppingList_DataStructure>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <05.11.22>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var ShoppingList;
(function (ShoppingList) {
    var newName;
    var newAmount;
    var newDate;
    var newComment;
    var amountItems = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.querySelector(".add").addEventListener("click", addItem);
        loadData();
    }
    function loadData() {
        for (var i = 0; i < ShoppingList.availableInputs.length; i++) {
            newName = ShoppingList.availableInputs[i].name;
            newAmount = ShoppingList.availableInputs[i].amount;
            newComment = ShoppingList.availableInputs[i].comment;
            newDate = ShoppingList.availableInputs[i].date;
            loadItem();
        }
    }
    function addItem(_event) {
        var formData = new FormData(document.forms[0]);
        newName = formData.get("Name").toString();
        newAmount = Number(formData.get("Amount"));
        newComment = formData.get("Comment").toString();
        loadItem();
    }
    function loadItem() {
        var newItem = document.createElement("div");
        newItem.innerHTML = newName + " " + newAmount + " " + newComment + " " + newDate;
        var getItem = document.querySelector("#product");
        getItem.appendChild(newItem);
        newItem.className = "outputItem" + amountItems;
        newItem.id = amountItems.toString();
        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        getItem = document.querySelector("#product");
        newItem.appendChild(newCheckbox);
        newCheckbox.id = "check" + amountItems.toString();
        newCheckbox.className = "check" + amountItems;
        var newEdit = document.createElement("div");
        newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
        newItem.appendChild(newEdit);
        newEdit.id = "edit" + amountItems.toString();
        newEdit.className = "edit" + amountItems;
        var newTrash = document.createElement("div");
        newTrash.innerHTML = "<i class='fa-solid fa-trash-can clear'></i>";
        newItem.appendChild(newTrash);
        newTrash.className = "clear" + amountItems;
        var newCart = document.createElement("div");
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