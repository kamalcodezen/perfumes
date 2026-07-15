import { featuresData } from "./featuresData";
import FeatureCard from "./FeatureCard";

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative bg-perf-bg overflow-hidden">
      <div className="mx-auto max-w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {featuresData.map((feature, index) => (
            <div key={feature.id} className="flex">
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
