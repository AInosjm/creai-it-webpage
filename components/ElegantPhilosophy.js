'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ElegantPhilosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const values = [
    {
      title: "Learn",
      subtitle: "Continuous Growth",
      description: "Master cutting-edge AI technologies through hands-on projects and peer learning",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      title: "Create",
      subtitle: "Innovation First",
      description: "Transform ideas into reality with state-of-the-art tools and methodologies",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
      title: "Impact",
      subtitle: "Real Change",
      description: "Build solutions that matter, creating tangible value for society and industry",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <motion.div 
        className="max-w-7xl mx-auto px-8"
        style={{ scale, opacity }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Our Philosophy
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto mb-6" />
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Three pillars that define our approach to innovation and excellence
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg 
                  className="w-10 h-10 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                </svg>
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-light text-slate-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
                {value.subtitle}
              </p>
              <p className="text-slate-600 font-light leading-relaxed max-w-sm mx-auto">
                {value.description}
              </p>

              {/* Decorative Line */}
              <motion.div 
                className="w-12 h-px bg-slate-300 mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ width: 0 }}
                whileHover={{ width: 48 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <blockquote className="max-w-3xl mx-auto">
            <motion.p 
              className="text-2xl md:text-3xl font-light text-slate-700 italic leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              "우리는 단순히 기술을 배우는 것이 아니라,
              <span className="block mt-2">미래를 설계하고 있습니다."</span>
            </motion.p>
            <motion.footer 
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <cite className="text-sm text-slate-500 not-italic tracking-wider uppercase">
                CREAI+IT Leadership Team
              </cite>
            </motion.footer>
          </blockquote>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-slate-600 font-light mb-8">
            Ready to be part of something extraordinary?
          </p>
          <motion.a 
            href="/join" 
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-light tracking-wide transition-all duration-300 hover:bg-slate-800"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Our Community
            <span className="ml-2">→</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}