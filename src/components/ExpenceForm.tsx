import React, { useState } from "react";
import { Expense } from "../App";

// 💥 This is the critical part!
interface Props {
  onAdd: (expense: Expense) => void;
}

const ExpenseForm: React.FC<Props> = ({ onAdd }) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [credit, setCredit] = useState("");
  const [debit, setDebit] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: Date.now(),
      date,
      title,
      credit: parseFloat(credit) || 0,
      debit: parseFloat(debit) || 0,
    };
    onAdd(newExpense);
    setDate("");
    setTitle("");
    setCredit("");
    setDebit("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" placeholder="Credit ₹" value={credit} onChange={(e) => setCredit(e.target.value)} />
      <input type="number" placeholder="Debit ₹" value={debit} onChange={(e) => setDebit(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
