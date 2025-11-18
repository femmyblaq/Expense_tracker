import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import bg from "../assets/expenseBg.jpg";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image element - placed behind content */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bg}
          alt="Expense background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay for better visibility (no blur) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center gap-6 p-6 w-full max-w-md text-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 select-none">
          <div className="text-light-400 text-5xl font-bold">⇄</div>

          {/* Gradient Title */}
          <h1 className={`tracking-wide ${styles.titleGradient}`}>
            ExpensePoint
          </h1>
        </div>

        {/* Password Input / Intro text */}
        <div className="w-full flex flex-col gap-2 text-left">
          <p className={`text-center ${styles.lead}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. quos nisi facere.</p>
        </div>

        {/* Register + Login Buttons */}
        <div className="w-full flex flex-col md:flex-row gap-4 mt-4 items-center justify-center">
          <Link to="/register">
            <button className={`w-full md:w-auto px-8 py-3 md:py-4 btn ${styles.btnPrimary} font-semibold text-lg shadow-lg`}>
              Register
            </button>
          </Link>

          <Link to="/login">
            <button className={`w-full md:w-auto px-8 py-3 md:py-4 btn ${styles.btnSecondary} font-semibold text-lg shadow-lg`}>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}