// selecting the main divs to display stuff

const PRODUCT_DISPLAY                   = document.querySelector('.productDisplay') as HTMLBodyElement;
const SEARCH_SELECT : HTMLDivElement    = document.createElement("div");
const SEARCH_BAR                        = document.querySelector("form input") as HTMLInputElement;
const PRODUCTROPICA                     = document.querySelector('.productropica') as HTMLBodyElement;
const PRODUCTASIA   : HTMLDivElement    = document.createElement("div");
const MAIN                              = document.querySelector('.main') as HTMLBodyElement;
const HAMBURG                           = document.querySelector('#hamburger') as HTMLDivElement;
const LINKS                             = document.querySelector('.links') as HTMLDivElement;

let flag:number=0;

HAMBURG.addEventListener("click",()=>{
    if(flag===0)
    {
        LINKS.style.display = "flex";
        flag=1;
    }
    else
    {
        LINKS.style.display = "none";
        flag=0;
    }
})

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
    let catRow      : HTMLDivElement    = document.createElement("div");
    let sortBTN     : HTMLButtonElement = document.createElement("button");
    let menProductDisplay : HTMLDivElement = document.createElement("div");
    catLabels.innerText="MEN";

    catLabels.classList.add("catLabels");
    menProductDisplay.classList.add("p-dis");

    catRow.classList.add("catRow");
    sortBTN.classList.add("sort-btn");
    sortBTN.innerHTML=`SORT PRICE <i class="ri-arrow-up-down-line"></i>`;

    catRow.appendChild(catLabels);
    catRow.appendChild(sortBTN);
    PRODUCT_DISPLAY.appendChild(catRow);
    PRODUCT_DISPLAY.appendChild(menProductDisplay);
    
    let raw     :   any = await fetch('https://fakestoreapi.com/products/category/men\'s clothing');
    let product :   any = await raw.json();
    
    let sortOrder = 'asc';
    
    sortBTN.addEventListener("click", () => {
        console.log("sort clicked");
        
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        
        sortBTN.innerHTML = ` PRICE ${sortOrder === 'asc' ? '<i class="ri-sort-asc"></i>' : '<i class="ri-sort-desc"></i>'}`;

        product.sort((a: { price: number }, b: { price: number }) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    
        menProductDisplay.innerHTML = '';
        product.forEach((element: any) => {

            let productCards    : HTMLDivElement        = document.createElement("div");
            let imageHolder     : HTMLDivElement        = document.createElement("div");
            let img             : HTMLImageElement      = document.createElement("img");
            let title           : HTMLHeadingElement    = document.createElement("h1");
            let price           : HTMLHeadElement       = document.createElement("h1");
            let productTextDiv  : HTMLDivElement        = document.createElement("div");
            let quickViewDiv    : HTMLDivElement        = document.createElement("div");
            let qDivButton      : HTMLButtonElement     = document.createElement("button");
            let qViewDis        : HTMLDivElement        = document.createElement("div");
            let qDivButtonText  : Text                  = document.createTextNode("QUICK VIEW");
            let titleText       : Text                  = document.createTextNode(element.title);
            let priceText       : Text                  = document.createTextNode(element.price);
            

            
            productTextDiv.classList.add("productTextDiv");
            productCards.classList.add("products-cards");
            imageHolder.classList.add("imageHolder");
            title.classList.add("title-item");
            quickViewDiv.classList.add("q-v-div");
            qDivButton.classList.add("q-div-btn");
            qViewDis.classList.add("q-v-dis");

            img.setAttribute("src",element.image);
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

            productCards.addEventListener("click", () => {
                window.location.href = `product.html?id=${element.id}`;
            });

        });
    });

       
    
    product.forEach((element: any) => {
    
        let productCards    : HTMLDivElement        = document.createElement("div");
        let imageHolder     : HTMLDivElement        = document.createElement("div");
        let quickViewImageHolder     : HTMLDivElement        = document.createElement("div");
        let img             : HTMLImageElement      = document.createElement("img");
        let imgQView        : HTMLImageElement      = document.createElement("img");
        let title           : HTMLHeadingElement    = document.createElement("h1");
        let productTextDiv  : HTMLDivElement        = document.createElement("div");
        let quickViewDiv    : HTMLDivElement        = document.createElement("div");
        let qDivButton      : HTMLButtonElement     = document.createElement("button");
        let qViewDis        : HTMLDivElement        = document.createElement("div");
        let pQView          : HTMLDivElement        = document.createElement("div");
        let productDescription  : HTMLDivElement    = document.createElement("div");
        let category            : HTMLDivElement    = document.createElement("div");
        let productTitle        : HTMLDivElement    = document.createElement("div");
        let desc                : HTMLDivElement    = document.createElement("div");
        let price               : HTMLDivElement    = document.createElement("div");
        let productQuickView    : HTMLDivElement    = document.createElement("div");
        let qDivButtonText  : Text                  = document.createTextNode("QUICK VIEW");
        let titleText       : Text                  = document.createTextNode(element.title);
        let categoryText        : Text              = document.createTextNode(element.category);
        let productTitleText    : Text              = document.createTextNode(element.title);
        let descText            : Text              = document.createTextNode(element.description);
        let priceText           : Text              = document.createTextNode("¥ " + element.price * 1500);

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

        img.setAttribute("src",element.image);
        imgQView.setAttribute("src",element.image);
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

        qDivButton.addEventListener("mouseover",()=>{
            qViewDis.style.display="block";
            qViewDis.addEventListener("mouseleave",()=>{
                qViewDis.style.display="none";
            })
        })

        qViewDis.appendChild(productQuickView);
        productQuickView.appendChild(pQView);
        productQuickView.appendChild(productDescription);
        pQView.appendChild(quickViewImageHolder);

        productCards.addEventListener("click", () => {
            window.location.href = `product.html?id=${element.id}`;
        });

    });
}

