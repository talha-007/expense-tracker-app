
import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>

    <div className="App">
      <Header></Header>
      <div className='container'>

        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </div>
  </GlobalProvider>
  );
}

export default App;
