import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const { expenses } = props;
  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.length === 0 && <p>Expense Not Found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
    </Card>
  );
};
export default Expenses;
