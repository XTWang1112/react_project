import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setYear] = useState("2020");
  const getFilterValue = (filterValue) => {
    setYear(filterValue);
    return filterValue;
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilter={getFilterValue} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
