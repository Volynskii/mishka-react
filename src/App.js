import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Main from "./pages/Main";

import {Form} from "./pages/Form";
import Catalog from "./pages/Catalog";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/footer.jsx"

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
