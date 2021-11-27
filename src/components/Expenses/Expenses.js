import React, {useState} from "react";

import ExpensesList from "./ExpensesList";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] =useState('2021');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses=props.data.filter(expens =>{
        return expens.date.getFullYear().toString()===filteredYear;
    });



    return <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList data={filteredExpenses}/>

    </Card>
}

export default Expenses;
