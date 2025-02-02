'use client'
import { motion } from 'framer-motion'

const menuItems = [
  { title: 'Główna', href: '#' },
  { title: 'Usługi', href: '#services' },
  { title: 'O nas', href: '#about' },
  { title: 'Kontakt', href: '#contact' },
]

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex space-x-8">
      {menuItems.map((item) => (
        <motion.a
          key={item.title}
          href={item.href}
          className="text-gray-600 hover:text-blue-600 transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          {item.title}
        </motion.a>
      ))}
    </nav>
  )
} 