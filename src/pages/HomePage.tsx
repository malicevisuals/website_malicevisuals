import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
