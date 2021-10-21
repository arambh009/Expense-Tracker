import React from 'react'
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
   //rendering expense items
    if(props.items.length===0){
           return <h2 className="expenses-list__fallback">Found no expenses.</h2>
       }
   
    return (
        <ul className="expenses-list">
            {   props.items.map((e)=>{
                    return <ExpenseItem title={e.title} 
                            key ={e.id} date={e.date} 
                            amount={e.amount}/>
                })
            }
        </ul>
    )
}
