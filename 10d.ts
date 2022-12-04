function createCustomerid(name:string,id:number):string{
    return 'The customer id is '+name+' ' + id;
}
interface stringgenerator{
    (chars:string,nums:number):string;
}
let idgenerator:stringgenerator;
idgenerator=createCustomerid;
const customerid:string=idgenerator('Mr thor',101);
console.log(customerid);