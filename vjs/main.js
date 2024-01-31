// deno-lint-ignore-file
// add active class in selected thumbnails
function img(any){
    document.querySelector('.vlmchange').src = any;
}
function color(col){
    const bg = document.querySelector('.vlmbg');
    bg.style.background = col;
}
let el = document.querySelectorAll('#vlmthumb li');

for(let i = 0; i< el.length; i++){
    el[i].onclick= function(){
        var c = 0;
        while(c < el.length){
            el[c++].className = "check";
        }
        el[i].className = 'check active'
    }
}
// my function 2
// select the first div to maintain the code
const vlmheader = document.querySelector('.vlmheader');
const vlmmenu1 = document.querySelector('.wholesection');

document.querySelector('#vlmmenu').addEventListener('click', ()=>{
    vlmheader.style.display = 'block';
    vlmmenu1.style.display = 'none'
});

// 

// select the second div to maintain the code
const vlmheader2 = document.querySelector('.vlmheader');
const vlmselect2 = document.querySelector('.wholesection');
const vlmmenu2 = document.querySelector('.vlmapp');

document.querySelector('#vlmbook').addEventListener('click', ()=>{
    vlmmenu2.style.display = 'block'
    vlmheader2.style.display = 'none';
    vlmselect2.style.display = 'none'
});

// 

const layer1 = document.getElementById("vlayer1");
scroll = window.pageYOffset;
document.addEventListener('scroll', async (ev) =>{
    const offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 +scroll + '%')
});

const layer2 = document.getElementById("vlayer2");
scroll = window.pageYOffset;
document.addEventListener('scroll', async (ev) =>{
    const offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 +scroll/5 + '%');
    layer2.style.left = scroll/50 + '%';

});

const text = document.getElementById("text");
scroll = window.pageYOffset;
document.addEventListener('scroll', async (ev) =>{
    const offset = window.pageYOffset;
    scroll = offset;
    text.style.width = (100 +scroll/50 + '%');
    text.style.top = -scroll/10 + '%';
});


// add image dnamicaly and add items to cart
const vlmcartbtn = document.querySelector('.floatB');
const vlmclosebtn = document.querySelector('.close-cart');
const vlmclearbtn = document.querySelector('.vma-btn');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const cartProduct = document.querySelector('.products-center');

// cart
let cart = [];
// getting the products
class Products{
    async getProducts(){
        try {
            let result = await fetch('products.json')
            let data = await result.json();
            
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}
// display Products
class UI{

}

// localstorange
class Storage{

}

document.addEventListener("DOMContentLoaded", ()=>{
    const vlmui = new UI();
    const products = new Products();

    // get all products
    products.getProducts().then(data=> console.log(data) )
})