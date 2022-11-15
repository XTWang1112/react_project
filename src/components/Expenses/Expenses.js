import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

const Expenses = (props) => {
  const [filterYear, setYear] = useState("2020");
  const getFilterValue = (filterValue) => {
    setYear(filterValue);
    return filterValue;
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilter={getFilterValue} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
