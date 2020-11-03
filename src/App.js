import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'

import {Main} from "./pages/main-page/main-page";
import {Form} from "./pages/form-page/form-page";
import Catalog from "./pages/catalog-page/catalog-page";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

function App(props) {
  return (
<>
      <BrowserRouter>
        <Header/>
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
