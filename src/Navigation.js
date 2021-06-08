import React from 'react';
import './Navigation.css';
import Card from './Card.js';
import data from './api.json';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Router>
      <nav className="Navigation">
        <div className="left">
          <img
            className="logo"
            alt="logo"
            src="https://i.pinimg.com/originals/66/f7/72/66f77296282b5ab7c2780724802614c0.png"
          />
        </div>
        <div className="right">
          <ul className="links">
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/Favori">Favoriler</Link>
            </li>
            <li>
              <Link to="/Cart">Sepetim</Link>
            </li>
            <li>
              <Link to="/Iletisim">İletişim</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/Favori">
          <Favori />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/Iletisim">
          <Iletisim />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Cart() {
  return <h2>Sepetim</h2>;
}

function Iletisim() {
  return <h2>İletişim</h2>;
}

function Favori() {
  return <h2>Favori</h2>;
}
function Home() {
  return (
    <>
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          img={item.avatar}
          title={item.title}
          price={item.price}
          alt={item.title}
        />
      ))}
    </>
  );
}
