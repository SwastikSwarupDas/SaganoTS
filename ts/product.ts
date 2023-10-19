
const PRODUCT = document.querySelector(".product") as HTMLBodyElement;
const WOMEN_PRODUCT_DISPLAY2 = document.querySelector('.womenProductDisplay') as HTMLBodyElement;
const MEN_PRODUCT_DISPLAY2 = document.querySelector('.menProductDisplay') as HTMLBodyElement;

const URL_PARAMS = new URLSearchParams(window.location.search);
const PRODUCT_ID = URL_PARAMS.get('id');

console.log(PRODUCT_ID);

const HAMBURG2                           = document.querySelector('#hamburger') as HTMLDivElement;
const LINKS2                             = document.querySelector('.links') as HTMLDivElement;

let flag2:number=0;

HAMBURG2.addEventListener("click",()=>{
    if(flag2===0)
    {
        LINKS2.style.display = "flex";
        flag2=1;
    }
    else
    {
        LINKS2.style.display = "none";
        flag2=0;
    }
})

async function loadProduct(PRODUCT_ID   : string | null ) : Promise<void> {
    
    console.log(PRODUCT_ID);

    let response    : any   = await fetch(`https://fakestoreapi.com/products/${PRODUCT_ID}`);
    let productData : any   = await response.json();

    let productImage        : HTMLDivElement    = document.createElement("div");
    let productDescription  : HTMLDivElement    = document.createElement("div");
    let category            : HTMLDivElement    = document.createElement("div");
    let productTitle        : HTMLDivElement    = document.createElement("div");
    let desc                : HTMLDivElement    = document.createElement("div");
    let price               : HTMLDivElement    = document.createElement("div");
    let productQuantity     : HTMLDivElement    = document.createElement("div");
    let bagButton           : HTMLButtonElement = document.createElement("button");
    let img                 : HTMLImageElement  = document.createElement("img");
    let buttonText          : Text              = document.createTextNode("add to bag");
    let categoryText        : Text              = document.createTextNode(productData.category);
    let productTitleText    : Text              = document.createTextNode(productData.title);
    let descText            : Text              = document.createTextNode(productData.description);
    let priceText           : Text              = document.createTextNode("¥ " + productData.price * 1500);
    let quantityText        : Text              = document.createTextNode("");

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

    const cartString: string | null = localStorage.getItem("cart") || '';
        
    let cart: any[] = JSON.parse(cartString || '[]');
      
    let productIndex = cart.findIndex(( p : any)=>p.id==PRODUCT_ID);

    console.log(productIndex);

    if (cart[productIndex]?.quantity) {
        let quantity: number = cart[productIndex].quantity;
        productQuantity.innerText = `${quantity} in bag`;
    }

    console.log(productIndex);

    bagButton.addEventListener("click", function() {
        
        let existingProduct = cart.find((product: any) => product.id === productData.id);
    
        if (existingProduct) {
            existingProduct.quantity += 1;
            productQuantity.innerText = existingProduct.quantity + " in bag";
        } else {
            productData.quantity = 1;
            cart.push(productData);
            productQuantity.innerText = productData.quantity + " in bag";
        }
    
        localStorage.setItem("cart", JSON.stringify(cart));
    
        console.log("Cart updated:", cart);
    });

}

async function loadWomensClothes2(): Promise<void> {
    
    let raw     :   any = await fetch('https://fakestoreapi.com/products/category/women\'s clothing?limit=4');
    let product :   any = await raw.json();
    
    console.log(product);
    
    product.forEach((element: any) => {
    
        let productCards      : HTMLDivElement        = document.createElement("div");
        let imageHolder     : HTMLDivElement        = document.createElement("div");
        let img             : HTMLImageElement      = document.createElement("img");
        let title           : HTMLHeadingElement    = document.createElement("h1");
        let productTextDiv  : HTMLDivElement        = document.createElement("div");
        let titleText       : Text                  = document.createTextNode(element.title);
        let quickViewDiv    : HTMLDivElement        = document.createElement("div");
        let qDivButton      : HTMLButtonElement     = document.createElement("button");
        let qDivButtonText  : Text                  = document.createTextNode("QUICK VIEW");

        productTextDiv.classList.add("productTextDiv");
        productCards.classList.add("products-cards");
        imageHolder.classList.add("imageHolder");
        title.classList.add("title-item");
        quickViewDiv.classList.add("q-v-div");
        qDivButton.classList.add("q-div-btn");

        img.setAttribute("src",element.image);
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

        productCards.addEventListener("click", () => {
            window.location.href = `product.html?id=${element.id}`;
        }); 
    });
 }

 async function loadMensClothes2(): Promise<void> {
    
    let raw     :   any = await fetch('https://fakestoreapi.com/products/category/men\'s clothing?limit=4');
    let product :   any = await raw.json();
    
    console.log(product);
    
    product.forEach((element: any) => {
    
        let productCards    : HTMLDivElement        = document.createElement("div");
        let imageHolder     : HTMLDivElement        = document.createElement("div");
        let img             : HTMLImageElement      = document.createElement("img");
        let title           : HTMLHeadingElement    = document.createElement("h1");
        let productTextDiv  : HTMLDivElement        = document.createElement("div");
        let titleText       : Text                  = document.createTextNode(element.title);

        productTextDiv.classList.add("productTextDiv");
        productCards.classList.add("products-cards");
        imageHolder.classList.add("imageHolder");
        title.classList.add("title-item");

        img.setAttribute("src",element.image);
        img.classList.add("p-img-cat-bottom");

        imageHolder.appendChild(img);
        productCards.appendChild(imageHolder);
        productTextDiv.appendChild(title);
        title.appendChild(titleText);
        productCards.appendChild(productTextDiv);

        MEN_PRODUCT_DISPLAY2.appendChild(productCards);
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
