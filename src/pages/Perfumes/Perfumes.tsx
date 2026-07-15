import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AllPerfumes from "../../components/modules/perfume/AllPerfumes";

const Perfumes = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="min-h-screen bg-perf-bg pt-24 pb-20 overflow-x-hidden"
      data-aos="fade-up"
    >
      <div className="w-11/12 mx-auto">
        <div className="mb-10 text-center">
          <p className="uppercase tracking-[0.35em] text-xs font-semibold text-perf-gold">
            RossWell Collection
          </p>

          <h1 className="mt-3 text-4xl font-bold font-serif-luxury text-perf-text-main">
            Luxury Perfumes
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-perf-text-muted">
            Discover our premium perfume collection crafted for every occasion.
          </p>
        </div>

        <AllPerfumes />
      </div>
    </section>
  );
};

export default Perfumes;
