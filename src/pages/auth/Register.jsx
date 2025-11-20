import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // clear error when the user starts typing
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  // ---------- VALIDATIONS ----------
  const validateName = (name) => {
    if (!name.trim()) return "Full name is required.";

    const parts = name.trim().split(" ");

    // detect abbreviations (single letter or ending with ".")
    if (parts.some((p) => p.length < 2 || p.endsWith("."))) {
      return "Abbreviated names are not allowed. Please enter your full name.";
    }

    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required.";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return "Please enter a valid email.";

    return "";
  };

  const validatePassword = (password) => {
    if (!password.trim()) return "Password is required.";
    if (password.length < 6)
      return "Password must be at least 6 characters long.";
    return "";
  };

  // ---------- BLUR HANDLER ----------
  const handleBlur = (e) => {
    const { name, value } = e.target;

    let errorMsg = "";
    if (name === "name") errorMsg = validateName(value);
    if (name === "email") errorMsg = validateEmail(value);
    if (name === "password") errorMsg = validatePassword(value);

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // ---------- SUBMIT ----------
  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(form.name);
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);

    if (nameError || emailError || passwordError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log("Register:", form);
      setLoading(false);
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME FIELD */}
          <div>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 ${errors.name ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* EMAIL FIELD */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 ${errors.password ? "border-red-500" : "border-gray-300"
                }`}
            />

            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>


          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"
              }`}
          >
            {loading && (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            )}
            {loading ? "Processing..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
