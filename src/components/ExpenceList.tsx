import React from "react";
import { Expense } from "../App";

interface Props {
  items: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseTable: React.FC<Props> = ({ items, onDelete }) => {
  const totalCredit = items.reduce((sum, item) => sum + item.credit, 0);
  const totalDebit = items.reduce((sum, item) => sum + item.debit, 0);
  const profitLoss = totalCredit - totalDebit;

  return (
    <div className="table-container">
      <h3>Expense Report</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Credit (₹)</th>
            <th>Debit (₹)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.date}</td>
              <td>{exp.title}</td>
              <td>{exp.credit}</td>
              <td>{exp.debit}</td>
              <td>
                <button onClick={() => onDelete(exp.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="summary">
        <p>Total Credit: ₹{totalCredit}</p>
        <p>Total Debit: ₹{totalDebit}</p>
        <p><strong>{profitLoss >= 0 ? "Profit" : "Loss"}: ₹{Math.abs(profitLoss)}</strong></p>
      </div>
    </div>
  );
};

export default ExpenseTable;
