
import './App.css';
import Data from './Data';
import Card from './Card';
import expenses from './Data';


function createCard(Data) {
  return (
    <Card
    key={Data.id}
    name={Data.name}
    price={Data.price}
    
    />
  )
}

    let total = expenses.reduce(function(tot, arr) { 
      // return the sum with previous value
      return tot + arr.price;
      // set initial value as 0
    },0);
    
export default function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {Data.map(createCard)}
      <h3>Total: {total}</h3>
    </div>
  );
}


