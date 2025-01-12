import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
 return(
  <div>
    <h1>Padre Gino's - Order Now</h1>
    <Pizza name="pepperoni" description="pep,cheese,n stuff" image={"/public/pizzas/pepperoni.webp"}/>
    <Pizza name="Hawaiian" description="ham, pinapple,n stuff"image={"/public/pizzas/hawaiian.webp"}/>
    <Pizza name="Pineapple" description="french fries, hot dogs, n stuff"image={"/public/pizzas/big_meat.webp"}/>
  </div>
 );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
