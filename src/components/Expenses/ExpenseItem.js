import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const [title,setTitle] = useState(props.data.title);
    let ttt=props.data.price;
    const clickHandler=()=>{
        setTitle("Tıklandı.")
        console.log(title);
        ttt=8;
    };

    return (
        <Card className="expense-item">
            <ExpenseDate data={props.data}/>
            <div className="expense-item__description">
                <h2> {title}</h2>
                <div className="expense-item__price">${ttt}</div>
            </div>
            <button onClick={clickHandler}>Cick Me</button>
        </Card>
    )
}

export default ExpenseItem;
