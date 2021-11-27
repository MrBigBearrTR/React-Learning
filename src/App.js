import React,{useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensList=[
    {id:1,title:"Araba fiyatları",price:180,date:new Date(2021,6,1)},
    {id:2,title:"Ev fiyatları",price:310,date:new Date(2021,7,1)},
    {id:3,title:"At fiyatları",price:294.64,date:new Date(2020,8,1)},
    {id:4,title:"Telefon fiyatları",price:13,date:new Date(2021,9,1)},
];

function App() {
const [expenses,setExpenses] = useState(expensList);


    const addExpenseHandler= expense=>{
      setExpenses((prevExpenses)=>{
          return [expense,...prevExpenses];
      });
    };
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses data={expenses}/>
    </div>
  );
}

export default App;
