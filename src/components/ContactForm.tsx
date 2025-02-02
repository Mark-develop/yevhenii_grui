'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь добавить логику отправки формы
    console.log('Form submitted:', formData)
  }

  const inputClasses = "w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 bg-slate-50/50"

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-2xl shadow-lg"
    >
      <div>
        <motion.label 
          htmlFor="name"
          className="block text-sm font-medium text-slate-600 mb-2 ml-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Imię i Nazwisko
        </motion.label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <motion.label 
          htmlFor="email"
          className="block text-sm font-medium text-slate-600 mb-2 ml-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Email
        </motion.label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <motion.label 
          htmlFor="message"
          className="block text-sm font-medium text-slate-600 mb-2 ml-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Wiadomość
        </motion.label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className={inputClasses}
          required
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02, backgroundColor: '#1E40AF' }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold 
                 shadow-lg hover:shadow-xl transition-all duration-200
                 bg-gradient-to-r from-blue-600 to-blue-700
                 hover:from-blue-700 hover:to-blue-800"
      >
        Wyślij wiadomość
      </motion.button>

      <motion.p 
        className="text-xs text-center text-slate-500 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        * Odpowiemy najszybciej jak to możliwe
      </motion.p>
    </motion.form>
  )
} 