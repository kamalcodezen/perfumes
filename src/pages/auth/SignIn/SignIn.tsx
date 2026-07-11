import { Link } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-perf-bg flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-perf-border bg-perf-card shadow-xl grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex relative">
          <img
            src="/images/auth/login-banner.jpg"
            alt="Luxury Perfume"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-12">
            <h2 className="font-serif-luxury text-5xl font-bold text-white">
              Welcome Back
            </h2>

            <p className="mt-4 max-w-md text-white/90 leading-8">
              Discover premium fragrances crafted to elevate every moment.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <p className="uppercase tracking-[0.35em] text-perf-gold text-sm">
              RossWell
            </p>

            <h1 className="mt-3 text-4xl font-bold font-serif-luxury text-perf-text-main">
              Sign In
            </h1>

            <p className="mt-3 text-perf-text-muted">
              Sign in to continue your luxury fragrance journey.
            </p>

            <form className="mt-10 space-y-6">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-perf-border bg-perf-input-bg px-4">
                  <Mail size={18} className="text-perf-text-muted" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-perf-border bg-perf-input-bg px-4">
                  <LockKeyhole size={18} className="text-perf-text-muted" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={20} className="text-perf-text-muted" />
                    ) : (
                      <Eye size={20} className="text-perf-text-muted" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-perf-gold" />
                  Remember me
                </label>

                <Link
                  to="#"
                  className="text-perf-gold hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Button */}
              <button className="w-full rounded-xl bg-perf-gold py-4 font-semibold text-white transition hover:opacity-90">
                SIGN IN
              </button>
            </form>

            <p className="mt-8 text-center text-perf-text-muted">
              Don't have an account?{" "}
              <Link to="/auth/sign-up" className="font-semibold text-perf-gold">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
