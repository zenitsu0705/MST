function createCustomerid(name, id) {
    return 'The customer id is ' + name + ' ' + id;
}
var idgenerator;
idgenerator = createCustomerid;
var customerid = idgenerator('Mr thor', 101);
console.log(customerid);
