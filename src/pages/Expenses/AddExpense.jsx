import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddExpense() {
  const navigate = useNavigate();
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding expense:", expense);
    navigate("/expenses");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Expense</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            name="title"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Expense title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            name="category"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Transport, Food"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold"
        >
          Save Expense
        </button>
      </form>
    </div>
  );
}
