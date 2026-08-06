import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">

      <Navbar />

      <Hero />

      <Services />

      <Portfolio />

      <Pricing />

      <Contact />

      <Footer />
<section id="services" className="px-10 py-20">

  <h2 className="text-4xl font-bold text-center">
    Our <span className="text-violet-500">Services</span>
  </h2>

  <div className="grid md:grid-cols-3 gap-6 mt-10">

    <div className="bg-zinc-900 p-8 rounded-xl">
      <h3 className="text-2xl font-bold">
        Website Design
      </h3>
      <p className="text-gray-400 mt-3">
        Modern and professional websites.
      </p>
    </div>


    <div className="bg-zinc-900 p-8 rounded-xl">
      <h3 className="text-2xl font-bold">
        E-Commerce
      </h3>
      <p className="text-gray-400 mt-3">
        Online stores ready for your business.
      </p>
    </div>


    <div className="bg-zinc-900 p-8 rounded-xl">
      <h3 className="text-2xl font-bold">
        Custom Projects
      </h3>
      <p className="text-gray-400 mt-3">
        Solutions made specially for you.
      </p>
    </div>

  </div>

</section>
    </main>
  );
}