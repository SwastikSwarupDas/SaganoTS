// selecting the main divs to display stuff

const PRODUCT_DISPLAY = document.querySelector('.menProductDisplay') as HTMLBodyElement;
const WOMEN_PRODUCT_DISPLAY = document.querySelector('.womenProductDisplay');

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
    
        let products    : HTMLDivElement    = document.createElement("div");
        let imageHolder : HTMLDivElement    = document.createElement("div");
        let img         : HTMLImageElement  = document.createElement("img");

        products.classList.add("productCard");
        imageHolder.classList.add("imageHolder");

        img.setAttribute("src",element.image);
        img.classList.add("c-img");

        imageHolder.appendChild(img);
        products.appendChild(imageHolder);

        PRODUCT_DISPLAY.appendChild(products);

    });
}

loadMensClothes();




