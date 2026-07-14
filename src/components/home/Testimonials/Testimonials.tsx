import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "./testimonialsData";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-11/12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-perf-gold">
            Testimonials
          </p>

          <h2 className="mt-4 font-serif-luxury text-4xl font-bold text-perf-text-main md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-perf-text-muted">
            Thousands of fragrance lovers trust RossWell for authentic luxury
            perfumes and exceptional shopping experience.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
