import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-600">
          Skontaktuj się z nami
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-600">Dane kontaktowe</h3>
              <div className="space-y-4 text-gray-600">
                <p>Open Consulting Yevhenii Grui</p>
                <p>ul. Francuska 11/7B</p>
                <p>40-015 Katowice</p>
                <p>NIP: 9542867473</p>
                <p>REGON: 527874509</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
} 