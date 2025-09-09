//State Pattern - track delivery status

class PizzaDelivery{
    constructor(){
        this.state = new OrderedState();
    }

    updateState(state){
        this.state = state;
        this.state.updateUI();
    }

    nextState(){
        this.state.next(this);
    }

    previousState(){
        this.state.prev(this);
    }
}

class DeliveryState{
    constructor(name){
        this.name = name;
    }

    next(){
        console.log(`Moving from ${this.name} to next state`);
    }

    prev(){
        console.log(`Moving from ${this.name} to previous state`);
    }

    updateUI(){
        console.log(`Updating UI to show ${this.name} state`);
    }
}

class OrderedState extends DeliveryState{
    constructor(){
        super("ordered");
    }

    next(delivery){
        console.log("Pizza is being ready to prepare");
        delivery.updateState(new PreparingState());
    }
}

class PreparingState extends DeliveryState{
    constructor(){
        super("preparing");
    }

    next(delivery){
        console.log("Pizza is in the oven!");
        delivery.updateState(new BakingState());
    }

    prev(delivery){
        console.log("Going back to ordered state");
        delivery.updateState(new OrderedState());
    }
}

class BakingState extends DeliveryState{
    constructor(){
        super("baking");
    }

    next(delivery){
        console.log("Pizza is on its way!");
        delivery.updateState(new DeliveringState());
    }

    prev(delivery){
        console.log("Going back to preparing state");
        delivery.updateState(new PreparingState());
    }
}

class DeliveringState extends DeliveryState{
    constructor(){
        super("delivering");
    }

    next(delivery){
        console.log("Pizza has been delivered!");
        delivery.updateState(new DeliveredState());
    }

    prev(delivery){
        console.log("Going back to backing state");
        delivery.updateState(new BakingState());
    }
}

class DeliveredState extends DeliveryState{
    constructor(){
        super("delivered");
    }

    prev(delivery){
        console.log("Going back to delivering state");
        delivery.updateState(new DeliveringState());
    }
}

export default PizzaDelivery;