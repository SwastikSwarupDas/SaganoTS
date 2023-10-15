// selecting the main divs to display stuff

const PRODUCT_DISPLAY = document.querySelector('.menProductDisplay') as HTMLBodyElement;
const WOMEN_PRODUCT_DISPLAY = document.querySelector('.womenProductDisplay') as HTMLBodyElement;

console.log(PRODUCT_DISPLAY.innerText);

// Checking if there exists a Cart object, and if not, creating it.

if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
}

async function loadMensClothes(): Promise<void> {
    
    let raw     :   any = await fetch('https://fakestoreapi.com/products/category/men\'s clothing');
    let product :   any = await raw.json();
    
    console.log(product);
    
    product.forEach((element: any) => {
    
        let productCards      : HTMLDivElement        = document.createElement("div");
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
        img.classList.add("p-img");

        imageHolder.appendChild(img);
        productCards.appendChild(imageHolder);
        productTextDiv.appendChild(title);
        title.appendChild(titleText);
        productCards.appendChild(productTextDiv);

        PRODUCT_DISPLAY.appendChild(productCards);

    });
}

loadMensClothes();




