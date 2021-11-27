import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const [title,setTitle] = useState(props.data.title);
    const clickHandler=()=>{
        setTitle("Tıklandı.")
        console.log(title);
    };

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate data={props.data}/>
            <div className="expense-item__description">
                <h2> {title}</h2>
                <div className="expense-item__price">${props.data.price}</div>
            </div>
            <button onClick={clickHandler}>Cick Me</button>
        </Card>
        </li>
    )
}

export default ExpenseItem;
