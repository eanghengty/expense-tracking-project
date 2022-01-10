import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id:'el1', title:"car insurance1", amount:217, date: new Date(2022,2,12)
    },
    {
      id:'el2', title:"car insurance2", amount:218, date: new Date(2022,2,13)
    },
    {
      id:'el3', title:"car insurance3", amount:219, date: new Date(2022,2,14)
    }

  ]
  const addExpenseHandler=(expense)=>{
      console.log(expense)
  }

  return ( 
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default  App;