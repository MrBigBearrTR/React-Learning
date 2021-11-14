import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

function ExpenseItem(props){

    return (
        <div className="expense-item">
            <ExpenseDate data={props.data}/>
            <div className="expense-item__description">
                <h2> {props.data.title}</h2>
                <div className="expense-item__price">${props.data.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;