"use strict";
// selecting the main divs to display stuff
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
var PRODUCT_DISPLAY = document.querySelector('.productDisplay');
var SEARCH_SELECT = document.createElement("div");
var SEARCH_BAR = document.querySelector("form input");
var PRODUCTROPICA = document.querySelector('.productropica');
var PRODUCTASIA = document.createElement("div");
var MAIN = document.querySelector('.main');
var HAMBURG = document.querySelector('#hamburger');
var LINKS = document.querySelector('.links');
var flag = 0;
HAMBURG.addEventListener("click", function () {
    if (flag === 0) {
        LINKS.style.display = "flex";
        flag = 1;
    }
    else {
        LINKS.style.display = "none";
        flag = 0;
    }
});
PRODUCTASIA.classList.add("productasia");
// const WOMEN_PRODUCT_DISPLAY = document.querySelector('.womenProductDisplay') as HTMLBodyElement;
console.log(PRODUCT_DISPLAY.innerText);
// Checking if there exists a Cart object, and if not, creating it.
if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
}
function loadMensClothes() {
    return __awaiter(this, void 0, void 0, function () {
        var catLabels, catRow, sortBTN, menProductDisplay, raw, product, sortOrder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    PRODUCTROPICA.innerHTML = '';
                    console.log("loading men clothes");
                    catLabels = document.createElement("div");
                    catRow = document.createElement("div");
                    sortBTN = document.createElement("button");
                    menProductDisplay = document.createElement("div");
                    catLabels.innerText = "MEN";
                    catLabels.classList.add("catLabels");
                    menProductDisplay.classList.add("p-dis");
                    catRow.classList.add("catRow");
                    sortBTN.classList.add("sort-btn");
                    sortBTN.innerHTML = "SORT PRICE <i class=\"ri-arrow-up-down-line\"></i>";
                    catRow.appendChild(catLabels);
                    catRow.appendChild(sortBTN);
                    PRODUCT_DISPLAY.appendChild(catRow);
                    PRODUCT_DISPLAY.appendChild(menProductDisplay);
                    return [4 /*yield*/, fetch('https://fakestoreapi.com/products/category/men\'s clothing')];
                case 1:
                    raw = _a.sent();
                    return [4 /*yield*/, raw.json()];
                case 2:
                    product = _a.sent();
                    sortOrder = 'asc';
                    sortBTN.addEventListener("click", function () {
                        console.log("sort clicked");
                        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
                        sortBTN.innerHTML = " PRICE ".concat(sortOrder === 'asc' ? '<i class="ri-sort-asc"></i>' : '<i class="ri-sort-desc"></i>');
                        product.sort(function (a, b) {
                            if (sortOrder === 'asc') {
                                return a.price - b.price;
                            }
                            else {
                                return b.price - a.price;
                            }
                        });
                        menProductDisplay.innerHTML = '';
                        product.forEach(function (element) {
                            var productCards = document.createElement("div");
                            var imageHolder = document.createElement("div");
                            var img = document.createElement("img");
                            var title = document.createElement("h1");
                            var price = document.createElement("h1");
                            var productTextDiv = document.createElement("div");
                            var quickViewDiv = document.createElement("div");
                            var qDivButton = document.createElement("button");
                            var qViewDis = document.createElement("div");
                            var qDivButtonText = document.createTextNode("QUICK VIEW");
                            var titleText = document.createTextNode(element.title);
                            var priceText = document.createTextNode(element.price);
                            productTextDiv.classList.add("productTextDiv");
                            productCards.classList.add("products-cards");
                            imageHolder.classList.add("imageHolder");
                            title.classList.add("title-item");
                            quickViewDiv.classList.add("q-v-div");
                            qDivButton.classList.add("q-div-btn");
                            qViewDis.classList.add("q-v-dis");
                            img.setAttribute("src", element.image);
                            img.classList.add("p-img");
                            // price.appendChild(priceText);
                            imageHolder.appendChild(img);
                            imageHolder.appendChild(quickViewDiv);
                            quickViewDiv.appendChild(qDivButton);
                            qDivButton.appendChild(qDivButtonText);
                            productCards.appendChild(imageHolder);
                            productTextDiv.appendChild(title);
                            title.appendChild(titleText);
                            productCards.appendChild(productTextDiv);
                            // productCards.appendChild(price);
                            productCards.appendChild(qViewDis);
                            menProductDisplay.appendChild(productCards);
                            productCards.addEventListener("click", function () {
                                window.location.href = "product.html?id=".concat(element.id);
                            });
                        });
                    });
                    product.forEach(function (element) {
                        var productCards = document.createElement("div");
                        var imageHolder = document.createElement("div");
                        var quickViewImageHolder = document.createElement("div");
                        var img = document.createElement("img");
                        var imgQView = document.createElement("img");
                        var title = document.createElement("h1");
                        var productTextDiv = document.createElement("div");
                        var quickViewDiv = document.createElement("div");
                        var qDivButton = document.createElement("button");
                        var qViewDis = document.createElement("div");
                        var pQView = document.createElement("div");
                        var productDescription = document.createElement("div");
                        var category = document.createElement("div");
                        var productTitle = document.createElement("div");
                        var desc = document.createElement("div");
                        var price = document.createElement("div");
                        var productQuickView = document.createElement("div");
                        var qDivButtonText = document.createTextNode("QUICK VIEW");
                        var titleText = document.createTextNode(element.title);
                        var categoryText = document.createTextNode(element.category);
                        var productTitleText = document.createTextNode(element.title);
                        var descText = document.createTextNode(element.description);
                        var priceText = document.createTextNode("¥ " + element.price * 1500);
                        productTextDiv.classList.add("productTextDiv");
                        productCards.classList.add("products-cards");
                        imageHolder.classList.add("imageHolder");
                        title.classList.add("title-item");
                        quickViewDiv.classList.add("q-v-div");
                        qDivButton.classList.add("q-div-btn");
                        qViewDis.classList.add("q-v-dis");
                        pQView.classList.add("p-q-view");
                        quickViewImageHolder.classList.add("q-v-img-holder");
                        productDescription.classList.add("p-desc");
                        category.classList.add("cat-p");
                        productTitle.classList.add("p-title");
                        desc.classList.add("desc");
                        price.classList.add("price");
                        productQuickView.classList.add("product-q-v");
                        img.setAttribute("src", element.image);
                        imgQView.setAttribute("src", element.image);
                        imgQView.classList.add("p-img-q-v");
                        img.classList.add("p-img");
                        imageHolder.appendChild(img);
                        imageHolder.appendChild(quickViewDiv);
                        quickViewDiv.appendChild(qDivButton);
                        qDivButton.appendChild(qDivButtonText);
                        productCards.appendChild(imageHolder);
                        productTextDiv.appendChild(title);
                        title.appendChild(titleText);
                        productCards.appendChild(productTextDiv);
                        quickViewImageHolder.appendChild(imgQView);
                        desc.appendChild(descText);
                        MAIN.appendChild(qViewDis);
                        category.appendChild(categoryText);
                        productTitle.appendChild(productTitleText);
                        price.appendChild(priceText);
                        productDescription.appendChild(category);
                        productDescription.appendChild(productTitle);
                        productDescription.appendChild(desc);
                        productDescription.appendChild(price);
                        menProductDisplay.appendChild(productCards);
                        qDivButton.addEventListener("mouseover", function () {
                            qViewDis.style.display = "block";
                            qViewDis.addEventListener("mouseleave", function () {
                                qViewDis.style.display = "none";
                            });
                        });
                        qViewDis.appendChild(productQuickView);
                        productQuickView.appendChild(pQView);
                        productQuickView.appendChild(productDescription);
                        pQView.appendChild(quickViewImageHolder);
                        productCards.addEventListener("click", function () {
                            window.location.href = "product.html?id=".concat(element.id);
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function loadWomensClothes() {
    return __awaiter(this, void 0, void 0, function () {
        var catLabels, catRow, sortBTN, womenProductDisplay, raw, product, sortOrder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    PRODUCTROPICA.innerHTML = '';
                    console.log("loading women clothes");
                    catLabels = document.createElement("div");
                    catRow = document.createElement("div");
                    sortBTN = document.createElement("button");
                    womenProductDisplay = document.createElement("div");
                    catLabels.innerText = "WOMEN";
                    catLabels.classList.add("catLabels");
                    womenProductDisplay.classList.add("p-dis");
                    catRow.classList.add("catRow");
                    sortBTN.classList.add("sort-btn");
                    sortBTN.innerHTML = "SORT PRICE <i class=\"ri-arrow-up-down-line\"></i>";
                    catRow.appendChild(catLabels);
                    catRow.appendChild(sortBTN);
                    PRODUCT_DISPLAY.appendChild(catRow);
                    PRODUCT_DISPLAY.appendChild(womenProductDisplay);
                    return [4 /*yield*/, fetch('https://fakestoreapi.com/products/category/women\'s clothing?limit=4')];
                case 1:
                    raw = _a.sent();
                    return [4 /*yield*/, raw.json()];
                case 2:
                    product = _a.sent();
                    sortOrder = 'asc';
                    sortBTN.addEventListener("click", function () {
                        console.log("sort clicked");
                        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
                        sortBTN.innerHTML = " PRICE ".concat(sortOrder === 'asc' ? '<i class="ri-sort-asc"></i>' : '<i class="ri-sort-desc"></i>');
                        product.sort(function (a, b) {
                            if (sortOrder === 'asc') {
                                return a.price - b.price;
                            }
                            else {
                                return b.price - a.price;
                            }
                        });
                        womenProductDisplay.innerHTML = '';
                        product.forEach(function (element) {
                            var productCards = document.createElement("div");
                            var imageHolder = document.createElement("div");
                            var img = document.createElement("img");
                            var title = document.createElement("h1");
                            var price = document.createElement("h1");
                            var productTextDiv = document.createElement("div");
                            var quickViewDiv = document.createElement("div");
                            var qDivButton = document.createElement("button");
                            var qDivButtonText = document.createTextNode("QUICK VIEW");
                            var titleText = document.createTextNode(element.title);
                            var priceText = document.createTextNode(element.price);
                            productTextDiv.classList.add("productTextDiv");
                            productCards.classList.add("products-cards");
                            imageHolder.classList.add("imageHolder");
                            title.classList.add("title-item");
                            quickViewDiv.classList.add("q-v-div");
                            qDivButton.classList.add("q-div-btn");
                            img.setAttribute("src", element.image);
                            img.classList.add("p-img");
                            // price.appendChild(priceText);
                            imageHolder.appendChild(img);
                            imageHolder.appendChild(quickViewDiv);
                            quickViewDiv.appendChild(qDivButton);
                            qDivButton.appendChild(qDivButtonText);
                            productCards.appendChild(imageHolder);
                            productTextDiv.appendChild(title);
                            title.appendChild(titleText);
                            productCards.appendChild(productTextDiv);
                            // productCards.appendChild(price);
                            womenProductDisplay.appendChild(productCards);
                            productCards.addEventListener("click", function () {
                                window.location.href = "product.html?id=".concat(element.id);
                            });
                        });
                    });
                    product.forEach(function (element) {
                        var productCards = document.createElement("div");
                        var imageHolder = document.createElement("div");
                        var img = document.createElement("img");
                        var title = document.createElement("h1");
                        var productTextDiv = document.createElement("div");
                        var quickViewDiv = document.createElement("div");
                        var qDivButton = document.createElement("button");
                        var qDivButtonText = document.createTextNode("QUICK VIEW");
                        var titleText = document.createTextNode(element.title);
                        productTextDiv.classList.add("productTextDiv");
                        productCards.classList.add("products-cards");
                        imageHolder.classList.add("imageHolder");
                        title.classList.add("title-item");
                        quickViewDiv.classList.add("q-v-div");
                        qDivButton.classList.add("q-div-btn");
                        img.setAttribute("src", element.image);
                        img.classList.add("p-img");
                        imageHolder.appendChild(img);
                        imageHolder.appendChild(quickViewDiv);
                        quickViewDiv.appendChild(qDivButton);
                        qDivButton.appendChild(qDivButtonText);
                        productCards.appendChild(imageHolder);
                        productTextDiv.appendChild(title);
                        title.appendChild(titleText);
                        productCards.appendChild(productTextDiv);
                        womenProductDisplay.appendChild(productCards);
                        productCards.addEventListener("click", function () {
                            window.location.href = "product.html?id=".concat(element.id);
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function loadAll() {
    return __awaiter(this, void 0, void 0, function () {
        var catLabels, catRow, sortBTN, raw, product, FILTER_PRODUCTS, sortOrder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    catLabels = document.createElement("div");
                    catRow = document.createElement("div");
                    sortBTN = document.createElement("button");
                    catLabels.innerHTML = "SEARCH RESULTS FOR ".concat(SEARCH_BAR.value, " <i class=\"ri-arrow-right-double-fill\">");
                    catLabels.classList.add("catLabels");
                    catRow.classList.add("catRow");
                    sortBTN.classList.add("sort-btn");
                    sortBTN.innerHTML = "SORT PRICE <i class=\"ri-arrow-up-down-line\"></i>";
                    PRODUCT_DISPLAY.innerHTML = '';
                    return [4 /*yield*/, fetch('https://fakestoreapi.com/products')];
                case 1:
                    raw = _a.sent();
                    return [4 /*yield*/, raw.json()];
                case 2:
                    product = _a.sent();
                    FILTER_PRODUCTS = [];
                    FILTER_PRODUCTS = product.filter(function (product) {
                        return product.title.toLowerCase().includes(SEARCH_BAR.value);
                    });
                    PRODUCTROPICA.innerHTML = '';
                    PRODUCTASIA.innerHTML = '';
                    catRow.appendChild(catLabels);
                    catRow.appendChild(sortBTN);
                    PRODUCTROPICA.appendChild(catRow);
                    sortOrder = 'asc';
                    sortBTN.addEventListener("click", function () {
                        console.log("sort clicked");
                        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
                        sortBTN.innerHTML = " PRICE ".concat(sortOrder === 'asc' ? '<i class="ri-sort-asc"></i>' : '<i class="ri-sort-desc"></i>');
                        product.sort(function (a, b) {
                            if (sortOrder === 'asc') {
                                return a.price - b.price;
                            }
                            else {
                                return b.price - a.price;
                            }
                        });
                        PRODUCTASIA.innerHTML = '';
                        product.forEach(function (element) {
                            var productCards = document.createElement("div");
                            var imageHolder = document.createElement("div");
                            var img = document.createElement("img");
                            var title = document.createElement("h1");
                            var price = document.createElement("h1");
                            var productTextDiv = document.createElement("div");
                            var quickViewDiv = document.createElement("div");
                            var qDivButton = document.createElement("button");
                            var qDivButtonText = document.createTextNode("QUICK VIEW");
                            var titleText = document.createTextNode(element.title);
                            var priceText = document.createTextNode(element.price);
                            productTextDiv.classList.add("productTextDiv");
                            productCards.classList.add("products-cards");
                            imageHolder.classList.add("imageHolder");
                            title.classList.add("title-item");
                            quickViewDiv.classList.add("q-v-div");
                            qDivButton.classList.add("q-div-btn");
                            img.setAttribute("src", element.image);
                            img.classList.add("p-img");
                            // price.appendChild(priceText);
                            imageHolder.appendChild(img);
                            imageHolder.appendChild(quickViewDiv);
                            quickViewDiv.appendChild(qDivButton);
                            qDivButton.appendChild(qDivButtonText);
                            productCards.appendChild(imageHolder);
                            productTextDiv.appendChild(title);
                            title.appendChild(titleText);
                            productCards.appendChild(productTextDiv);
                            // productCards.appendChild(price);
                            PRODUCTASIA.appendChild(productCards);
                            productCards.addEventListener("click", function () {
                                window.location.href = "product.html?id=".concat(element.id);
                            });
                            PRODUCTROPICA.appendChild(PRODUCTASIA);
                        });
                    });
                    FILTER_PRODUCTS.forEach(function (element) {
                        var productCards = document.createElement("div");
                        var imageHolder = document.createElement("div");
                        var img = document.createElement("img");
                        var title = document.createElement("h1");
                        var productTextDiv = document.createElement("div");
                        var quickViewDiv = document.createElement("div");
                        var qDivButton = document.createElement("button");
                        var qDivButtonText = document.createTextNode("QUICK VIEW");
                        var titleText = document.createTextNode(element.title);
                        productTextDiv.classList.add("productTextDiv");
                        productCards.classList.add("products-cards");
                        imageHolder.classList.add("imageHolder");
                        title.classList.add("title-item");
                        quickViewDiv.classList.add("q-v-div");
                        qDivButton.classList.add("q-div-btn");
                        img.setAttribute("src", element.image);
                        img.classList.add("p-img");
                        imageHolder.appendChild(img);
                        imageHolder.appendChild(quickViewDiv);
                        quickViewDiv.appendChild(qDivButton);
                        qDivButton.appendChild(qDivButtonText);
                        productCards.appendChild(imageHolder);
                        productTextDiv.appendChild(title);
                        title.appendChild(titleText);
                        productCards.appendChild(productTextDiv);
                        PRODUCTASIA.appendChild(productCards);
                        productCards.addEventListener("click", function () {
                            window.location.href = "product.html?id=".concat(element.id);
                        });
                        PRODUCTROPICA.appendChild(PRODUCTASIA);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
SEARCH_BAR.addEventListener("input", function () {
    console.log("clicks");
    if (SEARCH_BAR.value) {
        loadAll();
        console.log("cond1");
    }
    else {
        PRODUCTROPICA.innerHTML = '';
        console.log("cond2");
        loadMensClothes();
        loadWomensClothes();
    }
});
loadMensClothes();
loadWomensClothes();
