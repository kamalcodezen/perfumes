import { Link } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, User, Phone } from "lucide-react";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="min-h-screen bg-perf-bg flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-perf-border bg-perf-card shadow-xl grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex relative">
          <img
            src="/images/auth/register-banner.jpg"
            alt="Luxury Perfume"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-12">
            <h2 className="font-serif-luxury text-5xl font-bold text-white">
              Join RossWell
            </h2>

            <p className="mt-4 max-w-md text-white/90 leading-8">
              Create your account and explore premium luxury fragrances.
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
              Create Account
            </h1>

            <p className="mt-3 text-perf-text-muted">
              Join our luxury fragrance community today.
            </p>

            <form className="mt-8 space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <div className="flex items-center rounded-xl border border-perf-border bg-perf-input-bg px-4">
                  <User size={18} className="text-perf-text-muted" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />
                </div>
              </div>

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

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone (Optional)
                </label>

                <div className="flex items-center rounded-xl border border-perf-border bg-perf-input-bg px-4">
                  <Phone size={18} className="text-perf-text-muted" />

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
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
                    placeholder="Password"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Confirm Password
                </label>

                <div className="flex items-center rounded-xl border border-perf-border bg-perf-input-bg px-4">
                  <LockKeyhole size={18} className="text-perf-text-muted" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <button className="w-full rounded-xl bg-perf-gold py-4 font-semibold text-white transition hover:opacity-90">
                CREATE ACCOUNT
              </button>
            </form>

            <p className="mt-8 text-center text-perf-text-muted">
              Already have an account?{" "}
              <Link to="/auth/sign-in" className="font-semibold text-perf-gold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
