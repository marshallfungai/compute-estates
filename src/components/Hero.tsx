import Image from 'next/image';

export default function Hero() {

  return (
    <section className="relative h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"  // Replace with your actual background image
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
      </div>
      
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-custom-dark-green-900 opacity-80 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Get Fully Control and Visibility your Company
          </h1>
          <p className="text-xl mb-8 text-custom-dark-green-100">
            Proactively coordinate quality quality vectors vis-a-vis supply chains.
            Quickly engage client-centric web services.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="inline-block bg-white text-custom-dark-green-900 px-6 py-3 rounded-md hover:bg-custom-dark-green-600 hover:text-white transition duration-300">
              Ask us for a proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
