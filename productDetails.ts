class ProductDetails{
    public id:number = 0;
    public name:string  = "";
    public price1:number=0;
    public qty:number=0;

constructor(id:number)
{
  this.id=id;
}



    public get ProductDetailsId():number
    {
        
        return this.id;
    }

   
    public get ProductDetailsName():string
    {
        return this.name
    }


    public set ProductDetailsName(value:string)
    {
        this.name=value;
    }
      
    
    public set ProductDetailsPrice(value:number)
    {
        this.price1=value;
    }
    public get ProductDetailsPrice():number
    {
        return this.price1;
    }
    public set ProductDetailsQty(value:number)
    {
        this.qty=value;
    }
    public get ProductDetailsQty():number
    {
        return this.qty;
    }

}

let pd:ProductDetails =new ProductDetails(102);

pd.ProductDetailsName="Jayshree";
pd.ProductDetailsPrice=300;
pd.ProductDetailsQty=3;

console.log("Id : "+pd.ProductDetailsId);
console.log("Name :"+pd.ProductDetailsName);
console.log("Price "+pd.ProductDetailsPrice);
console.log("Quantity :"+pd.ProductDetailsQty);