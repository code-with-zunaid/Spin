import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaStar } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Industries',
      links: [
        { text: 'Banking & Financial Services', url: '/banking' },
        { text: 'Ecommerce & Retail', url: '/ecommerce' },
        { text: 'Government /Public services', url: '/government' },
        { text: 'Manufacturing', url: '/manufacturing' },
        { text: 'Telecom', url: '/telecom' },
        { text: 'Transport and logistics', url: '/transport' },
        { text: 'Travel and Hospitality', url: '/travel' }
      ]
    },
    {
      title: 'Services',
      links: [
        { text: 'Artificial Intelligence & Analytics', url: '/ai' },
        { text: 'Business Applications', url: '/business-apps' },
        { text: 'Business Process Services', url: '/bpo' },
        { text: 'Cloud and Infrastructure', url: '/cloud' },
        { text: 'Business Consulting', url: '/consulting' },
        { text: 'Big Data & Analytics', url: '/bigdata' },
        { text: 'Internet of Things (IOT)', url: '/iot' }
      ]
    },
    {
      title: 'Discover Cyfuture',
      links: [
        { text: 'About Us', url: '/about' },
        { text: 'Accreditations and Certifications', url: '/certifications' },
        { text: 'Awards and Recognitions', url: '/awards' },
        { text: 'Partner Ecosystems', url: '/partners' },
        { text: 'Locations', url: '/locations' },
        { text: 'Sustainability/ CSR', url: '/csr' },
        { text: 'Our Clientele', url: '/clients' }
      ]
    },
    {
      title: 'Others',
      links: [
        { text: 'Press Releases', url: '/press' },
        { text: 'News', url: '/news' },
        { text: 'Life@Cyfuture', url: '/life' },
        { text: 'Careers', url: '/careers' },
        { text: 'Company Info', url: '/company' },
        { text: 'Blog', url: '/blog' },
        { text: 'KCC Careers', url: '/kcc' }
      ]
    }
  ];

  const certifications = [
    { image: '/images/google-partner.png', text: 'Google Partner' },
    { text: 'The Economic Times Promising Brand 2021' },
    { text: 'Best Organisation For Women' },
    { text: 'Intel Partner Gold' },
    { text: 'vmware Cloud Verified' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/disclaimer" className="text-gray-400 hover:text-white mr-4">Disclaimer</a>
              <a href="/privacy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
              <a href="/whistleblower" className="text-gray-400 hover:text-white mr-4">Whistle Blower Policy</a>
              <a href="/codeofconduct" className="text-gray-400 hover:text-white">Code of Conduct</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white text-xl">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white text-xl">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white text-xl">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white text-xl">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Ratings and Certifications */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">
              Cyfuture is rated 5/5 in 3 reviews on <a href="https://clutch.co" className="text-blue-400 hover:underline">clutch.co</a>
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                {cert.image ? (
                  <img src={cert.image} alt={cert.text} className="h-12 mx-auto mb-2" />
                ) : (
                  <div className="h-12 flex items-center justify-center mb-2">
                    <span className="text-xs font-medium">{cert.text}</span>
                  </div>
                )}
                <p className="text-xs text-gray-400">{cert.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>Copyright &copy; {new Date().getFullYear()} Cyfuture India Pvt. Ltd. - Robust cloud server services from a premier data center in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;