import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from './components/cart/Cart'
import TemplateProvider from './templates/TemplateProvider'
import ContextProvider from "./context/ContextProvider";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DetailView from './components/itemDetail/DetailView';

function App() {
  return (
    <TemplateProvider>
    <ContextProvider>

     <BrowserRouter className="App">
       <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={DetailView} />
        </Switch>

        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
