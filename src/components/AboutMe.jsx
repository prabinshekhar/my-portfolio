import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-black text-white min-h-screen p-6 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto">
        {/* About Me Section */}
        <div className="mb-10">
          <h2 className="text-green-400 text-2xl md:text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-300">
            Hi there! I'm <span className="text-gray-100 font-semibold">Darshan Bhuva</span>, a full-stack developer specializing in 
            <span className="text-blue-400"> .NET, Angular,</span> and 
            <span className="text-yellow-400"> SQL Server</span>. My passion lies in developing efficient web applications, managing 
            databases, and ensuring seamless deployment. I create dynamic, scalable, and user-centric web apps with modern tech.
          </p>
          <p className="mt-3 text-gray-300">
            Looking forward to sharpening my skills in a challenging environment. I guarantee enthusiasm in work and fulfilling my projects with inexpressible effort.
          </p>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-green-400 text-2xl md:text-3xl font-bold">Experience</h2>
          <div className="bg-gray-900 p-5 rounded-lg mt-4">
            <h3 className="text-xl text-gray-100 font-semibold">Software Engineer</h3>
            <p className="text-gray-400">Fibre2Fashion • January 2024 - Present</p>
            <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
              <li>Designed and implemented a robust backend webhook for in-app purchases for Android, reducing transaction disputes by 20%.</li>
              <li>Developed RESTful APIs optimized for large datasets, enhancing data accessibility and performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
