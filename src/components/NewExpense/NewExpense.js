import React,{useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense=(props)=>{

    const [state,setState] = useState(1);

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        if(enteredExpenseData!==null) {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            };
            props.onAddExpense(expenseData);
        }
        setState(1);
    };
    if(state===1)
        return (
            <div className="new-expense">
                <button className="new-expense button" onClick={()=>setState(2)}>Add New Expenses</button>
            </div>
        );

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpense;
