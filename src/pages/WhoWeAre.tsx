import React from 'react';
import { Heart, Users, Award, Target, Shield, Handshake } from 'lucide-react';

const WhoWeAre = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Executive Director',
      bio: 'Pediatric oncologist with 20+ years of experience dedicated to improving childhood cancer outcomes.',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'Program Director',
      bio: 'Former childhood cancer survivor who now leads our family support programs.',
      image: 'https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Outreach Manager',
      bio: 'Passionate advocate connecting families with resources and building community partnerships.',
      image: 'https://images.pexels.com/photos/6129542/pexels-photo-6129542.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every interaction with empathy, understanding, and genuine care for the children and families we serve.'
    },
    {
      icon: Shield,
      title: 'Hope',
      description: 'We believe in the power of hope to heal, inspire, and drive positive change in the face of adversity.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a supportive community where families feel connected, understood, and never alone in their journey.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in all our programs and services, ensuring maximum impact for every child.'
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'We operate with transparency, accountability, and ethical practices in all aspects of our organization.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously seek new and better ways to support children and families affected by cancer.'
    }
  ];

  const affiliations = [
    'Children\'s Oncology Group',
    'National Childhood Cancer Foundation',
    'North Carolina Hospital Association',
    'American Cancer Society',
    'Pediatric Cancer Research Foundation',
    'United Way of Central Carolina'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              A dedicated team of professionals, survivors, and advocates united by a single mission: 
              to ensure no child faces cancer alone.
            </p>
          </div>
        </div>
      </section>

      {/* Organization History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in 2009 by a group of parents who had experienced the childhood cancer journey firsthand, 
                  NC Cancer Kids 1st was born from a simple yet powerful belief: every child deserves the best 
                  possible care and support during their cancer treatment.
                </p>
                <p>
                  What started as a small support group has grown into a comprehensive organization serving 
                  thousands of families across North Carolina. We've expanded our programs to include family 
                  support services, research funding, educational initiatives, and community outreach.
                </p>
                <p>
                  Today, we're proud to be recognized as one of the leading childhood cancer support organizations 
                  in the Southeast, with a 100% commitment to ensuring every dollar donated goes directly to 
                  programs that serve children and families.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Children and families"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">15 Years</p>
                <p className="text-sm">of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide comprehensive support, resources, and hope to children with cancer and their families 
                throughout North Carolina, while funding innovative research to improve treatment outcomes and 
                ultimately find a cure.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-3 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                A world where every child with cancer has access to the best possible care, support, and resources, 
                and where childhood cancer is ultimately eliminated through continued research and medical advances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we serve our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Leaders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who lead our organization and drive our mission forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations and Credentials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to collaborate with leading organizations in the fight against childhood cancer.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{affiliation}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Together, we can make a difference in the lives of children fighting cancer. 
            Your support helps us continue our vital work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Support Our Work
              <Heart className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/get-involved"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all inline-flex items-center justify-center"
            >
              Get Involved
              <Users className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;