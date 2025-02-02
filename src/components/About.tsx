'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function About() {
  const basePath = process.env.NODE_ENV === 'production' ? '/yevhenii_grui' : ''
  
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
          >
            <Image
<<<<<<< HEAD
              src="/yevhenii_grui/public/profile.jpg" // Убедитесь, что изображение находится в папке public
=======
              src={`${basePath}/profile.jpg`}
>>>>>>> 4eaff7a (Add dynamic path)
              alt="Yevhenii Grui - Open Consulting"
              fill
              className="object-cover rounded-lg shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-600">O nas</h2>
            <p className="text-gray-600 mb-6">
              Jesteśmy profesjonalną firmą consultingową specjalizującą się w rekrutacji, 
              produkcji medialnej oraz zarządzaniu nieruchomościami. Nasze doświadczenie 
              i indywidualne podejście do każdego klienta pozwala nam dostarczać 
              najwyższej jakości usługi.
            </p>
            <div className="space-y-3 text-gray-600">
              <p>✓ Indywidualne podejście do każdego klienta</p>
              <p>✓ Wieloletnie doświadczenie na rynku</p>
              <p>✓ Profesjonalny zespół specjalistów</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
