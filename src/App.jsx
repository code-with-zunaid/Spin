import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import SuccessStories from './components/SuccessStories';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <SuccessStories />
        <NewsSection />
        
        {/* Who We Are Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-600">
              An innovative technology company that empowers businesses to deliver unmatched performance and consistently re-defines the best with <span className="font-semibold text-blue-600">inspired thinking</span> infused with <span className="font-semibold text-blue-600">operational excellence</span>, <span className="font-semibold text-blue-600">immersive digital transformation</span>, relentless <span className="font-semibold text-blue-600">focus on customer relationships</span>.
            </p>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-sm uppercase tracking-wider">Fortune 500 Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2000+</div>
                <div className="text-sm uppercase tracking-wider">Thinking Minds</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10000+</div>
                <div className="text-sm uppercase tracking-wider">Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm uppercase tracking-wider">Years of Experience</div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Be A Techvolutionary @ Cyfuture</h2>
              <p className="max-w-2xl mx-auto mb-6">
                At Cyfuture we push for excellence, reward practicable and implementable zeal!<br />
                Do you have what it takes to break new grounds?
              </p>
              <a 
                href="/careers" 
                className="inline-block bg-white text-blue-600 hover:bg-blue-700 hover:text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
              >
                Explore Opportunities
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;