import './App.css';
import Balance from './components/Balance';
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import History from './components/History'
import Addnewtransaction from './components/Addnewtransaction'
import { Globalprovider } from './context/globalState';

function App() {
  return (
    <Globalprovider>
      <Header></Header>
      
      <div className='container'>

        <Balance></Balance>

        <IncomeExpense></IncomeExpense>

        <History></History>

        <Addnewtransaction></Addnewtransaction>

      </div>
      </Globalprovider>


  );
}

export default App;
