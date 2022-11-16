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
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilter={getFilterValue} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
