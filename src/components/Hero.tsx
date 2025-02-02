'use client'
import * as React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container relative mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-slate-800"
          >
            Open Consulting
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium"
          >
            Profesjonalne rozwiązania dla Twojego biznesu
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, backgroundColor: '#1E40AF' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl relative z-10"
          >
            Skontaktuj się z nami
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 