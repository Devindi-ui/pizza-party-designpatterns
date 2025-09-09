//Decorator - Add extra toppings to the pizza

class Pizza{
    constructor(){
        this.description = "Basic Pizza";
        this.cost = 1000;
    }

    getDescription(){
        return this.description;
    }

    getCost(){
        return this.cost;
    }
}

class PizzaDecorator{
    constructor(pizza){
        this.pizza = pizza;
    }

    getDescription(){
        return this.pizza.getDescription();
    }

    getCost(){
        return this.pizza.getCost();
    }
}

export class ExtraCheese extends PizzaDecorator{
    getDescription(){
        return `${this.pizza.getDescription()}, extra cheese`;
    }

    getCost(){
        return this.pizza.getCost() + 450;
    }
}

export class Pepperoni extends PizzaDecorator{
    getDescription(){
        return `${this.pizza.getDescription()}, pepperoni`;
    }

    getCost(){
        return this.pizza.getCost() + 400;
    }
}

export class Mushroom extends PizzaDecorator{
    getDescription(){
        return `${this.pizza.getDescription()}, mushroom`;
    }

    getCost(){
        return this.pizza.getCost() + 500;
    }
}

export default Pizza;