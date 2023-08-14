
import { Home, Landing, Detail, Form, Activities, About } from "./views";
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


function App() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing}/>
      <Route exact path="/detail/:id" component={Detail}/>
      <Route exact path="/create" component={Form}/>
      <Route exact path="/activities/:id" component={Activities}/>
      <Route exact path="/about" component={About}/>
      <Route path="/home" render={() => <Home/>}/>
    </div>
  );
}

export default App;
