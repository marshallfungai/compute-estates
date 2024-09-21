import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Analytics from '../components/Analytics'
import WorkProcess from '../components/WorkProcess'
import Portfolio from '../components/Portfolio'


import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <WorkProcess />
      <Analytics />
      <Footer />
    </main>
  )
}
