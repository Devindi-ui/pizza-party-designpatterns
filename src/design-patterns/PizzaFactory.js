//Factory - Create different type pizzas

class PizzaFactory{

    createPizza(type){
        switch (type.toLowerCase()){
            case "margherita":
                return{
                    name: "Margherita",
                    ingredients: ["tomato sauce", "mozzarella", "basil"],
                    price: 800
                };

                case "pepperoni":
                    return{
                        name: "Pepperoni",
                        ingredients: ["tomato sauce", "mozzarella", "pepperoni"],
                        price: 950
                    };

                    case "veggie":
                        return{
                            name: "Veggie Delight",
                            ingredients: ["tomato sauce", "mozzarella", "bell peppers"],
                            price: 900
                        };

                        default:
                            throw new Error(`Unknown pizza type: ${type}`);
        }
    }
}

export default PizzaFactory;