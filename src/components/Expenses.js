import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props){

    return <div className="expenses">
        <ExpenseItem data={props.data[0]}/>
        <ExpenseItem data={props.data[1]}/>
        <ExpenseItem data={props.data[2]}/>
        <ExpenseItem data={props.data[3]}/>
    </div>
}

export default Expenses;
