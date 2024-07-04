import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-16 text-white">
        
        {/* Who We Are */}
        <motion.div 
          className="mb-12"
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeInUpAnimation}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1719942354~exp=1719945954~hmac=4d7b0e892c40687e6f53a1abb73947c14f7a32b425a9dbded59e9756693e9d48&w=1380"
                alt="Team Collaboration"
                className="w-full h-auto rounded-lg shadow-lg object-cover lg:h-80"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg leading-relaxed mb-6">
                Founded by a visionary developer with a deep passion for cybersecurity, FortressGuard brings together a team of experts committed to innovation and excellence. With experience spanning various industries, including healthcare and education, we understand the unique challenges and requirements of data protection. Our commitment to security and trust drives us to create solutions that empower our clients to thrive in a digital age.
              </p>
            </div>
          </div>
        </motion.div>

        <hr className="border-gray-700 mb-12" />

        {/* What We Deliver */}
        <motion.div 
          className="mb-12"
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={fadeInUpAnimation}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Deliver</h2>
              <ul className="text-lg leading-relaxed list-disc list-inside mb-6">
                <li className="mb-3"><strong>Unparalleled Security:</strong> Utilizing cutting-edge technologies such as zero-knowledge encryption, we ensure that your data remains confidential and accessible only to you.</li>
                <li className="mb-3"><strong>Innovative Solutions:</strong> We are dedicated to disrupting traditional security models with forward-thinking approaches that set new industry standards.</li>
                <li className="mb-3"><strong>Trusted Partnerships:</strong> By delivering reliable and robust cybersecurity solutions, we aim to build long-lasting relationships with major corporations, government entities, and individuals.</li>
                <li className="mb-3"><strong>Comprehensive Support:</strong> Our team provides dedicated support to ensure seamless integration and optimal performance of our security solutions, tailored to meet your specific needs.</li>
              </ul>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-vector/flat-customer-service-week-illustration_23-2149644201.jpg?t=st=1719943145~exp=1719946745~hmac=8eb99ae62469a577abf1efa96dd16de8ee1668e864a4efbcef729167be22494e&w=826"
                alt="Data Security"
                className="w-full h-auto rounded-lg shadow-lg object-cover lg:h-80"
              />
            </div>
          </div>
        </motion.div>

        <hr className="border-gray-700 mb-12" />

        {/* Our Vision */}
        <motion.div 
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={fadeInUpAnimation}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://img.freepik.com/free-vector/businessman-looking-camera-target-it-s-like-business-looking-way-be-successful-vector-business-illustration-concept_1150-60931.jpg?t=st=1719943067~exp=1719946667~hmac=0585cf1ea91279d4d1f3e130a715851a197dfc80084e96892a017ad2008ea5fb&w=1380"
                alt="Vision"
                className="w-full h-auto rounded-lg shadow-lg object-cover lg:h-80"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed mb-6">
                At FortressGuard, our vision is to be a leader in the cybersecurity industry, recognized for our unwavering commitment to protecting digital assets. We strive to be the trusted partner for businesses, schools, healthcare providers, and individuals, offering solutions that are both advanced and accessible. Our goal is to be synonymous with security, reliability, and innovation.
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AboutUs;
