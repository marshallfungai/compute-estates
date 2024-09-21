import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLock, faCode } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
  const features = [
    {
      icon: faBolt,
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies to build robust and scalable software solutions for our clients.'
    },
    {
      icon: faLock,
      title: 'Top-Notch Security',
      description: 'Our software is built with security in mind, ensuring your data and systems are protected at all times.'
    },
    {
      icon: faCode,
      title: 'Agile Development',
      description: 'We employ agile methodologies to deliver high-quality software quickly and efficiently.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-custom-dark-green-950">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-custom-dark-green-50">With all the Features You Need</h2>
        <p className="text-center text-custom-dark-green-200 mb-12 max-w-2xl mx-auto">
          Empowering businesses with innovative software solutions that drive growth and efficiency in the digital age.
        </p>

        <div className="grid grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white w-20 h-20 p-5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={feature.icon} className="text-custom-dark-green-900 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom-dark-green-50">{feature.title}</h3>
              <p className="text-custom-dark-green-200">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-custom-dark-green-800 rounded-2xl p-8 flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-custom-dark-green-50">Custom Software Solutions</h3>
              <p className="text-custom-dark-green-200 mb-4">
                We create tailor-made software solutions that address your unique business challenges and drive innovation.
              </p>
         
            </div>
            <div className="w-1/3">
              {/* Replace with actual illustration */}
              <div className="bg-custom-dark-green-700 h-40 w-40 rounded-full">
                <Image
                  src="/images/software-solutions.png"
                  alt="Custom Software Solutions"
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-custom-dark-green-800 rounded-2xl p-8 flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-custom-dark-green-50">Advanced Analytics Solutions</h3>
              <p className="text-custom-dark-green-200 mb-4">
                Our cutting-edge analytics tools provide deep insights into your data, helping you make informed decisions and drive business growth.
              </p>
            </div>
            <div className="w-1/3">
              <div className="bg-custom-dark-green-700 h-40 w-40 rounded-full">
                <Image
                  src="/images/analytics-illustration.png"
                  alt="Advanced Analytics Solutions"
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
