import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'

import {Main} from "./pages/main-page/main-page";
import {Form} from "./pages/form-page/form-page";
import {Catalog} from "./pages/catalog-page/catalog-page";
import {HeaderContainer} from "./modules/header/header-container";
import Footer from "./components/footer/footer";

function App(props) {
  return (
<>
      <BrowserRouter>
        <HeaderContainer/>
<Switch>
  <Route path={'/'} exact component={Main}/>
  <Route path={'/form'} component={Form}/>
    <Route path={'/catalog'} component={Catalog}/>
</Switch>
      </BrowserRouter>
<Footer/>
    </>
  );
}

export default App;
