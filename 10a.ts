const cart:string[]=[];
const pushtoCart=(item:string)=>{cart.push(item)};
function addtoCart(...productName:string[]):string[] {
    for(const item of productName){
        pushtoCart(item);
    }
    return cart;
}
addtoCart('MotoG play','4th gen','Apple iphone 5s')
console.log(cart)
//console.log('Cart items are:'+addtoCart('MotoG play','4th gen','Apple iphone 5s'));