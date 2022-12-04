var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Products = /** @class */ (function () {
    function Products(prodid, prodname, category) {
        this.prodid = prodid;
        this.prodname = prodname;
        this.category = category;
    }
    Products.prototype.getproductid = function () {
        console.log('the product id ' + this.prodid);
    };
    Products.productPrice = 19999;
    return Products;
}());
var gadget = /** @class */ (function (_super) {
    __extends(gadget, _super);
    function gadget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    gadget.prototype.getprodcate = function () {
        console.log('the prodcr category is ' + this.category);
    };
    return gadget;
}(Products));
var g = new gadget(12, 'mobile', 'smartphone');
g.getproductid();
g.getprodcate();
console.log('the product price ' + Products.productPrice);
console.log('the product name :' + g.prodname);
