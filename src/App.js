import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//import ExpensesFilter from "./components/ExpenseFilter/ExpensesFilter"
function App() {
  let DUMMY_EXPENSES=[
    {
      id:1,
      title:'Car Insurance',
      amount:200,
      date:new Date(2021,2,28)
    },
    {
      id:2,
      title:'Car Insurance2',
      amount:200,
      date:new Date(2022,2,28)
    },
    {
      id:3,
      title:'Car Insurance3',
      amount:200,
      date:new Date(2021,2,28)
    },
    {
      id:4,
      title:'Car Insurance4',
      amount:200,
      date:new Date(2021,2,28)
    }
  ];
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  //console.log(expenses);

  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  }
 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
