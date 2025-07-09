import React, { useState } from 'react';
import { Users, Building, Heart, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
    }, 3000);
  };

  const opportunities = [
    {
      icon: Users,
      title: 'Volunteer Opportunities',
      description: 'Join our team of dedicated volunteers who make a direct impact on children and families.',
      activities: [
        'Hospital visits and bedside support',
        'Event planning and coordination',
        'Administrative support',
        'Art and music therapy assistance',
        'Transportation services',
        'Sibling support programs'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building,
      title: 'Corporate Partnerships',
      description: 'Partner with us to make a meaningful difference in your community while engaging your employees.',
      activities: [
        'Employee fundraising campaigns',
        'Volunteer team building events',
        'Sponsorship opportunities',
        'Corporate social responsibility programs',
        'In-kind donations and services',
        'Cause marketing partnerships'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Fundraising Help',
      description: 'Help us raise funds through creative and impactful fundraising initiatives.',
      activities: [
        'Organize community events',
        'Social media campaigns',
        'Peer-to-peer fundraising',
        'Corporate sponsorship outreach',
        'Grant writing assistance',
        'Legacy giving programs'
      ],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const volunteerRoles = [
    {
      title: 'Patient & Family Support',
      commitment: '4-6 hours/week',
      description: 'Provide emotional support and practical assistance to families during treatment.',
      requirements: ['Background check', 'Training program', 'Compassionate nature']
    },
    {
      title: 'Event Coordinator',
      commitment: '2-4 hours/week',
      description: 'Help plan and execute fundraising events and community activities.',
      requirements: ['Event planning experience', 'Strong organizational skills', 'Team player']
    },
    {
      title: 'Administrative Assistant',
      commitment: '3-5 hours/week',
      description: 'Support office operations, data entry, and general administrative tasks.',
      requirements: ['Computer skills', 'Attention to detail', 'Reliable schedule']
    },
    {
      title: 'Creative Arts Volunteer',
      commitment: '2-3 hours/week',
      description: 'Lead art, music, or creative activities for children during treatment.',
      requirements: ['Arts background', 'Working with children', 'Patience and creativity']
    }
  ];

  const corporatePartners = [
    'Bank of America',
    'Duke Energy',
    'Lowe\'s Companies',
    'Wells Fargo',
    'Charlotte Hornets',
    'Atrium Health',
    'Food Lion',
    'Novant Health'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join our mission to support children with cancer and their families. 
              Together, we can make a lasting impact in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ways to Make a Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're an individual, corporation, or organization, there are many ways to support our cause.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${opportunity.color} p-6`}>
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-4">
                    <opportunity.icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center">{opportunity.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{opportunity.description}</p>
                  <div className="space-y-3">
                    {opportunity.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Roles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect volunteer opportunity that matches your skills and availability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{role.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {role.commitment}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{role.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Corporate Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to partner with these organizations who share our commitment to supporting children with cancer.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {corporatePartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{partner}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Involved?</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll connect you with the perfect opportunity to make a difference.
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-2" />
              <h3 className="text-xl font-semibold mb-2">Thank you for your interest!</h3>
              <p>We've received your submission and will contact you within 2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="corporate">Corporate Partnerships</option>
                    <option value="fundraising">Fundraising Help</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us more about your interest
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please share any specific skills, experience, or questions you have..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
              >
                Submit Application
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-gray-300">
              Have questions? We're here to help you find the perfect way to get involved.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">(555) 123-4567</p>
              <p className="text-gray-400 text-sm">Mon-Fri, 9 AM - 5 PM</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">volunteer@nccancerkids1st.org</p>
              <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Hope Street</p>
              <p className="text-gray-300">Charlotte, NC 28202</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;