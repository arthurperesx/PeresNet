import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Services"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Services from "./components/Services"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        {/* <Testimonials /> */}
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

