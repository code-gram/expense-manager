import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className="expense-list__fallback">There is no Expense Found</h2>
    );
  }
  return (
    <ul className="expense-list">
      {props.expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </ul>
  );
};

export default ExpenseList;
