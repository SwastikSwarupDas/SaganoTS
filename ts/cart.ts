let cart2 = JSON.parse(localStorage.getItem("cart") || "[]") || "";

const BAGINATION    = document.querySelector(".bagination")   as HTMLDivElement;
const BILL          = document.querySelector(".tab")          as HTMLDivElement;
const CARTINATION   = document.querySelector(".cartination")  as HTMLDivElement;
const EMPTY_CART    = document.querySelector(".emptyCart")    as HTMLDivElement;

const FADE_RULE     : HTMLDivElement    = document.createElement("div");
FADE_RULE.classList.add("fade_rule");


async function loadCart() : Promise<void> {

    var totalCartSum        : number = 0;
    let totalCartPrice      : HTMLDivElement = document.createElement("div");
    var billCat             : HTMLDivElement    = document.createElement("div");

    BILL.appendChild(FADE_RULE);
    
    totalCartPrice.classList.add("bill-list");
    billCat.classList.add("bill-cat");

    BILL.appendChild(billCat);
    BILL.appendChild(FADE_RULE.cloneNode(true));
    BILL.appendChild(totalCartPrice);
    totalCartPrice.innerHTML="BAG VALUE : ¥" + totalCartSum;

    for (let i = 0; i < cart2.length; i++) {
        let product : any = cart2[i];
        let raw : any = await fetch(`https://fakestoreapi.com/products/${product.id}`);
        let productData : any = await raw.json();

        let removeButton        : HTMLButtonElement = document.createElement("button");
        let removeButtonText    : Text              = document.createTextNode("remove");
        let buttons             : HTMLDivElement    = document.createElement("div");
        let addButton           : HTMLButtonElement = document.createElement("button");
        let addButtonText       : Text              = document.createTextNode("add one");
        let minusButton         : HTMLButtonElement = document.createElement("button");
        let minusButtonText     : Text              = document.createTextNode("take one out");
        let productDiv          : HTMLDivElement    = document.createElement("div");
        let productDesc         : HTMLDivElement    = document.createElement("div");
        let imageHolder         : HTMLDivElement    = document.createElement("div");
        let img                 : HTMLImageElement  = document.createElement("img");
        let productTitle        : HTMLDivElement    = document.createElement("div");
        let titleText           : Text              = document.createTextNode(product.title);
        let billTitleText       : Text              = document.createTextNode(product.title.toUpperCase());
        let price               : HTMLDivElement    = document.createElement("div");
        let priceText           : Text              = document.createTextNode("¥ " + productData.price * 1500);
        let quantity            : HTMLDivElement    = document.createElement("div");
        let quantityText        : Text              = document.createTextNode(product.quantity + " in bag");
        let billList            : HTMLDivElement    = document.createElement("div");
        let billItemName        : HTMLDivElement    = document.createElement("div");
        let billPrice           : Text              = document.createTextNode("¥ " + productData.price * 1500 + " x" + product.quantity);
        let billItem            : HTMLDivElement    = document.createElement("div");
        
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
       

        img.setAttribute("src",productData.image);
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

        addButton.addEventListener("click",function(){
            product.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart2)); 
            quantity.innerText=product.quantity+" in bag";
            billList.innerText="¥ "+product.price*1500 + " x" + product.quantity;
            totalCartSum += (product.price*1500);
            totalCartPrice.innerHTML="BAG VALUE : ¥" + totalCartSum;
        });

        minusButton.addEventListener("click",function(){
            product.quantity -= 1;
            let productIndex = cart2.findIndex(( p : any ) => p.id == product.id);
            if (product.quantity === 0) {
                cart2.splice(productIndex, 1);
                location.reload();
            }
            localStorage.setItem("cart", JSON.stringify(cart2));
            billList.innerText="¥ " +product.price*1500 + " x" + product.quantity;
            quantity.innerText=product.quantity+" in bag";
            totalCartSum -= (product.price*1500);
            totalCartPrice.innerHTML="BAG VALUE : ¥" + totalCartSum;  
        
        });
        
        removeButton.addEventListener("click",function(){
            let productIndex = cart2.findIndex(( product : any ) => product.id == product.id);
            if (productIndex > -1) {
                cart2.splice(productIndex, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart2)); 
            location.reload();
        });
        
        totalCartSum += (product.price*1500) * product.quantity ;
    }
    
    totalCartPrice.innerHTML="BAG VALUE : ¥" + totalCartSum;
    console.log(totalCartSum);

}

if (cart2.length === 0) {
    CARTINATION.style.display="none";
} else {
    EMPTY_CART.style.display="none";
    loadCart();
}


