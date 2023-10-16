// selecting the main divs to display stuff

const PRODUCT_DISPLAY                   = document.querySelector('.productDisplay') as HTMLBodyElement;
const SEARCH_SELECT : HTMLDivElement    = document.createElement("div");
const SEARCH_BAR                        = document.querySelector("form input") as HTMLInputElement;
const PRODUCTROPICA                     = document.querySelector('.productropica') as HTMLBodyElement;
const PRODUCTASIA   : HTMLDivElement    = document.createElement("div");

PRODUCTASIA.classList.add("productasia");

// const WOMEN_PRODUCT_DISPLAY = document.querySelector('.womenProductDisplay') as HTMLBodyElement;

console.log(PRODUCT_DISPLAY.innerText);

// Checking if there exists a Cart object, and if not, creating it.

if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
}

async function loadMensClothes(): Promise<void> {
    PRODUCTROPICA.innerHTML='';
    console.log("loading men clothes");

    let catLabels : HTMLDivElement = document.createElement("div");
    let menProductDisplay : HTMLDivElement = document.createElement("div");
    catLabels.innerText="MEN";

    catLabels.classList.add("catLabels");
    menProductDisplay.classList.add("p-dis");

    PRODUCT_DISPLAY.appendChild(catLabels);
    PRODUCT_DISPLAY.appendChild(menProductDisplay);
    
    let raw     :   any = await fetch('https://fakestoreapi.com/products/category/men\'s clothing');
    let product :   any = await raw.json();
    
    
    product.forEach((element: any) => {
    
        let productCards    : HTMLDivElement        = document.createElement("div");
        let imageHolder     : HTMLDivElement        = document.createElement("div");
        let img             : HTMLImageElement      = document.createElement("img");
        let title           : HTMLHeadingElement    = document.createElement("h1");
        let productTextDiv  : HTMLDivElement        = document.createElement("div");
        let quickViewDiv    : HTMLDivElement        = document.createElement("div");
        let qDivButton      : HTMLButtonElement     = document.createElement("button");
        let qDivButtonText  : Text                  = document.createTextNode("QUICK VIEW");
        let titleText       : Text                  = document.createTextNode(element.title);

        productTextDiv.classList.add("productTextDiv");
        productCards.classList.add("products-cards");
        imageHolder.classList.add("imageHolder");
        title.classList.add("title-item");
        quickViewDiv.classList.add("q-v-div");
        qDivButton.classList.add("q-div-btn");

        img.setAttribute("src",element.image);
        img.classList.add("p-img");

        imageHolder.appendChild(img);
        imageHolder.appendChild(quickViewDiv);
        quickViewDiv.appendChild(qDivButton);
        qDivButton.appendChild(qDivButtonText);
        productCards.appendChild(imageHolder);
        productTextDiv.appendChild(title);
        title.appendChild(titleText);
        productCards.appendChild(productTextDiv);

        menProductDisplay.appendChild(productCards);

        productCards.addEventListener("click", () => {
            window.location.href = `product.html?id=${element.id}`;
        });

    });
}

async function loadWomensClothes(): Promise<void> {
    PRODUCTROPICA.innerHTML='';    
    console.log("loading women clothes")

    let catLabels : HTMLDivElement = document.createElement("div");
    let womenProductDisplay : HTMLDivElement = document.createElement("div");
    catLabels.innerText="WOMEN";
    
    catLabels.classList.add("catLabels");
    womenProductDisplay.classList.add("p-dis")

    PRODUCT_DISPLAY.appendChild(catLabels);
    PRODUCT_DISPLAY.appendChild(womenProductDisplay);
    
    let raw     :   any = await fetch('https://fakestoreapi.com/products/category/women\'s clothing?limit=4');
    let product :   any = await raw.json();
    
    
    product.forEach((element: any) => {
    
        let productCards    : HTMLDivElement        = document.createElement("div");
        let imageHolder     : HTMLDivElement        = document.createElement("div");
        let img             : HTMLImageElement      = document.createElement("img");
        let title           : HTMLHeadingElement    = document.createElement("h1");
        let productTextDiv  : HTMLDivElement        = document.createElement("div");
        let quickViewDiv    : HTMLDivElement        = document.createElement("div");
        let qDivButton      : HTMLButtonElement     = document.createElement("button");
        let qDivButtonText  : Text                  = document.createTextNode("QUICK VIEW");
        let titleText       : Text                  = document.createTextNode(element.title);
        
        productTextDiv.classList.add("productTextDiv");
        productCards.classList.add("products-cards");
        imageHolder.classList.add("imageHolder");
        title.classList.add("title-item");
        quickViewDiv.classList.add("q-v-div");
        qDivButton.classList.add("q-div-btn");

        img.setAttribute("src",element.image);
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

        productCards.addEventListener("click", () => {
            window.location.href = `product.html?id=${element.id}`;
        });

    });
 }

 async function loadAll(): Promise<void> {

    let catLabels : HTMLDivElement = document.createElement("div");
    catLabels.innerHTML=`SEARCH RESULTS FOR ${SEARCH_BAR.value} <i class="ri-arrow-right-double-fill">`;

    catLabels.classList.add("catLabels");


    PRODUCT_DISPLAY.innerHTML='';

    let raw     :   any = await fetch('https://fakestoreapi.com/products');
    let product :   any = await raw.json();

    let FILTER_PRODUCTS : [] = [];
        
    FILTER_PRODUCTS = product.filter((product:any) => 
            product.title.toLowerCase().includes(SEARCH_BAR.value));

    PRODUCTROPICA.innerHTML='';
    PRODUCTASIA.innerHTML='';
    
    PRODUCTROPICA.appendChild(catLabels);
    FILTER_PRODUCTS.forEach((element: any) => {
    
        let productCards    : HTMLDivElement        = document.createElement("div");
        let imageHolder     : HTMLDivElement        = document.createElement("div");
        let img             : HTMLImageElement      = document.createElement("img");
        let title           : HTMLHeadingElement    = document.createElement("h1");
        let productTextDiv  : HTMLDivElement        = document.createElement("div");
        let quickViewDiv    : HTMLDivElement        = document.createElement("div");
        let qDivButton      : HTMLButtonElement     = document.createElement("button");
        let qDivButtonText  : Text                  = document.createTextNode("QUICK VIEW");
        let titleText       : Text                  = document.createTextNode(element.title);
        
        productTextDiv.classList.add("productTextDiv");
        productCards.classList.add("products-cards");
        imageHolder.classList.add("imageHolder");
        title.classList.add("title-item");
        quickViewDiv.classList.add("q-v-div");
        qDivButton.classList.add("q-div-btn");

        img.setAttribute("src",element.image);
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

        productCards.addEventListener("click", () => {
            window.location.href = `product.html?id=${element.id}`;
        });

        PRODUCTROPICA.appendChild(PRODUCTASIA);

    });
 }

SEARCH_BAR.addEventListener("input",()=>{

    console.log("clicks");
        
    if(SEARCH_BAR.value)
    {
        loadAll();
        console.log("cond1");
    }
    else{
        PRODUCTROPICA.innerHTML='';
        console.log("cond2");
        loadMensClothes();
        loadWomensClothes();
    }
    
});

loadMensClothes();
loadWomensClothes();





