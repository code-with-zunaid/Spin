import React from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Cyfuture backed Jodhpur DISCOM wins media accolades',
      image: '/images/discom.jpg',
      link: '/news/discom',
      excerpt: 'Cyfuture backed Jodhpur DISCOM wins media accolades for fixing Power Issues'
    },
    {
      title: 'Headcount of Cyfuture sails over 2000 mark',
      image: '/images/headcount.jpg',
      link: '/news/headcount',
      excerpt: 'Headcount of Cyfuture sails over the staggering 2000 mark'
    },
    {
      title: 'Cyfuture launches Data Center facility in Raipur',
      image: '/images/raipur.jpg',
      link: '/news/raipur-dc',
      excerpt: 'Cyfuture launches its Ultramodern Data Center facility in Raipur'
    }
  ];

  const socialPosts = [
    {
      platform: 'Twitter',
      icon: <FaTwitter className="text-blue-400" />,
      username: '@cyfuture',
      content: 'Cyfuture won the prestigious certificate of #PCI_DSS_Compliance Version 3.2 after a successful audit.',
      link: 'https://twitter.com/cyfuture/status/1029328997916635136',
      time: '2 hours ago'
    },
    {
      platform: 'Twitter',
      icon: <FaTwitter className="text-blue-400" />,
      username: '@cyfuture',
      content: 'Cyfuture backed Jodhpur DISCOM gained media appreciation to settle Power issue in Monsoon',
      link: 'https://twitter.com/cyfuture/status/1022828875917746177',
      time: '1 day ago'
    },
    {
      platform: 'Facebook',
      icon: <FaFacebook className="text-blue-600" />,
      username: 'Cyfuture India Pvt. Ltd.',
      content: 'Cyfuture wins the esteemed Rajasthan Export Award confirming its ascendancy and acumen in the domain',
      link: 'https://www.facebook.com/CyFuture/photos/a.1427833697464228/2037561089824816',
      time: '3 days ago'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">In the News</h2>
            <p className="text-gray-600 mb-8">Stay Abreast of Rapid Evolutions in Technology</p>
            
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="sm:w-1/3">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:w-2/3 p-4">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <a 
                      href={item.link} 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-6">
                <a 
                  href="/news" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                >
                  Explore More News
                </a>
              </div>
            </div>
          </div>
          
          {/* Social Presence Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Social Presence</h2>
            <p className="text-gray-600 mb-8">Facebook | Twitter | Instagram | LinkedIn | YouTube</p>
            
            <div className="space-y-6">
              {socialPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{post.icon}</span>
                    <div>
                      <h4 className="font-bold">{post.username}</h4>
                      <span className="text-gray-500 text-sm">{post.time}</span>
                    </div>
                  </div>
                  <p className="mb-4">{post.content}</p>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    {post.link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;