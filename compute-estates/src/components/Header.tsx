import Link from 'next/link';


export default function Header() {
  return (
    <header className="bg-custom-dark-green-900 text-custom-dark-green-50 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Compute Estates
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-custom-dark-green-300">Home</Link></li>
          <li><Link href="#services" className="hover:text-custom-dark-green-300">Services</Link></li>
          <li><Link href="#portfolio" className="hover:text-custom-dark-green-300">Portfolio</Link></li>
          <li><Link href="#process" className="hover:text-custom-dark-green-300">Process</Link></li>
          <li><Link href="#contact" className="hover:text-custom-dark-green-300">Contact</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="text-custom-dark-green-50 hover:text-custom-dark-green-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          {/* <button className="text-custom-dark-green-50 hover:text-custom-dark-green-300">Sign In</button> */}
          <Link href="#contact" className="bg-custom-dark-green-700 text-custom-dark-green-50 px-4 py-2 rounded-md hover:bg-custom-dark-green-600">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}
