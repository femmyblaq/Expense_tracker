import React from "react";

export default function ExpensesList() {
  const expenses = [
    {
      date: "09/11/2022",
      title: "Food Catering",
      merchant: "McFood",
      amount: "€250.00",
      report: "November_2022",
      status: "Not Submitted",
      icon: "🍽️",
    },
    {
      date: "10/11/2022",
      title: "Office Supplies",
      merchant: "Officio",
      amount: "€150.00",
      report: "November_2022",
      status: "Not Submitted",
      icon: "✂️",
    },
    {
      date: "11/11/2022",
      title: "Business Lunch",
      merchant: "Restaurant",
      amount: "€75.50",
      report: "November_2022",
      status: "Not Submitted",
      icon: "🍽️",
    },
    {
      date: "11/11/2022",
      title: "Travel Expenses",
      merchant: "Airlines",
      amount: "€450.25",
      report: "November_2022",
      status: "Submitted",
      icon: "🧳",
    },
    {
      date: "12/11/2022",
      title: "Client Dinner",
      merchant: "Bistro",
      amount: "€120.00",
      report: "November_2022",
      status: "Not Submitted",
      icon: "🍽️",
    },
    {
      date: "16/11/2022",
      title: "Accommodation",
      merchant: "Hotel ***",
      amount: "€275.75",
      report: "November_2022",
      status: "Submitted",
      icon: "🛏️",
    },
    {
      date: "20/11/2022",
      title: "News Subscription",
      merchant: "NewsTimes",
      amount: "€30.00",
      report: "November_2022",
      status: "Not Submitted",
      icon: "📰",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0e0f10] text-gray-100 p-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Expenses</h1>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-teal-400 text-black rounded-md font-semibold hover:bg-teal-300">
            + New expense
          </button>
          <button className="p-3 bg-gray-800 rounded-md hover:bg-gray-700">⚙️</button>
          <button className="p-3 bg-gray-800 rounded-md hover:bg-gray-700">🔍</button>
          <button className="p-3 bg-gray-800 rounded-md hover:bg-gray-700">⋯</button>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 px-6 py-3 text-gray-400 text-sm border-b border-gray-700">
        <span>Details</span>
        <span>Merchant</span>
        <span>Amount</span>
        <span>Report</span>
        <span>Status</span>
        <span></span>
      </div>

      {/* Table Rows */}
      <div className="mt-2 bg-[#141516] rounded-xl overflow-hidden border border-gray-800">
        {expenses.map((exp, i) => (
          <div
            key={i}
            className="grid grid-cols-6 items-center px-6 py-5 border-b border-gray-800 hover:bg-gray-800/30 transition"
          >
            {/* DETAILS */}
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-teal-400" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-700/40 text-teal-300 text-xl">
                  {exp.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400">{exp.date}</p>
                  <p className="font-semibold text-gray-200">{exp.title}</p>
                </div>
              </div>
            </div>

            {/* MERCHANT */}
            <span className="text-gray-300">{exp.merchant}</span>

            {/* AMOUNT */}
            <span className="text-gray-200 font-medium">{exp.amount}</span>

            {/* REPORT */}
            <span className="text-gray-300">{exp.report}</span>

            {/* STATUS */}
            <span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  exp.status === "Submitted"
                    ? "bg-blue-600/40 text-blue-300"
                    : "bg-pink-700/40 text-pink-300"
                }`}
              >
                {exp.status}
              </span>
            </span>

            {/* EXTRA */}
            <button className="text-gray-400 hover:text-gray-200 text-xl">⋯</button>
          </div>
        ))}
      </div>
    </div>
  );
}