import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import {Main} from "./pages/Main";
import {Form} from "./pages/Form";
import {Catalog} from "./pages/Catalog";
import {Header} from "./containers/Header.js";

function App() {
  return (
      <BrowserRouter>
        <Header/>
    <div className="container pt-4">
<Switch>
  <Route path={'/main'} exact component={Main}/>
  <Route path={'/form'} component={Form}/>
    <Route path={'/catalog'} component={Catalog}/>
</Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
