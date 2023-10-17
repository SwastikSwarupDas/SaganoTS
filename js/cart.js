"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var cart2 = JSON.parse(localStorage.getItem("cart") || "[]") || "";
var BAGINATION = document.querySelector(".bagination");
var BILL = document.querySelector(".tab");
var CARTINATION = document.querySelector(".cartination");
var EMPTY_CART = document.querySelector(".emptyCart");
var FADE_RULE = document.createElement("div");
FADE_RULE.classList.add("fade_rule");
function loadCart() {
    return __awaiter(this, void 0, void 0, function () {
        var totalCartSum, totalCartPrice, billCat, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    totalCartSum = 0;
                    totalCartPrice = document.createElement("div");
                    billCat = document.createElement("div");
                    BILL.appendChild(FADE_RULE);
                    totalCartPrice.classList.add("bill-list");
                    billCat.classList.add("bill-cat");
                    BILL.appendChild(billCat);
                    BILL.appendChild(FADE_RULE.cloneNode(true));
                    BILL.appendChild(totalCartPrice);
                    totalCartPrice.innerHTML = "BAG VALUE : ¥" + totalCartSum;
                    _loop_1 = function (i) {
                        var product, raw, productData, removeButton, removeButtonText, buttons, addButton, addButtonText, minusButton, minusButtonText, productDiv, productDesc, imageHolder, img, productTitle, titleText, billTitleText, price, priceText, quantity, quantityText, billList, billItemName, billPrice, billItem;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    product = cart2[i];
                                    return [4 /*yield*/, fetch("https://fakestoreapi.com/products/".concat(product.id))];
                                case 1:
                                    raw = _b.sent();
                                    return [4 /*yield*/, raw.json()];
                                case 2:
                                    productData = _b.sent();
                                    removeButton = document.createElement("button");
                                    removeButtonText = document.createTextNode("remove");
                                    buttons = document.createElement("div");
                                    addButton = document.createElement("button");
                                    addButtonText = document.createTextNode("add one");
                                    minusButton = document.createElement("button");
                                    minusButtonText = document.createTextNode("take one out");
                                    productDiv = document.createElement("div");
                                    productDesc = document.createElement("div");
                                    imageHolder = document.createElement("div");
                                    img = document.createElement("img");
                                    productTitle = document.createElement("div");
                                    titleText = document.createTextNode(product.title);
                                    billTitleText = document.createTextNode(product.title.toUpperCase());
                                    price = document.createElement("div");
                                    priceText = document.createTextNode("¥ " + productData.price * 1500);
                                    quantity = document.createElement("div");
                                    quantityText = document.createTextNode(product.quantity + " in bag");
                                    billList = document.createElement("div");
                                    billItemName = document.createElement("div");
                                    billPrice = document.createTextNode("¥ " + productData.price * 1500 + " x" + product.quantity);
                                    billItem = document.createElement("div");
                                    removeButton.classList.add("rmv-btn");
                                    buttons.classList.add("btn-s");
                                    addButton.classList.add("add-btn");
                                    minusButton.classList.add("minus-btn");
                                    productDiv.classList.add("prod-div");
                                    productDesc.classList.add("prod-desc");
                                    imageHolder.classList.add("img-holder");
                                    img.classList.add("img-cart-main");
                                    productTitle.classList.add("p-cart-title");
                                    price.classList.add("cart-price");
                                    quantity.classList.add("cart-qty");
                                    billList.classList.add("bill-list");
                                    billItemName.classList.add("bill-item-name");
                                    billItem.classList.add("bill-item");
                                    img.setAttribute("src", productData.image);
                                    removeButton.appendChild(removeButtonText);
                                    addButton.appendChild(addButtonText);
                                    minusButton.appendChild(minusButtonText);
                                    buttons.appendChild(addButton);
                                    buttons.appendChild(minusButton);
                                    buttons.appendChild(removeButton);
                                    productTitle.appendChild(titleText);
                                    quantity.appendChild(quantityText);
                                    price.appendChild(priceText);
                                    productDesc.appendChild(productTitle);
                                    productDesc.appendChild(price);
                                    productDesc.appendChild(quantity);
                                    productDesc.appendChild(buttons);
                                    imageHolder.appendChild(img);
                                    productDiv.appendChild(imageHolder);
                                    productDiv.appendChild(productDesc);
                                    billItem.appendChild(billItemName);
                                    billItem.appendChild(billList);
                                    billItemName.appendChild(billTitleText);
                                    billList.appendChild(billPrice);
                                    billCat.appendChild(billItem);
                                    BAGINATION.appendChild(productDiv);
                                    addButton.addEventListener("click", function () {
                                        product.quantity += 1;
                                        localStorage.setItem("cart", JSON.stringify(cart2));
                                        quantity.innerText = product.quantity + " in bag";
                                        billList.innerText = "¥ " + product.price * 1500 + " x" + product.quantity;
                                        totalCartSum += (product.price * 1500);
                                        totalCartPrice.innerHTML = "BAG VALUE : ¥" + totalCartSum;
                                    });
                                    minusButton.addEventListener("click", function () {
                                        product.quantity -= 1;
                                        var productIndex = cart2.findIndex(function (p) { return p.id == product.id; });
                                        if (product.quantity === 0) {
                                            cart2.splice(productIndex, 1);
                                            location.reload();
                                        }
                                        localStorage.setItem("cart", JSON.stringify(cart2));
                                        billList.innerText = "¥ " + product.price * 1500 + " x" + product.quantity;
                                        quantity.innerText = product.quantity + " in bag";
                                        totalCartSum -= (product.price * 1500);
                                        totalCartPrice.innerHTML = "BAG VALUE : ¥" + totalCartSum;
                                    });
                                    removeButton.addEventListener("click", function () {
                                        var productIndex = cart2.findIndex(function (product) { return product.id == product.id; });
                                        if (productIndex > -1) {
                                            cart2.splice(productIndex, 1);
                                        }
                                        localStorage.setItem("cart", JSON.stringify(cart2));
                                        location.reload();
                                    });
                                    totalCartSum += (product.price * 1500) * product.quantity;
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < cart2.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    totalCartPrice.innerHTML = "BAG VALUE : ¥" + totalCartSum;
                    console.log(totalCartSum);
                    return [2 /*return*/];
            }
        });
    });
}
if (cart2.length === 0) {
    CARTINATION.style.display = "none";
}
else {
    EMPTY_CART.style.display = "none";
    loadCart();
}
