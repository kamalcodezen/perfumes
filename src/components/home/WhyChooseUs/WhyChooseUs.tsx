import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { featuresData } from "./featuresData";
import FeatureCard from "./FeatureCard";

const WhyChooseUs = () => {
  useEffect(() => {
    // Initialize AOS scroll animations
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-24 relative bg-perf-bg overflow-hidden">
      <div className="mx-auto max-w-11/12 ">
        {/* Header Section */}
        {/* <div data-aos="fade-up" className="mb-20 text-center">
          <p className="uppercase tracking-[0.3em] text-perf-gold text-sm font-semibold">
            Why Choose RossWell
          </p>

          <h2 className="mt-3 font-serif-luxury text-4xl font-bold text-perf-text-main md:text-5xl">
            Crafted For Luxury Lovers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-perf-text-muted text-base">
            Discover authentic luxury fragrances with premium quality,
            exceptional service, and a shopping experience designed for
            elegance.
          </p>
        </div> */}

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="flex"
            >
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
