import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Award, Calendar, BookOpen, Stethoscope } from 'lucide-react';

const Homepage = () => {
  const stats = [
    { number: '2,500+', label: 'Children Helped', icon: Users },
    { number: '15', label: 'Years of Service', icon: Award },
    { number: '50+', label: 'Partner Hospitals', icon: Stethoscope },
    { number: '100%', label: 'Funds to Programs', icon: Heart },
  ];

  const programs = [
    {
      title: 'Family Support Services',
      description: 'Comprehensive support for families navigating childhood cancer diagnosis and treatment.',
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/what-we-do'
    },
    {
      title: 'Research & Innovation',
      description: 'Funding cutting-edge research to improve treatment outcomes and find better cures.',
      image: 'https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/research'
    },
    {
      title: 'Community Events',
      description: 'Bringing hope and joy through special events and activities for children and families.',
      image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/events'
    }
  ];

  const stories = [
    {
      name: 'Emma\'s Journey',
      age: '8 years old',
      story: 'After her leukemia diagnosis, Emma found strength through our art therapy program and is now in remission.',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Marcus\'s Victory',
      age: '12 years old',
      story: 'Our educational support helped Marcus stay on track with school during his cancer treatment.',
      image: 'https://images.pexels.com/photos/1102978/pexels-photo-1102978.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hope Starts with <span className="text-yellow-300">You</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Supporting children with cancer and their families through comprehensive care, 
                research, and unwavering community support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/donate"
                  className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-orange-600 transition-all transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Make a Donation
                  <Heart className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/get-involved"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all inline-flex items-center justify-center"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children playing together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-blue-600">2,500+</p>
                <p className="text-sm font-medium">Children Helped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services designed to help children and families through every step of their journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    to={program.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Hope</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every child's journey is unique, but together we create stories of courage, hope, and healing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600">{story.age}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{story.story}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blogs"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Read More Stories
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for upcoming events that bring our community together and create lasting memories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Annual Gala for Hope',
                date: 'March 15, 2024',
                time: '6:00 PM',
                location: 'Charlotte Convention Center',
                image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Kids Fun Run',
                date: 'April 20, 2024',
                time: '9:00 AM',
                location: 'Freedom Park',
                image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Art Therapy Workshop',
                date: 'May 5, 2024',
                time: '2:00 PM',
                location: 'NC Children\'s Hospital',
                image: 'https://images.pexels.com/photos/3662953/pexels-photo-3662953.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date} at {event.time}
                    </p>
                    <p>{event.location}</p>
                  </div>
                  <Link
                    to="/events"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View All Events
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of the Solution</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support can make a real difference in the lives of children battling cancer. 
            Join our community of hope and help us continue our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Donate Today
              <Heart className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/get-involved"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all inline-flex items-center justify-center"
            >
              Volunteer Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;