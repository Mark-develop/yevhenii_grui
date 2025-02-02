'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'

const menuItems = [
  { title: 'Główna', href: '#' },
  { title: 'Usługi', href: '#services' },
  { title: 'O nas', href: '#about' },
  { title: 'Kontakt', href: '#contact' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-white z-50"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-8 py-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-4 text-xl font-medium text-gray-800 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 