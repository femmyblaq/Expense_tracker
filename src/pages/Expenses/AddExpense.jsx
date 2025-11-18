import React, { useState } from "react";


export default function AddExpense() {
  const [form, setForm] = useState({
    subject: "",
    merchant: "",
    date: "",
    total: "",
    currency: "USD",
    reimbursable: false,
    category: "Travel",
    description: "",
    employee: "",
    report: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validate() {
    const newErrors = {};
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.merchant.trim()) newErrors.merchant = "Merchant is required";
    if (!form.date) newErrors.date = "Date is required";
    if (!form.total.trim()) newErrors.total = "Total is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.employee.trim()) newErrors.employee = "Employee is required";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Expense submitted:", form);
      // Optionally reset form or show success
    }
  }

  return (
    <div className="w-full h-screen flex bg-[#0e0f10] text-gray-100">
      {/* Main Content */}
      <main className="flex-1 px-2 py-4 md:px-8 md:py-10 flex items-center justify-center">
        <form className="w-full max-w-6xl bg-[#141516] rounded-xl p-4 md:p-8 shadow-lg border border-gray-800 flex flex-col justify-center h-full" onSubmit={handleSubmit} noValidate>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">New expense</h1>
            <button type="button" className="text-gray-400 hover:text-teal-400 text-xl">✖</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Form Inputs */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">Subject*</label>
                  <input name="subject" value={form.subject} onChange={handleChange} className="w-full mt-1 p-3 bg-gray-800/60 rounded-md focus:ring-2 focus:ring-teal-400 outline-none" />
                  {errors.subject && <div className="text-red-400 text-xs mt-1">{errors.subject}</div>}
                </div>
                <div>
                  <label className="text-sm text-gray-400">Merchant*</label>
                  <input name="merchant" value={form.merchant} onChange={handleChange} className="w-full mt-1 p-3 bg-gray-800/60 rounded-md focus:ring-2 focus:ring-teal-400 outline-none" />
                  {errors.merchant && <div className="text-red-400 text-xs mt-1">{errors.merchant}</div>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">Date*</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full mt-1 p-3 bg-gray-800/60 rounded-md focus:ring-2 focus:ring-teal-400 outline-none" />
                  {errors.date && <div className="text-red-400 text-xs mt-1">{errors.date}</div>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm text-gray-400">Total*</label>
                    <input name="total" value={form.total} onChange={handleChange} className="w-full mt-1 p-3 bg-gray-800/60 rounded-md focus:ring-2 focus:ring-teal-400 outline-none" />
                    {errors.total && <div className="text-red-400 text-xs mt-1">{errors.total}</div>}
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Currency</label>
                    <select name="currency" value={form.currency} onChange={handleChange} className="w-full mt-1 p-3 bg-gray-800/60 rounded-md focus:ring-2 focus:ring-teal-400 outline-none">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                      <option>NGN</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Reimbursable */}
              <div className="flex items-center gap-2 text-gray-300">
                <input type="checkbox" name="reimbursable" checked={form.reimbursable} onChange={handleChange} className="accent-teal-400" /> Reimbursable
              </div>

              {/* Category */}
              <div>
                <label className="text-sm text-gray-400">Category*</label>
                <select name="category" value={form.category} onChange={handleChange} className="w-full mt-1 p-3 bg-gray-800/60 rounded-md focus:ring-2 focus:ring-teal-400 outline-none">
                  <option>Travel</option>
                  <option>Food</option>
                  <option>Transport</option>
                  <option>Supplies</option>
                </select>
                {errors.category && <div className="text-red-400 text-xs mt-1">{errors.category}</div>}
              </div>

              {/* Description */}
              <div>
                <label className="text-sm text-gray-400">Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} className="w-full mt-1 p-3 bg-gray-800/60 rounded-md h-28 resize-none focus:ring-2 focus:ring-teal-400 outline-none" />
              </div>

              {/* Employee */}
              <div>
                <label className="text-sm text-gray-400">Employee*</label>
                <input name="employee" value={form.employee} onChange={handleChange} className="w-full mt-1 p-3 bg-gray-800/60 rounded-md focus:ring-2 focus:ring-teal-400 outline-none" />
                {errors.employee && <div className="text-red-400 text-xs mt-1">{errors.employee}</div>}
              </div>

              {/* Add to report */}
              <div className="flex items-center gap-6 text-gray-300">
                <span>Add to report</span>
                <label className="flex items-center gap-2"><input type="radio" name="report" value="yes" checked={form.report === "yes"} onChange={handleChange} /> Yes</label>
                <label className="flex items-center gap-2"><input type="radio" name="report" value="no" checked={form.report === "no"} onChange={handleChange} /> No</label>
              </div>
            </div>

            {/* Upload Invoice */}
            <div className="bg-gray-800/40 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-gray-400 min-h-[180px] md:min-h-[220px]">
              <div className="text-5xl">＋</div>
              <p className="mt-2">Upload an invoice</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-end gap-4 mt-10">
            <button type="button" className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-md hover:bg-teal-300">Save draft</button>
            <button type="submit" className="px-6 py-3 bg-gray-700 text-gray-300 font-semibold rounded-md hover:bg-gray-600">Save</button>
          </div>
        </form>
      </main>
    </div>
  );
}
