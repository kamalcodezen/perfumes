import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, User } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "../../../lib/auth-client";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission with Better Auth
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Password Match Check
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // 2. Minimum Password Length Check (Better Auth default: min 8 chars)
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    try {
      setLoading(true);

      const res = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      // Check for Better Auth Error Response
      if (res.error) {
        toast.error(res.error.message || "Failed to create account");
        // console.error("Better Auth Error:", res.error);
      } else {
        toast.success("Account created successfully");
        navigate("/");
      }
    } catch (error: any) {
      // 3. Network or Server Connectivity Errors
      console.error("Signup Submission Catch Error:", error);
      toast.error(
        error?.message ||
          "Server connection failed. Please check your backend.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-perf-bg flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md rounded-2xl border border-perf-border bg-perf-card p-6 sm:p-8 shadow-md">
        {/* Simple Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-perf-text-main font-serif-luxury">
            Create an Account
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-perf-text-muted">
            Enter your details below to sign up
          </p>
        </div>

        {/* Clean Form */}
        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-perf-text-main uppercase tracking-wider">
              Full Name
            </label>
            <div className="flex items-center rounded-lg border border-perf-border bg-perf-input-bg px-3.5 py-2.5 transition focus-within:border-perf-gold">
              <User size={16} className="text-perf-text-muted mr-2.5" />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="John Doe"
                required
                className="w-full bg-transparent text-sm text-perf-text-main outline-none placeholder:text-perf-text-muted/60"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-perf-text-main uppercase tracking-wider">
              Email Address
            </label>
            <div className="flex items-center rounded-lg border border-perf-border bg-perf-input-bg px-3.5 py-2.5 transition focus-within:border-perf-gold">
              <Mail size={16} className="text-perf-text-muted mr-2.5" />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="name@example.com"
                required
                className="w-full bg-transparent text-sm text-perf-text-main outline-none placeholder:text-perf-text-muted/60"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-perf-text-main uppercase tracking-wider">
              Password
            </label>
            <div className="flex items-center rounded-lg border border-perf-border bg-perf-input-bg px-3.5 py-2.5 transition focus-within:border-perf-gold">
              <LockKeyhole size={16} className="text-perf-text-muted mr-2.5" />
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full bg-transparent text-sm text-perf-text-main outline-none placeholder:text-perf-text-muted/60"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-perf-text-muted hover:text-perf-text-main transition ml-2"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-perf-text-main uppercase tracking-wider">
              Confirm Password
            </label>
            <div className="flex items-center rounded-lg border border-perf-border bg-perf-input-bg px-3.5 py-2.5 transition focus-within:border-perf-gold">
              <LockKeyhole size={16} className="text-perf-text-muted mr-2.5" />
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full bg-transparent text-sm text-perf-text-main outline-none placeholder:text-perf-text-muted/60"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-perf-text-muted hover:text-perf-text-main transition ml-2"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-perf-gold py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60 cursor-pointer mt-2"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-perf-text-muted">
          Already have an account?{" "}
          <Link
            to="/auth/signin"
            className="font-semibold text-perf-gold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
