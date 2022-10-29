/*
Aufgabe: <L03_ShoppingList>
Name: <Lea Lange>
Matrikel: <268017>
Datum: <29.10.22>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var ShoppingList;
(function (ShoppingList) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.querySelector(".add").addEventListener("click", add);
        document.querySelector(".edit").addEventListener("click", edit);
        document.querySelector(".clear").addEventListener("click", clear);
        document.querySelector(".cart").addEventListener("click", shop);
        document.querySelector(".check").addEventListener("click", check);
    }
    function edit() {
        console.log("Produkt bearbeiten");
    }
    function add() {
        console.log("Neues Produkt wurde hinzugefügt");
    }
    function clear() {
        console.log("Produkt wird entgültig aus der Einkaufliste entfernt");
    }
    function shop() {
        console.log("Produkt wurde eingekauft");
    }
    function check() {
        console.log("Produkt soll beim nächsten Einkauf besorgt werden");
    }
})(ShoppingList || (ShoppingList = {}));
//# sourceMappingURL=ShoppingList.js.map