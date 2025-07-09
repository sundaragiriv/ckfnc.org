import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Gala for Hope',
      date: '2024-03-15',
      time: '6:00 PM',
      location: 'Charlotte Convention Center',
      category: 'fundraising',
      description: 'Our signature fundraising event featuring dinner, entertainment, and inspiring stories.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: 500,
      registered: 342
    },
    {
      id: 2,
      title: 'Kids Fun Run',
      date: '2024-04-20',
      time: '9:00 AM',
      location: 'Freedom Park, Charlotte',
      category: 'community',
      description: 'Family-friendly 5K run/walk to raise awareness and funds for childhood cancer.',
      image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: 300,
      registered: 156
    },
    {
      id: 3,
      title: 'Art Therapy Workshop',
      date: '2024-05-05',
      time: '2:00 PM',
      location: 'NC Children\'s Hospital',
      category: 'program',
      description: 'Creative art session for children currently undergoing treatment.',
      image: 'https://images.pexels.com/photos/3662953/pexels-photo-3662953.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: 25,
      registered: 18
    },
    {
      id: 4,
      title: 'Family Picnic Day',
      date: '2024-06-10',
      time: '11:00 AM',
      location: 'Reedy Creek Park',
      category: 'family',
      description: 'A special day of fun activities, games, and connection for families affected by childhood cancer.',
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: 200,
      registered: 89
    },
    {
      id: 5,
      title: 'Research Symposium',
      date: '2024-07-15',
      time: '1:00 PM',
      location: 'UNC Medical Center',
      category: 'research',
      description: 'Annual symposium featuring latest research developments in pediatric oncology.',
      image: 'https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: 150,
      registered: 67
    },
    {
      id: 6,
      title: 'Holiday Gift Drive',
      date: '2024-12-15',
      time: '10:00 AM',
      location: 'Multiple Locations',
      category: 'community',
      description: 'Annual holiday gift collection and distribution for children in treatment.',
      image: 'https://images.pexels.com/photos/1303088/pexels-photo-1303088.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: 1000,
      registered: 234
    }
  ];

  const pastEvents = [
    {
      title: '2023 Hope Walk',
      date: '2023-10-14',
      participants: 450,
      raised: '$25,000',
      image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Summer Camp 2023',
      date: '2023-08-15',
      participants: 85,
      raised: '$15,000',
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Charity Golf Tournament',
      date: '2023-06-20',
      participants: 120,
      raised: '$35,000',
      image: 'https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'fundraising', label: 'Fundraising' },
    { value: 'community', label: 'Community' },
    { value: 'program', label: 'Programs' },
    { value: 'family', label: 'Family' },
    { value: 'research', label: 'Research' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join us for inspiring events that bring our community together and create lasting memories 
              for children and families affected by cancer.
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar and join us for these upcoming events that support our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.category === 'fundraising' ? 'bg-purple-100 text-purple-800' :
                      event.category === 'community' ? 'bg-blue-100 text-blue-800' :
                      event.category === 'program' ? 'bg-green-100 text-green-800' :
                      event.category === 'family' ? 'bg-pink-100 text-pink-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Event Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Look back at some of our successful events and their impact on our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{formatDate(event.date)}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{event.participants}</p>
                      <p className="text-sm text-gray-600">Participants</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{event.raised}</p>
                      <p className="text-sm text-gray-600">Raised</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing the joy, hope, and community spirit from our events.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/3662953/pexels-photo-3662953.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/1303088/pexels-photo-1303088.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300'
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Event photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Host Your Own Event</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Want to organize a fundraising event for NC Cancer Kids 1st? We're here to help you make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Plan an Event
              <Calendar className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/donate"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all inline-flex items-center justify-center"
            >
              Sponsor an Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;