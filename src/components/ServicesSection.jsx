import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Digital Transformation',
      icon: '/images/digital-icon.png',
      description: 'Revitalize your business with ingenious digital solutions',
      details: 'The future is digital. Brisk technological evolutions and rapid shift in customer preferences are pushing companies to be more anticipative, flexible, and diaphanous in digital terms.',
      link: '/digital-transformation'
    },
    {
      title: 'Cloud Solutions',
      icon: '/images/cloud-icon.png',
      description: 'Breathe Cloud',
      details: 'Integrate our innovative and dynamic cloud solutions with your businesses as smoothly as the breathing process itself. Experience the best bouquet of services including top class integrated IaaS, PaaS, SaaS.',
      link: '/cloud'
    },
    {
      title: 'Blockchain',
      icon: '/images/blockchain-icon.png',
      description: 'Surpass the latest digital trend with our credible Blockchain offerings',
      details: 'Cyfuture\'s blockchain service offers a transparent and secured system that completely transforms the manner in which businesses and customers exchange data, information, value, and assets.',
      link: '/blockchain'
    },
    {
      title: 'Big Data',
      icon: '/images/bigdata-icon.png',
      description: 'In-depth analysis and result-oriented data processing & insight extraction',
      details: 'Using rigorous algorithms and latest technologies, Cyfuture analytics digs deep and wide through the troves of data our clients need processed according to their business requirements.',
      link: '/bigdata'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img src={service.icon} alt={service.title} className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{service.title}</h3>
                <p className="text-center text-blue-600 mb-4">{service.description}</p>
                <p className="text-gray-600 mb-6">{service.details}</p>
                <div className="text-center">
                  <a 
                    href={service.link} 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;