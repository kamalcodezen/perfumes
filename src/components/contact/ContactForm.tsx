import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [inquiryType, setInquiryType] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Your fragrance inquiry has been received!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-perf-bg pb-24 pt-4">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-perf-border/80 bg-perf-card/30 p-8 sm:p-14 backdrop-blur-2xl  relative">
          <div className="text-center space-y-2 mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-perf-gold">
              Direct Transmission
            </span>
            <h2 className="text-3xl font-serif-luxury font-bold text-perf-text-main">
              Send Your Inquiry
            </h2>
            <p className="text-sm text-perf-text-muted max-w-md mx-auto">
              Select the nature of your request to route directly to the
              appropriate concierge department.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inquiry Type Chips */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-perf-text-muted">
                Inquiry Topic
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "general", label: "General & Support" },
                  { id: "custom", label: "Bespoke Perfume" },
                  { id: "orders", label: "Order & Shipping" },
                  { id: "wholesale", label: "Press & Retail" },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setInquiryType(type.id)}
                    className={`py-2.5 px-3 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                      inquiryType === type.id
                        ? "bg-perf-gold text-white border-perf-gold shadow-md"
                        : "bg-perf-input-bg border-perf-border/60 text-perf-text-muted hover:border-perf-gold/50"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-perf-text-main">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jean Dupont"
                  className="w-full rounded-xl border border-perf-border/80 bg-perf-input-bg/70 px-4 py-3 text-sm text-perf-text-main placeholder:text-perf-text-muted/40 focus:border-perf-gold outline-none transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-perf-text-main">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. jean@boutique.com"
                  className="w-full rounded-xl border border-perf-border/80 bg-perf-input-bg/70 px-4 py-3 text-sm text-perf-text-main placeholder:text-perf-text-muted/40 focus:border-perf-gold outline-none transition"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-perf-text-main">
                Subject
              </label>
              <input
                required
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief summary of your query"
                className="w-full rounded-xl border border-perf-border/80 bg-perf-input-bg/70 px-4 py-3 text-sm text-perf-text-main placeholder:text-perf-text-muted/40 focus:border-perf-gold outline-none transition"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-perf-text-main">
                Message Details *
              </label>
              <textarea
                required
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your fragrance preferences, order questions, or thoughts with us..."
                className="w-full rounded-xl border border-perf-border/80 bg-perf-input-bg/70 px-4 py-3 text-sm text-perf-text-main placeholder:text-perf-text-muted/40 focus:border-perf-gold outline-none transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-perf-gold py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 cursor-pointer shadow-xl shadow-perf-gold/10"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>Submit Inquiry</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
