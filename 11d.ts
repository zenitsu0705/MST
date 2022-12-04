class Products{
    static productPrice=19999;
    private prodid:number;
    public prodname:string;
    protected category:string;
    constructor(prodid:number,prodname:string,category:string){
        this.prodid=prodid;
        this.prodname=prodname;
        this.category=category;
    }
    getproductid():void{
        console.log('the product id '+this.prodid);
        
    }
}

class gadget extends Products{
    getprodcate():void{
        console.log('the prodcr category is '+this.category);
    }
}

const g:gadget=new gadget(12,'mobile','smartphone');
g.getproductid();
g.getprodcate();
console.log('the product price '+Products.productPrice);
console.log('the product name :'+g.prodname);