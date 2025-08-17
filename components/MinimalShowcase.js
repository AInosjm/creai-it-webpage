'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function MinimalShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const startups = [
    {
      name: "MoleKcules",
      category: "AI Drug Discovery",
      description: "Revolutionizing pharmaceutical research through AI-powered molecular analysis",
      status: "Active",
      gradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      name: "AI Tutor",
      category: "EdTech Innovation",
      description: "Personalized learning experiences powered by advanced language models",
      status: "Beta",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      name: "Vision Analytics",
      category: "Computer Vision",
      description: "Next-generation visual AI for industrial automation and quality control",
      status: "Development",
      gradient: "from-emerald-500/10 to-teal-500/10"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent" />
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-8"
        style={{ y, opacity }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Innovation in Progress
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto mb-6" />
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Our members are building the future of technology, one startup at a time
          </p>
        </motion.div>

        {/* Minimal Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className={`relative h-full p-8 bg-gradient-to-br ${startup.gradient} backdrop-blur-sm transition-all duration-500 hover:shadow-xl`}>
                {/* Status Badge */}
                <div className="absolute top-8 right-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    {startup.status}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-light text-slate-900 mb-1">
                      {startup.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                      {startup.category}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 font-light leading-relaxed">
                    {startup.description}
                  </p>

                  {/* Subtle Hover Effect */}
                  <motion.div 
                    className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm text-slate-700 font-medium">
                      Learn more →
                    </span>
                  </motion.div>
                </div>

                {/* Elegant Border Effect */}
                <div className="absolute inset-0 border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Section */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[
            { value: "50+", label: "Active Members" },
            { value: "15M+", label: "Funding Secured" },
            { value: "12", label: "Projects Launched" },
            { value: "3", label: "Active Startups" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-light text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}