import React from 'react';
import { Heart, Users, Stethoscope, BookOpen, Home, Palette, Music, Gift } from 'lucide-react';

const WhatWeDo = () => {
  const programs = [
    {
      icon: Heart,
      title: 'Family Support Services',
      description: 'Comprehensive emotional, financial, and practical support for families navigating childhood cancer.',
      services: ['Crisis counseling', 'Financial assistance', 'Transportation support', 'Lodging assistance', 'Emergency funds'],
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Stethoscope,
      title: 'Medical Support',
      description: 'Direct medical assistance and coordination with healthcare providers to ensure optimal care.',
      services: ['Care coordination', 'Second opinion facilitation', 'Treatment navigation', 'Medical equipment', 'Medication assistance'],
      image: 'https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: BookOpen,
      title: 'Educational Support',
      description: 'Ensuring children don\'t fall behind in their education during treatment and recovery.',
      services: ['Tutoring services', 'Educational materials', 'Technology support', 'School liaison', 'Scholarship programs'],
      image: 'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Palette,
      title: 'Art & Music Therapy',
      description: 'Creative therapies that help children express emotions and find joy during treatment.',
      services: ['Art therapy sessions', 'Music therapy', 'Creative workshops', 'Performance opportunities', 'Art supplies'],
      image: 'https://images.pexels.com/photos/3662953/pexels-photo-3662953.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Sibling Support',
      description: 'Special programs for siblings of children with cancer to help them cope and feel supported.',
      services: ['Sibling support groups', 'Special activities', 'Counseling services', 'Camp programs', 'Educational resources'],
      image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Gift,
      title: 'Special Events',
      description: 'Creating magical moments and lasting memories for children and families.',
      services: ['Birthday celebrations', 'Holiday events', 'Wish fulfillment', 'Family outings', 'Community gatherings'],
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const impactStories = [
    {
      name: 'The Johnson Family',
      story: 'When 7-year-old Alex was diagnosed with leukemia, our family support team provided immediate assistance with housing, meals, and emotional support. Today, Alex is cancer-free and thriving in school.',
      impact: 'Reduced family stress by 80% during treatment',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maria\'s Art Journey',
      story: 'Through our art therapy program, 12-year-old Maria discovered her passion for painting. Her artwork now hangs in the hospital to inspire other children.',
      impact: 'Improved emotional wellbeing scores by 65%',
      image: 'https://images.pexels.com/photos/3662953/pexels-photo-3662953.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'The Thompson Siblings',
      story: 'When their brother was diagnosed with brain cancer, our sibling support program helped Emma and Jake cope with the changes in their family life through counseling and special activities.',
      impact: 'Maintained academic performance throughout treatment',
      image: 'https://images.pexels.com/photos/1102978/pexels-photo-1102978.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const serviceAreas = [
    'Charlotte Metro Area',
    'Raleigh-Durham',
    'Greensboro-Winston-Salem',
    'Asheville Region',
    'Wilmington Coast',
    'Western North Carolina',
    'Eastern North Carolina',
    'Statewide Support'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">What We Do</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive support services designed to help children and families navigate 
              the challenges of childhood cancer with dignity, hope, and strength.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive range of services addressing every aspect of the childhood cancer journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-4">
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Services Include:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {program.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Impact Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our programs make a tangible difference in the lives of children and families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{story.name}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{story.story}</p>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold text-purple-800">{story.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the joy, hope, and healing that happens through our various programs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/3662953/pexels-photo-3662953.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300'
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Program activity ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Emotions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Understanding Children's Emotions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We recognize that childhood cancer affects not just the body, but the emotional well-being of children and families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Emotional Support Focus Areas</h3>
              <div className="space-y-4">
                {[
                  { emotion: 'Fear & Anxiety', support: 'Specialized counseling and coping strategies' },
                  { emotion: 'Sadness & Grief', support: 'Grief counseling and peer support groups' },
                  { emotion: 'Anger & Frustration', support: 'Healthy expression through art and play therapy' },
                  { emotion: 'Isolation & Loneliness', support: 'Connection with other children and families' },
                  { emotion: 'Hope & Resilience', support: 'Building strength through positive experiences' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{item.emotion}</span>
                      <span className="text-sm text-gray-600">{item.support}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Child receiving emotional support"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve families throughout North Carolina and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Help Us Continue Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every donation helps us expand our programs and reach more children and families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Make a Donation
              <Heart className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/get-involved"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all inline-flex items-center justify-center"
            >
              Volunteer Today
              <Users className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;