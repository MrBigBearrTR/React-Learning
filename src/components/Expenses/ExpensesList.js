import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList =(props)=>{
    if(props.data.length===0){
        return <h2 className="expenses-list__fallback"> Found no Expenses.</h2>
    }

    return <ul className="expenses-list">
        {props.data.map(expens=> <ExpenseItem key={expens.id} data={expens}/>)}
    </ul>
};

export default ExpensesList;
