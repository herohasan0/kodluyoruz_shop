import './App.css';
import Card from './Card.js';

import data from './api.json';

function App() {
  return (
    <div className="App">
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
