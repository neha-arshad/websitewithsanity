import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Products from "./Component/Products";
import TopNavbar from "./Component/TopNavbar";
import HeroSection from "./Component/HeroSection";
import CompanyLogo from "./Component/CompanyLogo";
import FeaturedProduct from "./Component/FeaturedProduct";
import TopCategories from "./Component/TopCategories";
import HotCategories from "./Component/HotCategories";
import Footer from "./Component/Footer";

export default async function Home() {
  const products = await client.fetch(groq`*[_type == "products"]`);
  return (
    <>
      <HeroSection />
      <CompanyLogo />
      <FeaturedProduct />
      <TopCategories />
      <HotCategories />
      <Products />
      <Footer />
    </>
  );
}
