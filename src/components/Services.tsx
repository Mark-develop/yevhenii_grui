'use client'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Rekrutacja',
    description: 'Profesjonalne wyszukiwanie miejsc pracy i pozyskiwanie pracowników',
    code: '78.10.Z'
  },
  {
    id: 2,
    title: 'Produkcja Medialna',
    description: 'Produkcja filmów, nagrań wideo i programów telewizyjnych',
    code: '59.11.Z'
  },
  {
    id: 3,
    title: 'Nieruchomości',
    description: 'Wynajem i zarządzanie nieruchomościami',
    code: '68.20.Z'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-600"
        >
          Nasze Usługi
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-600">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500">PKD: {service.code}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 