async function loadWomensClothes(): Promise<void> {
    PRODUCTROPICA.innerHTML='';    
    console.log("loading women clothes")

    let catLabels : HTMLDivElement = document.createElement("div");
    let catRow      : HTMLDivElement    = document.createElement("div");
    let sortBTN     : HTMLButtonElement = document.createElement("button");
    let womenProductDisplay : HTMLDivElement = document.createElement("div");
    catLabels.innerText="WOMEN";
    
    catLabels.classList.add("catLabels");
    womenProductDisplay.classList.add("p-dis")

    catRow.classList.add("catRow");
    sortBTN.classList.add("sort-btn");
    sortBTN.innerHTML=`SORT PRICE <i class="ri-arrow-up-down-line"></i>`;

    catRow.appendChild(catLabels);
    catRow.appendChild(sortBTN);
    PRODUCT_DISPLAY.appendChild(catRow);
    PRODUCT_DISPLAY.appendChild(womenProductDisplay);
    
    let raw     :   any = await fetch('https://fakestoreapi.com/products/category/women\'s clothing?limit=4');
    let product :   any = await raw.json();

    let sortOrder = 'asc';
    
    sortBTN.addEventListener("click", () => {
        console.log("sort clicked");
        
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

        sortBTN.innerHTML = ` PRICE ${sortOrder === 'asc' ? '<i class="ri-sort-asc"></i>' : '<i class="ri-sort-desc"></i>'}`;
    
        product.sort((a: { price: number }, b: { price: number }) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    
        womenProductDisplay.innerHTML = '';
        product.forEach((element: any) => {

            let productCards    : HTMLDivElement        = document.createElement("div");
            let imageHolder     : HTMLDivElement        = document.createElement("div");
            let img             : HTMLImageElement      = document.createElement("img");
            let title           : HTMLHeadingElement    = document.createElement("h1");
            let price           : HTMLHeadElement       = document.createElement("h1");
            let productTextDiv  : HTMLDivElement        = document.createElement("div");
            let quickViewDiv    : HTMLDivElement        = document.createElement("div");
            let qDivButton      : HTMLButtonElement     = document.createElement("button");
            let qDivButtonText  : Text                  = document.createTextNode("QUICK VIEW");
            let titleText       : Text                  = document.createTextNode(element.title);
            let priceText       : Text                  = document.createTextNode(element.price);


            productTextDiv.classList.add("productTextDiv");
            productCards.classList.add("products-cards");
            imageHolder.classList.add("imageHolder");
            title.classList.add("title-item");
            quickViewDiv.classList.add("q-v-div");
            qDivButton.classList.add("q-div-btn");

            img.setAttribute("src",element.image);
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

            productCards.addEventListener("click", () => {
                window.location.href = `product.html?id=${element.id}`;
            });

        });
    });
    

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

    let catLabels   : HTMLDivElement    = document.createElement("div");
    let catRow      : HTMLDivElement    = document.createElement("div");
    let sortBTN     : HTMLButtonElement = document.createElement("button");

    catLabels.innerHTML=`SEARCH RESULTS FOR ${SEARCH_BAR.value} <i class="ri-arrow-right-double-fill">`;

    catLabels.classList.add("catLabels");
    catRow.classList.add("catRow");
    sortBTN.classList.add("sort-btn");
    sortBTN.innerHTML=`SORT PRICE <i class="ri-arrow-up-down-line"></i>`;

    PRODUCT_DISPLAY.innerHTML='';

    let raw     :   any = await fetch('https://fakestoreapi.com/products');
    let product :   any = await raw.json();

    let FILTER_PRODUCTS : [] = [];
        
    FILTER_PRODUCTS = product.filter((product:any) => 
            product.title.toLowerCase().includes(SEARCH_BAR.value));

    PRODUCTROPICA.innerHTML='';
    PRODUCTASIA.innerHTML='';
    
    catRow.appendChild(catLabels);
    catRow.appendChild(sortBTN);
    PRODUCTROPICA.appendChild(catRow);

    let sortOrder = 'asc';
    
    sortBTN.addEventListener("click", () => {
        console.log("sort clicked");
        
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

        sortBTN.innerHTML = ` PRICE ${sortOrder === 'asc' ? '<i class="ri-sort-asc"></i>' : '<i class="ri-sort-desc"></i>'}`;
    
        product.sort((a: { price: number }, b: { price: number }) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    
        PRODUCTASIA.innerHTML = '';
        product.forEach((element: any) => {

            let productCards    : HTMLDivElement        = document.createElement("div");
            let imageHolder     : HTMLDivElement        = document.createElement("div");
            let img             : HTMLImageElement      = document.createElement("img");
            let title           : HTMLHeadingElement    = document.createElement("h1");
            let price           : HTMLHeadElement       = document.createElement("h1");
            let productTextDiv  : HTMLDivElement        = document.createElement("div");
            let quickViewDiv    : HTMLDivElement        = document.createElement("div");
            let qDivButton      : HTMLButtonElement     = document.createElement("button");
            let qDivButtonText  : Text                  = document.createTextNode("QUICK VIEW");
            let titleText       : Text                  = document.createTextNode(element.title);
            let priceText       : Text                  = document.createTextNode(element.price);


            productTextDiv.classList.add("productTextDiv");
            productCards.classList.add("products-cards");
            imageHolder.classList.add("imageHolder");
            title.classList.add("title-item");
            quickViewDiv.classList.add("q-v-div");
            qDivButton.classList.add("q-div-btn");

            img.setAttribute("src",element.image);
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

            productCards.addEventListener("click", () => {
                window.location.href = `product.html?id=${element.id}`;
            });

            PRODUCTROPICA.appendChild(PRODUCTASIA);

        });
    });


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





