import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
 return(
  <div>
    <h1>Padre Gino's - Order Now</h1>
    <pizza name="pepperoni" description="pep,cheese,n stuff"/>
    <pizza name="Hawaiian" description="ham, pinapple,n stuff"/>
    <pizza name="Pineapple" description="french fries, hot dogs, n stuff"/>
  </div>
 );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
