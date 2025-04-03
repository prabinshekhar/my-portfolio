import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl text-center">
        <h2 className="text-sm bg-teal-700 text-white py-2 px-4 inline-block rounded-lg mb-4">
          Welcome to my portfolio
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-green-400">Prabin</span>
          <span className="text-yellow-400"> Shekhar</span>
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-300 mt-2">Full Stack Developer</h3>
        <p className="text-gray-400 mt-4">
          Passionate about programming and software development with expertise in Python,
          JavaScript, and C++. Building modern web applications using Node.js, React.js, and Next.js.
          Freelancer specializing in AI-powered solutions.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-medium">
            Get in Touch →
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
