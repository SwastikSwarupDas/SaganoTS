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
var PRODUCT = document.querySelector(".product");
var WOMEN_PRODUCT_DISPLAY2 = document.querySelector('.womenProductDisplay');
var MEN_PRODUCT_DISPLAY2 = document.querySelector('.menProductDisplay');
var URL_PARAMS = new URLSearchParams(window.location.search);
var PRODUCT_ID = URL_PARAMS.get('id');
console.log(PRODUCT_ID);
var HAMBURG2 = document.querySelector('#hamburger');
var LINKS2 = document.querySelector('.links');
var flag2 = 0;
HAMBURG2.addEventListener("click", function () {
    if (flag2 === 0) {
        LINKS2.style.display = "flex";
        flag2 = 1;
    }
    else {
        LINKS2.style.display = "none";
        flag2 = 0;
    }
});
function loadProduct(PRODUCT_ID) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var response, productData, productImage, productDescription, category, productTitle, desc, price, productQuantity, bagButton, img, buttonText, categoryText, productTitleText, descText, priceText, quantityText, cartString, cart, productIndex, quantity;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log(PRODUCT_ID);
                    return [4 /*yield*/, fetch("https://fakestoreapi.com/products/".concat(PRODUCT_ID))];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    productData = _b.sent();
                    productImage = document.createElement("div");
                    productDescription = document.createElement("div");
                    category = document.createElement("div");
                    productTitle = document.createElement("div");
                    desc = document.createElement("div");
                    price = document.createElement("div");
                    productQuantity = document.createElement("div");
                    bagButton = document.createElement("button");
                    img = document.createElement("img");
                    buttonText = document.createTextNode("add to bag");
                    categoryText = document.createTextNode(productData.category);
                    productTitleText = document.createTextNode(productData.title);
                    descText = document.createTextNode(productData.description);
                    priceText = document.createTextNode("¥ " + productData.price * 1500);
                    quantityText = document.createTextNode("");
                    productImage.classList.add("p-img");
                    productDescription.classList.add("p-desc");
                    category.classList.add("cat-p");
                    productTitle.classList.add("p-title");
                    desc.classList.add("desc");
                    price.classList.add("price");
                    productQuantity.classList.add("p-qty");
                    bagButton.classList.add("bag-btn");
                    img.classList.add("p-img-main");
                    img.setAttribute("src", productData.image);
                    bagButton.appendChild(buttonText);
                    desc.appendChild(descText);
                    category.appendChild(categoryText);
                    productTitle.appendChild(productTitleText);
                    price.appendChild(priceText);
                    productDescription.appendChild(category);
                    productDescription.appendChild(productTitle);
                    productDescription.appendChild(desc);
                    productDescription.appendChild(price);
                    productDescription.appendChild(bagButton);
                    productQuantity.appendChild(quantityText);
                    productDescription.appendChild(productQuantity);
                    productImage.appendChild(img);
                    PRODUCT.appendChild(productImage);
                    PRODUCT.appendChild(productDescription);
                    cartString = localStorage.getItem("cart") || '';
                    cart = JSON.parse(cartString || '[]');
                    productIndex = cart.findIndex(function (p) { return p.id == PRODUCT_ID; });
                    console.log(productIndex);
                    if ((_a = cart[productIndex]) === null || _a === void 0 ? void 0 : _a.quantity) {
                        quantity = cart[productIndex].quantity;
                        productQuantity.innerText = "".concat(quantity, " in bag");
                    }
                    console.log(productIndex);
                    bagButton.addEventListener("click", function () {
                        var existingProduct = cart.find(function (product) { return product.id === productData.id; });
                        if (existingProduct) {
                            existingProduct.quantity += 1;
                            productQuantity.innerText = existingProduct.quantity + " in bag";
                        }
                        else {
                            productData.quantity = 1;
                            cart.push(productData);
                            productQuantity.innerText = productData.quantity + " in bag";
                        }
                        localStorage.setItem("cart", JSON.stringify(cart));
                        console.log("Cart updated:", cart);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function loadWomensClothes2() {
    return __awaiter(this, void 0, void 0, function () {
        var raw, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://fakestoreapi.com/products/category/women\'s clothing?limit=4')];
                case 1:
                    raw = _a.sent();
                    return [4 /*yield*/, raw.json()];
                case 2:
                    product = _a.sent();
                    console.log(product);
                    product.forEach(function (element) {
                        var productCards = document.createElement("div");
                        var imageHolder = document.createElement("div");
                        var img = document.createElement("img");
                        var title = document.createElement("h1");
                        var productTextDiv = document.createElement("div");
                        var titleText = document.createTextNode(element.title);
                        var quickViewDiv = document.createElement("div");
                        var qDivButton = document.createElement("button");
                        var qDivButtonText = document.createTextNode("QUICK VIEW");
                        productTextDiv.classList.add("productTextDiv");
                        productCards.classList.add("products-cards");
                        imageHolder.classList.add("imageHolder");
                        title.classList.add("title-item");
                        quickViewDiv.classList.add("q-v-div");
                        qDivButton.classList.add("q-div-btn");
                        img.setAttribute("src", element.image);
                        img.classList.add("p-img-cat-bottom");
                        imageHolder.appendChild(img);
                        imageHolder.appendChild(quickViewDiv);
                        quickViewDiv.appendChild(qDivButton);
                        qDivButton.appendChild(qDivButtonText);
                        productCards.appendChild(imageHolder);
                        productTextDiv.appendChild(title);
                        title.appendChild(titleText);
                        productCards.appendChild(productTextDiv);
                        WOMEN_PRODUCT_DISPLAY2.appendChild(productCards);
                        productCards.addEventListener("click", function () {
                            window.location.href = "product.html?id=".concat(element.id);
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function loadMensClothes2() {
    return __awaiter(this, void 0, void 0, function () {
        var raw, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://fakestoreapi.com/products/category/men\'s clothing?limit=4')];
                case 1:
                    raw = _a.sent();
                    return [4 /*yield*/, raw.json()];
                case 2:
                    product = _a.sent();
                    console.log(product);
                    product.forEach(function (element) {
                        var productCards = document.createElement("div");
                        var imageHolder = document.createElement("div");
                        var img = document.createElement("img");
                        var title = document.createElement("h1");
                        var productTextDiv = document.createElement("div");
                        var titleText = document.createTextNode(element.title);
                        productTextDiv.classList.add("productTextDiv");
                        productCards.classList.add("products-cards");
                        imageHolder.classList.add("imageHolder");
                        title.classList.add("title-item");
                        img.setAttribute("src", element.image);
                        img.classList.add("p-img-cat-bottom");
                        imageHolder.appendChild(img);
                        productCards.appendChild(imageHolder);
                        productTextDiv.appendChild(title);
                        title.appendChild(titleText);
                        productCards.appendChild(productTextDiv);
                        MEN_PRODUCT_DISPLAY2.appendChild(productCards);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
loadProduct(PRODUCT_ID);
loadWomensClothes2();
// if (typeof PRODUCT_ID === 'string' && /^[1-4]$/.test(PRODUCT_ID)) {
//     loadWomensClothes2();
// }
// if (typeof PRODUCT_ID === 'string' && /^[15-18]$/.test(PRODUCT_ID)) {
//     loadMensClothes2();   
// }
