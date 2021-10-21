import React,{useState} from 'react'

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
export default function Expenses(props) {

    const[yearSelected,setYearSelected]=useState("2021");
    
    const onYearChange=(year)=>{
        setYearSelected(year);
    }
    const filteredExpenses= props.expenses.filter((expense)=>{
        const yr = expense.date.getFullYear().toString();
        
        return yearSelected===yr;
    });

    return (
        <>
        <Card className="expenses">
        <ExpensesFilter selectedYear={yearSelected} onYearClicked={onYearChange}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
        </Card>
        </>
    )
}
