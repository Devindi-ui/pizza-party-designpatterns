// Singleton - there is only one pizza oven in the kitchen
class PizzaOven{
    constructor(){
        if(PizzaOven.instance){
            return PizzaOven.instance;
        }
        this.isOn = false;
        this.temperature = 0;
        PizzaOven.instance = this;

    }

    turnOn(){
        this.isOn = true;
        this.temperature = 200;
        console.log("Oven is heating up! 🔥")
    }

    bake(pizza){
        if(!this.isOn){
            console.log("Please turn on the oven first!!")
            return;
        }
        console.log(`Baking ${pizza} at ${this.temperature} °C...`)
    }
}

const oven = new PizzaOven();
// Object.freeze(oven)  //prevent from modifications (no modifications on object)

export default oven;