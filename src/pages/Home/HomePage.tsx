import HeroCarousel from "../../components/home/Hero/HeroCarousel";
import ShopCollections from "../../components/home/ShopCollections/ShopCollections";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <ShopCollections />
      {/* <WhyChooseUs /> */}
      <WhyChooseUs />
    </>
  );
};

export default HomePage;
