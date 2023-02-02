import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  //this list of expenses will be coming from back end.
  const expenses = [
    { id: 1, title: "Shoping", date: new Date(2023, 1, 1), amount: 5000 },
    { id: 2, title: "Car washing", date: new Date(2023, 1, 5), amount: 500 },
    { id: 3, title: "School fee", date: new Date(2023, 1, 5), amount: 50000 },
    { id: 4, title: "dinner", date: new Date(2023, 1, 5), amount: 5000 },
  ];
  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
