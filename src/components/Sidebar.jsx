import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, List, User, PlusCircle } from "lucide-react";

const navItems = [
  { label: "Overview", to: "/dashboard", icon: <Home size={20} /> },
  { label: "Expenses", to: "/dashboard/expenses", icon: <List size={20} /> },
  { label: "Add Expense", to: "/dashboard/expenses/add", icon: <PlusCircle size={20} /> },
  { label: "Profile", to: "/dashboard/profile", icon: <User size={20} /> },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="bg-[#181818] shadow-lg h-screen w-56 flex flex-col py-8 px-4 border-r border-gray-800">
      <div className="mb-8 text-2xl font-bold text-turquoise-400 tracking-wide select-none">
        ExpensePoint
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors duration-150 hover:bg-[#222] hover:text-turquoise-400 ${location.pathname === item.to ? "bg-[#222] text-turquoise-400" : "text-gray-300"}`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
