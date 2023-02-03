import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
//this list of expenses will be coming from back end.
const initialExpenses = [
  { id: 1, title: "Shoping", date: new Date(2023, 1, 1), amount: 5000 },
  { id: 2, title: "Car washing", date: new Date(2021, 4, 5), amount: 500 },
  { id: 3, title: "School fee", date: new Date(2020, 3, 5), amount: 50000 },
  { id: 4, title: "dinner", date: new Date(2019, 2, 5), amount: 5000 },
];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpenses([expense, ...expenses]);
    //setExpenses((prevState)=>{})
  };
  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
