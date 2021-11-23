

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    let expensess=[
        {title:"Araba fiyatları",price:180,date:new Date(2021,6,1)},
        {title:"Ev fiyatları",price:310,date:new Date(2021,7,1)},
        {title:"At fiyatları",price:294.64,date:new Date(2021,8,1)},
        {title:"Telefon fiyatları",price:13,date:new Date(2021,9,1)},
    ];

    const addExpenseHandler= expense=>{
      console.log('In App.js');
      console.log(expense);
      expensess={
          ...expensess,
          expense
      }
    };
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses data={expensess}/>
    </div>
  );
}

export default App;
