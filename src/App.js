import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Carrito } from './components/Carrito';
import { Informacion } from './components/Informacion';
import { Galeria } from './Galeria';

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Galeria />
        </Route>
        <Route exact path="/Carrito">
          <Carrito />
        </Route>

        <Route path="/Informacion/:id" component={Informacion} />

        <Route exact path="/">
          <Redirect to="/" />
        </Route>
      </div>
    </Router>
  );
}
