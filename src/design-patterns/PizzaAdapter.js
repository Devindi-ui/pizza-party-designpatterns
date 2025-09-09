//Adapter - make a weird pizza compatible with shop

class WeirdPizza{
    constructor(){
        this.description = "A pizza with pineapple";
        this.cookTime = "15 min";
    }

    weiredBake(){
        return `Baking this weird pizza for ${this.cookTime}`;
    }
}

class PizzaAdapter{
    constructor(WeirdPizza){
        this.WeirdPizza = WeirdPizza;
    }

    bake(){
        const result = this.WeirdPizza.weiredBake;
        return `${result} (adapt to normal pizza baking process)`;
    }
}

export {WeirdPizza, PizzaAdapter}