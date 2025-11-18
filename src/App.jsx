import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import ExpenseList from "./pages/Expenses/ExpensesList";
import AddExpense from "./pages/Expenses/AddExpense";
import EditExpense from "./pages/Expenses/EditExpense";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import DashboardOverview from "./pages/DashboardOverview";

// Example layout (optional, for sidebar/navbar later)
import Layout from "./components/Layout";

export default function App() {
  const isAuthenticated = true; // later replace with real auth check

  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home/>}/>

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        >
          {/* Default dashboard overview page */}
          <Route index element={<DashboardOverview />} />
          {/* Nested expense routes will render inside Dashboard via an <Outlet /> */}
          <Route path="expenses" element={<ExpenseList />} />
          <Route path="expenses/add" element={<AddExpense />} />
          <Route path="expenses/edit/:id" element={<EditExpense />} />
        </Route>

      {/* Catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
