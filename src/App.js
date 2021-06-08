import './App.css';
import Card from './Card.js';
import Navigation from './Navigation';

import data from './api.json';

function App() {
  return (
    <div className="App">
      <Navigation />
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
    </div>
  );
}

export default App;
