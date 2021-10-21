import React,{useState} from 'react'

import "./ExpenseForm.css"
export default function ExpenseForm(props) {
    const[enteredTitle,setEnteredTitle]= useState("");
    const [enteredAmount,setEnteredAmount]=useState("");
    const [enteredDate,setEnteredDate]=useState("");
  
    const titleChangeHandler=(event)=>{
        //console.log(event.target.value);
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };
    
    
    const submitHandler=(e)=>{
        e.preventDefault();
    if(enteredTitle.length===0 || enteredAmount===null ||enteredDate===null){
        alert('All fields are required');
    }
    //  console.log(enteredTitle);
    //  console.log(enteredAmount);
    //  console.log(enteredDate);
        
        //console.log(131);
    else{
        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate),
        }
      //  console.log(expenseData);
        setEnteredAmount("");
        setEnteredTitle("");
        setEnteredDate("");
        
        props.onSaveExpenseData(expenseData);
        
    }
    };
    
    return (
        <div >
             <form action="" onSubmit={submitHandler}>
              <div className="new-expense__controls">
                 <div className="new-expense__control">
                     <label htmlFor="">Title</label>
                     <input type="text" defaultValue={enteredTitle} onChange={titleChangeHandler} />
                 </div>
                 <div className="new-expense__control">
                     <label htmlFor="">Amount</label>
                     <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                 </div>
                 <div className="new-expense__control">
                     <label htmlFor="">Date</label>
                     <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                 </div>
             </div>
             <div className="new-expense__control">
                 <button type="submit">Add Expenses</button>
                 <button type="button" onClick={props.clickedOnCancel}>Cancel</button>                 
             </div> 
         </form>
        </div>
    )
}
