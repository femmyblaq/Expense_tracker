import React from "react";

export default function DashboardOverview() {
  return (
    <div className="p-6">
      {/* Pending + Recent Expenses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Pending Tasks */}
        <div className="bg-[#181818] p-6 rounded-xl border border-gray-700">
          <h3 className="font-semibold mb-4 text-lg">Pending Tasks</h3>
          <ul className="text-sm space-y-3">
            <li className="flex justify-between"><span>Pending Approvals</span> <span>5</span></li>
            <li className="flex justify-between"><span>New Trips Registered</span> <span>1</span></li>
            <li className="flex justify-between"><span>Unreported Expenses</span> <span>4</span></li>
            <li className="flex justify-between"><span>Upcoming Expenses</span> <span>0</span></li>
            <li className="flex justify-between"><span>Unreported Advances</span> <span>€0.00</span></li>
          </ul>
        </div>

        {/* Recent Expenses */}
        <div className="bg-[#181818] p-6 rounded-xl border border-gray-700">
          <h3 className="font-semibold mb-4 text-lg">Recent Expenses</h3>
          <ul className="text-sm space-y-3">
            <li className="flex justify-between items-center"><span>Office Supplies</span><span>€150.00</span></li>
            <li className="flex justify-between items-center"><span>Business Lunch</span><span>€75.50</span></li>
            <li className="flex justify-between items-center"><span>Travel Expenses</span><span>€450.25</span></li>
            <li className="flex justify-between items-center"><span>Client Dinner</span><span>€120.00</span></li>
            <li className="flex justify-between items-center"><span>Hotel</span><span>€275.75</span></li>
          </ul>
        </div>
      </div>

      {/* Quick Access Buttons */}
      <div className="bg-[#181818] p-6 rounded-xl border border-gray-700 mb-6">
        <h3 className="font-semibold mb-4 text-lg">Quick Access</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-[#222] p-4 rounded-lg hover:bg-[#2a2a2a] flex flex-col items-center gap-2 text-sm">
            New Expense
          </button>
          <button className="bg-[#222] p-4 rounded-lg hover:bg-[#2a2a2a] flex flex-col items-center gap-2 text-sm">
            Add Receipt
          </button>
          <button className="bg-[#222] p-4 rounded-lg hover:bg-[#2a2a2a] flex flex-col items-center gap-2 text-sm">
            Create Report
          </button>
          <button className="bg-[#222] p-4 rounded-lg hover:bg-[#2a2a2a] flex flex-col items-center gap-2 text-sm">
            Create Trip
          </button>
        </div>
      </div>

      {/* Reports Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#181818] p-6 rounded-xl border border-gray-700 h-64">
          <h3 className="font-semibold mb-4 text-lg">Team Spending Trend</h3>
          <div className="w-full h-full flex items-center justify-center text-gray-500">[Bar Chart Placeholder]</div>
        </div>

        <div className="bg-[#181818] p-6 rounded-xl border border-gray-700 h-64">
          <h3 className="font-semibold mb-4 text-lg">Day-to-Day Expenses</h3>
          <div className="w-full h-full flex items-center justify-center text-gray-500">[Bar Chart Placeholder]</div>
        </div>
      </div>
    </div>




  );
}
