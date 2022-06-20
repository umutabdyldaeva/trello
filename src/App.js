import Form from "./components/Form";
import Login from "./components/Login";
import ToDo from "./components/todo/ToDo";
import { BrowserRouter, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Route path="/" exact> <Login/></Route>
      <Route path="/form" exact><Form/></Route>
      <Route path="/todo" exact><ToDo/></Route>
      </BrowserRouter>
     </div>
  );
}

export default App;




