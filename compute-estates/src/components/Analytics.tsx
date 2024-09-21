
import Image from 'next/image';

export default function Analytics() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 pr-12">
          <h2 className="text-4xl font-bold mb-4">Comprehensive Analytics Solutions</h2>
          <p className="mb-6 text-gray-600">
            Empower your business with cutting-edge analytics services. From Google Analytics integration to custom web analytics solutions, we provide the tools you need to make data-driven decisions and optimize your digital presence.
          </p>
          <ul className="grid grid-cols-2 gap-4 mb-8">
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✓</span> Google Analytics setup
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✓</span> Custom web analytics
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✓</span> User behavior tracking
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✓</span> Conversion rate optimization
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✓</span> E-commerce analytics
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✓</span> Social media analytics
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✓</span> SEO performance tracking
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✓</span> Custom dashboard creation
            </li>
          </ul>
        
        </div>
        <div className="w-1/2 relative">
          <div className="w-full h-full">
            <Image
              src="/images/analytics.png"
              alt="Analytics visualization"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}