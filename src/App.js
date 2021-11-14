import Expenses from "./components/Expenses";
function App() {
    const expenses=[
        {title:"Araba fiyatları",price:180,date:new Date(2021,6,1)},
        {title:"Ev fiyatları",price:310,date:new Date(2021,7,1)},
        {title:"At fiyatları",price:294.64,date:new Date(2021,8,1)},
        {title:"Telefon fiyatları",price:13,date:new Date(2021,9,1)},
    ];
  return (
    <div>
       <Expenses data={expenses}/>
    </div>
  );
}

export default App;
