//Builder - Build cutom pizza step by step
class PizzaBuilder {
    constructor(){
        this.pizza = {
            base: null,
            sauce: null,
            cheese: null,
            toppings: [],
            size: null
        }
    }

    setBase(base){
            this.pizza.base = base;
            return this;
    }

    setSauce(sauce){
        this.pizza.sauce = sauce;
        return this;
    }

    addCheese(cheese){
        this.pizza.cheese = cheese;
        return this;
    }

    addToppings(toppings){
        this.pizza.toppings = toppings;
        return this;
    }

    setSize(size){
        this.pizza.size = size;
        return this;
    }

    build(){
        console.log("Building your custom pizza....");
        return this.pizza;
    }
}

export default PizzaBuilder;