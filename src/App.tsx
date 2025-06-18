import React, { useState } from "react";
import ExpenseForm from "./components/ExpenceForm";
import ExpenseTable from "./components/ExpenceList";

export interface Expense {
  id: number;
  date: string;
  title: string;
  credit: number;
  debit: number;
}

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="layout">
      <ExpenseForm onAdd={addExpense} />
      <ExpenseTable items={expenses} onDelete={deleteExpense} />
    </div>
  );
};

export default App;
