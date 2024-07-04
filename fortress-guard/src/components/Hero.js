import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-6 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div
            ref={imgRef}
            className="mb-10 lg:mb-0 lg:w-1/2"
            style={{ opacity: imgInView ? 1 : 0, transition: "opacity 0.8s" }}
          >
            <motion.img
              src={
                "https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?w=1380&t=st=1719333955~exp=1719334555~hmac=55499837126ba45d11a47882d07c15aba323501d92b1eb39f6337adf5b20de9f"
              }
              alt="FortressGuard"
              className="rounded-full shadow-xl mx-auto"
              style={{ maxWidth: "400px" }}
              initial={{ opacity: 0, y: 50 }}
              animate={imgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <motion.div
            ref={contentRef}
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              FortressGuard
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6">
              A trailblazer in cybersecurity, dedicated to revolutionizing
              digital defense.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl mb-10">
              From advanced data encryption to secure password management,
              FortressGuard delivers comprehensive services designed to fortify
              businesses and individuals in the digital arena.
            </p>
            <a
              href="#signup"
              className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-lg text-lg inline-block transition duration-200"
            >
              Join us on this transformative journey
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
