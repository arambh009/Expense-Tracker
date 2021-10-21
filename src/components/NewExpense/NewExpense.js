import React,{useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
export default function NewExpense(props) {
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
       
        props.onAddExpense(expenseData);
    }
    const [displayingExpenseForm, setDisplayingExpenseForm] = useState(false)
    
    const displayForm=()=>{
        setDisplayingExpenseForm(true);
    }
    const collapseExpenseForm=()=>{
        setDisplayingExpenseForm(false);
    }
    return (
        <div className="new-expense">
            {!displayingExpenseForm && <button onClick={displayForm}>Add Expense</button>}  
            {displayingExpenseForm && <ExpenseForm clickedOnCancel={collapseExpenseForm} onSaveExpenseData={saveExpenseDataHandler}/>} 
        
        </div>
    )
}
