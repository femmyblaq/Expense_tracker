import { Outlet, NavLink, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">💰 Tracker</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/expenses"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Expenses
          </NavLink>
          <NavLink
            to="/expenses/add"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Add Expense
          </NavLink>
        </nav>
        <button
          onClick={handleLogout}
          className="m-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
          <h1 className="text-xl font-semibold text-blue-600">Expense Tracker</h1>
          <button onClick={handleLogout} className="text-red-500 font-semibold">
            Logout
          </button>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
