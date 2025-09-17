import Image from "next/image";
import React from "react";
import itachi from "../../../public/itachi.png"

const Hero = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col items-center gap-10 lg:flex-row-reverse">
        <Image placeholder="blur" className="rounded-lg shadow-2xl h-auto w-full max-w-sm" src={itachi} alt="heroImage"/>

        
        {/* className="" */}
        <div className="lg:max-w-xl">
          <h1 className="lg:text-5xl text-3xl font-bold">Welcome to my kindom!</h1>
          <p className="py-6">
           I’m a passionate Junior Frontend Developer with a keen eye for clean and responsive web design. I specialize in building modern, user-friendly interfaces using React, Next.js, Tailwind CSS, and JavaScript. I enjoy turning creative ideas into interactive web experiences and continuously learning new technologies to enhance my skills.
          </p>
          <button className="btn bg-amber-500 text-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
