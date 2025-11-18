import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch from endpoint here
    setExpenses([
      { id: 1, title: "Food", amount: 50, category: "Meals" },
      { id: 2, title: "Transport", amount: 20, category: "Commute" },
    ]);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Expenses</h1>
        <Link
          to="/expenses/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add New
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <tr key={exp.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{exp.title}</td>
                <td className="py-3 px-4">{exp.category}</td>
                <td className="py-3 px-4 font-semibold text-red-500">
                  -${exp.amount}
                </td>
                <td className="py-3 px-4">
                  <Link
                    to={`/expenses/edit/${exp.id}`}
                    className="text-blue-600 hover:underline mr-3"
                  >
                    Edit
                  </Link>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
