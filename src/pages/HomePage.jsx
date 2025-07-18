
import React from "react";
import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import NewsletterSection from "@/components/NewsletterSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <AboutSection />
      <ImpactSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;
