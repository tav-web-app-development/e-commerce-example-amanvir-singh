import React from 'react';

const ABOUT_US_TITLE = "About Us";
const INTRODUCTION =
  "Welcome to LaptopHub, your ultimate destination for discovering the latest and greatest in laptop technology. We are a team of tech enthusiasts passionate about bringing you the best in computing innovation, right at your fingertips.";
const WHO_WE_ARE =
  "At LaptopHub, we believe in empowering individuals with the tools they need to thrive in today's digital world. With a deep-rooted passion for technology and a keen eye for quality, we curate a selection of laptops from leading brands across the globe. Our mission is to simplify your journey towards finding the perfect laptop that matches your lifestyle, budget, and professional needs.";
const WHAT_WE_OFFER =
  "Our platform is designed to offer you a seamless shopping experience, featuring detailed specifications, high-quality images, and insightful reviews. Whether you're a student looking for a lightweight device for lectures and assignments, a professional seeking a powerhouse for demanding software, or a gamer in pursuit of the ultimate gaming experience, we've got you covered.";
const WHY_CHOOSE_US =
  "- Expert Guidance: Leverage our expertise to navigate through the vast landscape of laptops and make informed decisions.\n- Quality Selection: Handpicked laptops from top manufacturers, ensuring reliability and performance.\n- User-Friendly Interface: A clean, intuitive interface designed to enhance your browsing and purchasing experience.\n- Support & Community: Engage with our community of tech enthusiasts and receive dedicated support whenever you need it.";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2">
      <main className="flex flex-wrap items-start justify-between flex-auto px-8 py-4">
        <section aria-labelledby="about-title" className="text-center">
          <h1 id="about-title" className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            {ABOUT_US_TITLE}
          </h1>
          <p className="mt-2 text-xl text-gray-600 sm:mt-4">
            {INTRODUCTION}
          </p>
          <p className="mt-5 text-lg text-gray-700">
            {WHO_WE_ARE}
          </p>
          <p className="mt-4 text-lg text-gray-700">
            {WHAT_WE_OFFER}
          </p>
          <p className="mt-4 text-lg text-gray-700">
            {WHY_CHOOSE_US}
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
