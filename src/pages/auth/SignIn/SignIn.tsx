import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "../../../lib/auth-client";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ----------------------------------------------------
  // Step 1: Demo Credentials Auto-Fill Handlers
  // ----------------------------------------------------
  const handleDemoUser = () => {
    setFormData({
      email: "user@gmail.com",
      password: "1234Abcd",
    });
  };

  const handleDemoAdmin = () => {
    setFormData({
      email: "admin@gmail.com",
      password: "1234Abcd",
    });
  };

  // Handle Form Submission with Better Auth
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (res.error) {
        // toast.error(res.error.message || "Invalid email or password");
        console.error("Better Auth SignIn Error:", res.error);
      } else {
        toast.success("Signed in successfully");
        navigate("/");
      }
    } catch (error: any) {
      // console.error("SignIn Exception Error:", error);
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
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-perf-text-main font-serif-luxury">
            Welcome Back
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-perf-text-muted">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} className="mt-6 space-y-4">
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
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-perf-text-main uppercase tracking-wider">
                Password
              </label>
              <Link to="#" className="text-xs text-perf-gold hover:underline">
                Forgot?
              </Link>
            </div>
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
                className="text-perf-text-muted hover:text-perf-text-main transition ml-2 cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-perf-gold py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60 cursor-pointer mt-2"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* ---------------------------------------------------- */}
          {/* Step 2: Demo Login Buttons & Note                    */}
          {/* ---------------------------------------------------- */}
          <div className="pt-2">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleDemoUser}
                className="rounded-lg border border-perf-border bg-perf-input-bg py-2.5 text-xs font-semibold text-perf-text-main hover:border-perf-gold hover:text-perf-gold transition cursor-pointer"
              >
                Demo User
              </button>

              <button
                type="button"
                onClick={handleDemoAdmin}
                className="rounded-lg border border-perf-border bg-perf-input-bg py-2.5 text-xs font-semibold text-perf-text-main hover:border-perf-gold hover:text-perf-gold transition cursor-pointer"
              >
                Demo Admin
              </button>
            </div>
            <p className="text-center text-[13px] text-perf-text-muted mt-2.5">
              Click a demo button to auto-fill login credentials.
            </p>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-perf-text-muted">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="font-semibold text-perf-gold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
