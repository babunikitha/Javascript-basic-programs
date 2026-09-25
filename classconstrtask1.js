class Books{
    Title;
    Author;
    price;


    constructor(Title,Author,price)
    {
        this.Title=Title;
        this.Author=Author;
        this.price=price;
    }

    displayDetails()
    {
        console.log(`Title:${this.Title} Author:${this.Author} price:${this.price}`);
    }
}
const book1=new Books("introduction to algorithm","thomas h.cormen",850)
book1.displayDetails();
