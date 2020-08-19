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
<Switch>
  <Route path={'/'} exact component={Main}/>
  <Route path={'/form'} component={Form}/>
    <Route path={'/catalog'} component={Catalog}/>
</Switch>
      </BrowserRouter>
  );
}

export default App;
