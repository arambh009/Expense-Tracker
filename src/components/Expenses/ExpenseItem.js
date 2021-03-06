import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

//const [state, setstate] = useState(initialState)

export default function ExpenseItem(props) {
   
  const[title,setTitle]=useState(props.title);
  const clickHandler=()=>{
    setTitle('Updated');
    console.log(title);
  }
   
  return (
    <li>
      <Card className="expense-item">

          <ExpenseDate date={props.date}/>
          <div className="expense-item_description">
              <h2>{title}</h2>
              <div className="expense-item__price">${props.amount}</div>
          </div>
          <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}
