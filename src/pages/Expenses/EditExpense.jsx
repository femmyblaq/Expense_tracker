import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditExpense() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });

  useEffect(() => {
    // Simulate fetch
    setExpense({ title: "Food", amount: 50, category: "Meals" });
  }, [id]);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated:", expense);
    navigate("/expenses");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Expense</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="title"
          value={expense.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="category"
          value={expense.category}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-semibold"
        >
          Update Expense
        </button>
      </form>
    </div>
  );
}
