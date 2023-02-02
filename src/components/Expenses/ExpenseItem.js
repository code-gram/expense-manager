import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // let title = props.expense.title;
  const [title, setTitle] = useState(props.expense.title);
  const updateHandler = () => {
    setTitle("Updated");
    // console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          <span>&#x20B9;</span>
          {props.expense.amount}
        </div>
        <button onClick={updateHandler}>Update</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
