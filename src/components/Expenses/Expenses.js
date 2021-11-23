import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = (props) => {

    return <Card className="expenses">
        <ExpenseItem data={props.data[0]}/>
        <ExpenseItem data={props.data[1]}/>
        <ExpenseItem data={props.data[2]}/>
        <ExpenseItem data={props.data[3]}/>
    </Card>
}

export default Expenses;
