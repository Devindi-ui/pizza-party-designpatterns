import { useState } from "react";
import PizzaOven from "./design-patterns/PizzaOven";
import PizzaBuilder from "./design-patterns/PizzaBuilder";
import PizzaFactory from "./design-patterns/PizzaFactory";
import { WeirdPizza, PizzaAdapter } from "./design-patterns/PizzaAdapter";
import PizzaObserver, { Customer } from "./design-patterns/PizzaObserver";
import PizzaDilivery from "./design-patterns/PizzaDelivery";
import Pizza, { ExtraCheese, Mushroom, Pepperoni } from "./design-patterns/PizzaDecorator";
import "./App.css";

function App() {
  const [output, setOutput] = useState([]);

  const log = (message) => {
    setOutput((prev) => [...prev, message]);
  }

  const clearLog = () => {
    setOutput([]);
  }

  //singleton demo
  const demoSingleton = () => {
    clearLog();
    log("====Singleton pattern demo====");
    log("There can be only one oven in the kitchen");

    const oven1 = PizzaOven;
    const oven2 = PizzaOven;

    log(`are both oven references the same: ${oven1===oven2}`);

    oven1.turnOn();
    oven1.bake();
  };

  //builder demo
  const demoBuilder = () => {
    clearLog();
    log("====Builder pattern demo====");
    log("Let's build a custom pizza step by step!");

    const builder = new PizzaBuilder();
    const pizza = builder
      .setBase("thin crust")
      .setSauce("tomato")
      .addCheese("Mozzarella")
      .addToppings("Olives")
      .addToppings("Onion")
      .build();

    log("Your custom pizza");
    log(JSON.stringify(pizza, null, 2));
  };

  //Factory Demo
  const demoFactory = () => {
    clearLog();
    log("====Factory pattern demo====");
    log("Let the factory create pizzas!!");

    const factory = new PizzaFactory();
    const margherita = factory.createPizza("margherita");
    const pepperoni = factory.createPizza("pepperoni");

    log(`Margherita: ${margherita.price}`);
    log(`Pepperoni: ${pepperoni.price}`);
  };

  //Adapter demo
  const demoAdapter = () => {
    clearLog();
    log("====Adapter pattern demo====");
    log("Making a weird pizza work with shop system");

    const weirdPizza = new WeirdPizza();
    const adapter = new PizzaAdapter(weirdPizza);

    log(adapter.bake());
  };

  //observer demo
  const demoObserver = () => {
    clearLog();
    log("====Observer pattern demo====");
    log("Customers will be notified when pizza is ready");

    const order = new PizzaObserver();
    const customer1 = new Customer("Panchali");
    const customer2 = new Customer("Shanika");

    order.addCustomer(customer1);
    order.addCustomer(customer2);

    log("Updating order status.....");
    order.updateStatus("preparing");
    order.updateStatus("baking");
    order.updateStatus("delivered");
  };

  //State demo
  const demoState = () => {
    clearLog();
    log("====State pattern demo====");
    log("Tracking pizza delivery status");

    const delivery = new PizzaDilivery();
    log("current state: " + delivery.state.name);

    log("Moving next state...");
    delivery.nextState();
    log("Moving previos state...");
    delivery.previousState();
  };

  const demoDecorator = () => {
    clearLog();
    log("====Decorator pattern demo====");
    log("Adding toppings to the pizza dynamically");

    let pizza = new Pizza();
    log(pizza.getDescription() + " $" + pizza.getCost());

    log("adding extra cheese...");
    pizza = new ExtraCheese(pizza);
    log(pizza.getDescription() + " $" + pizza.getCost());
  }

  return (
    <div className="app">
      <h1>Pizza party - The Pizza Shop</h1>
      <div className="buttons">
        <button onClick={demoSingleton}>Pizza Oven</button>
        <button onClick={demoBuilder}>Pizza Builder</button>
        <button onClick={demoFactory}>Pizza Factory</button>
        <button onClick={demoAdapter}>Pizza Adapter</button>
        <button onClick={demoObserver}>Shop Observer</button>
        <button onClick={demoState}>State</button>
        <button onClick={demoDecorator}>Decorator</button>
        <button onClick={clearLog}>Clear All</button>
      </div>
      <div className="output">
        <h2>Console Output</h2>
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
