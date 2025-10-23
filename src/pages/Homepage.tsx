import { Helmet } from 'react-helmet';

import { ArrowRight, Users, Heart, Award, Calendar, BookOpen, Stethoscope } from 'lucide-react';
import { useMemo } from 'react';

const Homepage = () => {
  // Memoize animation values to prevent re-calculation on every render
  const heartAnimations = useMemo(() => 
    [...Array(9)].map((_, i) => ({
      duration: 5 + Math.random() * 4,
      delay: Math.random() * 3,
      x: 5 + Math.random() * 80,
      y: 10 + Math.random() * 50,
      scale: 0.7 + Math.random() * 0.7,
      rotate: Math.random() * 360,
      color: i % 2 === 0 ? '#ffb6e6' : '#d1b3ff'
    })), []
  );

  const pixieAnimations = useMemo(() => 
    [...Array(20)].map(() => ({
      duration: 1.8 + Math.random() * 2,
      delay: Math.random() * 3,
      x: 5 + Math.random() * 85,
      y: 5 + Math.random() * 60,
      scale: 0.5 + Math.random() * 1,
      color: Math.random() > 0.5 ? '#FFE4E1' : '#E6E6FA'
    })), []
  );

  const sparkleAnimations = useMemo(() => 
    [...Array(12)].map(() => ({
      duration: 1.2 + Math.random() * 1.5,
      delay: Math.random() * 2,
      x: 10 + Math.random() * 75,
      y: 15 + Math.random() * 45,
      scale: 0.3 + Math.random() * 0.8
    })), []
  );
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
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Research & Innovation',
      description: 'Funding cutting-edge research to improve treatment outcomes and find better cures.',
      image: 'https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Community Events',
      description: 'Bringing hope and joy through special events and activities for children and families.',
      image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=600'
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
    <>
      <Helmet>
        <title>Cancer Kids First NC | Hope Starts with You</title>
        <meta name="description" content="Youth-led nonprofit bringing hope and care to children with cancer in North Carolina. Join us to make a difference!" />
        <meta property="og:title" content="Cancer Kids First NC" />
        <meta property="og:description" content="Youth-led nonprofit bringing hope and care to children with cancer in North Carolina." />
        <meta property="og:image" content="https://ckfnc.org/logo.png" />
        <meta property="og:url" content="https://ckfnc.org/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-earth text-text font-body">
      {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-peach via-coral to-teal text-white py-20">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight font-heading">
              <span className="block text-yellow-200">Kids First of NC</span>
              <span className="block text-white text-lg md:text-2xl font-normal">NC CKF (Cancer Kids First) Chapter</span>
              <span className="block text-white mt-2">Hope Starts with <span className="text-yellow-300">You</span></span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Youth-led. Community-powered. Supporting children with cancer and their families through care, research, and hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#donate"
                className="bg-gradient-to-r from-coral to-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:from-primary hover:to-coral transition-all transform hover:scale-105 inline-flex items-center justify-center border-2 border-coral"
              >
                Donate Now
                <Heart className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#volunteer"
                className="border-2 border-coral text-coral px-8 py-4 rounded-full font-semibold text-lg bg-white hover:bg-coral hover:text-white transition-all inline-flex items-center justify-center shadow-lg"
              >
                Volunteer Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            {/* Fundraising Progress Bar */}
            <div className="mt-8">
              <div className="text-lg font-semibold mb-2">Fundraising Goal: <span className="text-yellow-200">$50,000</span></div>
              <div className="w-full bg-white rounded-full h-6 shadow-inner">
                <div className="bg-gradient-to-r from-accent to-primary h-6 rounded-full" style={{ width: '62%' }}></div>
              </div>
              <div className="text-sm mt-1 text-white">$31,000 raised by donors & celebrities!</div>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end h-64 overflow-visible">
            {/* Animated floating hearts with pixie dust, random shimmer and motion */}
            {heartAnimations.map((anim, i) => (
                <svg
                  key={i}
                  className="absolute animate-bounce-heart"
                  style={{
                    left: `${anim.x}%`,
                    top: `${anim.y}%`,
                    width: 40 * anim.scale,
                    height: 40 * anim.scale,
                    zIndex: 2,
                    filter: `drop-shadow(0 0 8px ${anim.color})`,
                    animationDelay: `${anim.delay}s`,
                    animationDuration: `${anim.duration}s`,
                    transform: `rotate(${anim.rotate}deg)`,
                    ['--bounce-duration' as any]: `${anim.duration}s`
                  }}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 44s-16-10.7-16-22A8 8 0 0 1 24 12a8 8 0 0 1 16 10c0 11.3-16 22-16 22z"
                    fill={anim.color}
                    opacity={0.7}
                  />
                  <circle cx={36 - i * 2} cy={8 + i * 3} r={2 + (i % 2)} fill="#fff" opacity={0.5} />
                  <circle cx={12 + i * 2} cy={40 - i * 3} r={1.5 + (i % 2)} fill="#fff" opacity={0.3} />
                </svg>
            ))}
            {/* Pixie dust particles */}
            {pixieAnimations.map((anim, i) => (
                <span
                  key={i}
                  className="absolute animate-pixie"
                  style={{
                    left: `${anim.x}%`,
                    top: `${anim.y}%`,
                    width: 6 * anim.scale,
                    height: 6 * anim.scale,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, #FFF 40%, ${anim.color} 100%)`,
                    opacity: 0.8,
                    zIndex: 1,
                    boxShadow: `0 0 8px #FFF, 0 0 16px ${anim.color}`,
                    animationDuration: `${anim.duration}s`,
                    animationDelay: `${anim.delay}s`
                  }}
                ></span>
            ))}
            {/* Sparkle effects */}
            {sparkleAnimations.map((anim, i) => (
                <div
                  key={`sparkle-${i}`}
                  className="absolute animate-sparkle"
                  style={{
                    left: `${anim.x}%`,
                    top: `${anim.y}%`,
                    width: 4 * anim.scale,
                    height: 4 * anim.scale,
                    zIndex: 3,
                    animationDuration: `${anim.duration}s`,
                    animationDelay: `${anim.delay}s`
                  }}
                >
                  <div className="w-full h-full bg-white" style={{
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                  }}></div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  <div className="w-full h-2 bg-gradient-to-r from-peach via-coral to-teal my-12 rounded-full opacity-60"></div>
  {/* Youth-Led Section */}
    <section className="py-16 bg-earth">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-accent mb-6 text-center">Youth-Led Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">Our volunteers are high school and college students who bring energy, creativity, and compassion to every program. Watch their stories and see how youth leadership is changing lives!</p>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/1Q8fG0TtVAY"
                title="Youth Volunteer Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-peach p-6 rounded-xl shadow-md">
              <p className="font-semibold text-accent mb-2">"Volunteering with CKFNC has given me purpose and lifelong friends."</p>
              <span className="text-sm text-secondary">— Maya, High School Volunteer</span>
            </div>
            <div className="bg-peach p-6 rounded-xl shadow-md">
              <p className="font-semibold text-accent mb-2">"We get to make a real difference for kids who need hope."</p>
              <span className="text-sm text-secondary">— Alex, College Volunteer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Recent Blogs & Events Preview */}
    <section className="py-16 bg-peach">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-accent mb-8 text-center">Latest Stories & Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Blog/Event Cards */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-heading text-xl font-bold text-primary mb-2">Toy Drive Success!</h3>
            <p className="text-secondary mb-2">Over 500 toys donated to local hospitals in August.</p>
            <Link to="/programs" className="text-accent font-semibold hover:underline">Learn More</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-heading text-xl font-bold text-primary mb-2">Card Making Event</h3>
            <p className="text-secondary mb-2">Join us September 20th to create cards for kids in treatment.</p>
            <Link to="/events" className="text-accent font-semibold hover:underline">Sign Up</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-heading text-xl font-bold text-primary mb-2">Meet Our Youth Leaders</h3>
            <p className="text-secondary mb-2">Read interviews with CKFNC volunteers making a difference.</p>
            <Link to="/blogs" className="text-accent font-semibold hover:underline">Read Blog</Link>
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
              <div key={index} className="bg-earth rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                  }}
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
              <div key={index} className="bg-earth rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIzMiIgZmlsbD0iI2YzZjRmNiIvPjxwYXRoIGQ9Im0yNiAyNmE2IDYgMCAxIDEgMTIgMHY0YTEwIDEwIDAgMCAxLTEyIDB2LTR6IiBmaWxsPSIjOTlhM2FmIi8+PC9zdmc+';
                    }}
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
              <div key={index} className="bg-earth rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
    </>
  );
};

export default Homepage;