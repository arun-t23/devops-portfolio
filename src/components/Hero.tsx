import React from "react";

const Hero = () => (
  <section id="hero" className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
    <h1 className="text-4xl md:text-6xl font-bold mb-2">Arun Kumar</h1>
    <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">DevOps & Cloud Engineer</h2>
    <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-8">
      “I build resilient cloud-native infrastructure and automate delivery pipelines for scale and security.”
    </p>
    <a
      href="/resume.pdf"
      download
      className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition"
    >
      Download Resume
    </a>
  </section>
);

export default Hero;
