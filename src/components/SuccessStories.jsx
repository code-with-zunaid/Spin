import React from 'react';

const SuccessStories = () => {
  const stories = [
    {
      title: 'Hosting & Development for a Fortune 500 Oil Company',
      image: '/images/story1.jpg',
      link: '/case-studies/indane',
      excerpt: 'Hosting & Development of a Consumer Portal for a Fortune 500 Oil Company'
    },
    {
      title: 'The Institute of Company Secretaries of India',
      image: '/images/story2.jpg',
      link: '/case-studies/icsi',
      excerpt: 'Business Solutions for ICSI'
    },
    {
      title: 'Manipal Group',
      image: '/images/story3.jpg',
      link: '/case-studies/manipal',
      excerpt: 'Manipal Group Optimized IT Infrastructure With Cyfuture'
    },
    {
      title: 'APDCL Case Study',
      image: '/images/story4.jpg',
      link: '/case-studies/apdcl',
      excerpt: 'APDCL Achieved Cloud Based IaaS For ERP Hosting & Facility Management Service Solutions'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Success Stories</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Gain insights on how our services actually impacted other businesses!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="mb-4">{story.excerpt}</p>
                <a 
                  href={story.link} 
                  className="inline-block bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  View Story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;