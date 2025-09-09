//Observer - notify customers when their status change
class PizzaObserver{
    constructor(){
        this.customers = [];
        this.orderStatus = "Not started";
    }

    addCustomer(customer){
        this.customers.push(customer);
    }

    removeCustomer(customer){
        this.customers = this.customers.filter((c) => c !== customer);
    }

    notifyCustomer(customer){
        this.customers.forEach((customer) => 
            customer.update(this.orderStatus)
        );
    }

    updateStatus(status){
        this.orderStatus = status;
        this.notifyCustomer();
        console.log(`Order status changed to: ${status}`);
    }
}

export class Customer{
    constructor(name){
        this.name = name;
    }

    update(status){
        console.log(`${this.name} says: My pizza order is now: ${status}`);
    }
}

export default PizzaObserver;