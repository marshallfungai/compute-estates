export default function Services() {
  const services = [
    { title: 'Web App Development and Design', description: 'Custom web applications tailored to your needs' },
    { title: 'Application Development', description: 'Mobile and desktop applications for various platforms' },
    { title: 'Web Security Services', description: 'Protect your digital assets with our security solutions' },
    { title: 'System Design Review and Consultation', description: 'Expert advice on optimizing your IT infrastructure' },
  ]

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
