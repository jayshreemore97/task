class Product{
    public cid:number = 0;
    public cname:string  = "";
    public city:string="";

    constructor(cid:number = 0,cname:string="",city:string="")
    {
        this.cid = cid;
        this.cname=cname;
        this.city=city;
    }
   

    public showDetails():void
    {
        console.log("Customer no Number : " + this.cid);
        console.log("Customer  Name : " + this.cname);
        console.log("City : " + this.city);
    }

}
let p1:Product = new Product();
let p2:Product = new Product(10256);
let p3:Product = new Product(10256, "Sam");
let p4:Product = new Product(10256, "Sam","Hyd");
p1.showDetails();
p2.showDetails();
p3.showDetails();
p4.showDetails();