class house{
    // static properties
    static totalHouses = 300;
    static availableHouses = 150;

    // constructor for house instance
    constructor (flatId,flatLocation){
        this.flatId = flatId;
        this.flatLocation = flatLocation;
    }

    // static method to book fo house space
    static bookHouse(){
        if (availableHouse > 0){
            house.availableHouses--
            console.log("House rented successfully!!!");
        }else{
            console.log("There is no available house at the moment,check back shortly.");
        }
    }

    // static method to return keys
    static returnKeys() {
        house.availableHouses++;
        console.log("You have successfully checked out!")
    }
} //closing the class house

// starting the class customers - Defining the customer class
class customer{
    // static property
    static totalCustomers=0;
    // constructor for customer instances
    constructor (customerId,name){
        this.customerId=customerId;
        this.name=name;
    }
    // method to register customers
    register(){
        console.log(`Customer ${this.name} has been registered`)
    }
    // method to place order for a house space
    orderHouse(){
        console.log(`Customer ${this.name} is placing an order`)
        bookHouse()
    }
    
}
// example usage
// const house1= new house("f001","Uyo");
const customer1=new customer("U001","Daniel");

// simulating return 
house.returnKeys()

// was tying out somethings here. I haven't gained clarity yet but the code runs
// house.bookHouse()
