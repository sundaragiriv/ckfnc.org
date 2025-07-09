import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Mail, Filter } from 'lucide-react';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'A Mother\'s Journey: Finding Strength Through Emma\'s Treatment',
      excerpt: 'Sarah shares her experience supporting her 8-year-old daughter through leukemia treatment and how our support programs made a difference.',
      author: 'Sarah Johnson',
      date: '2024-02-15',
      category: 'patient-stories',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Breaking Barriers: New Immunotherapy Breakthrough for Pediatric Cancer',
      excerpt: 'Dr. Martinez discusses the latest advancements in immunotherapy and what they mean for children with cancer.',
      author: 'Dr. Elena Martinez',
      date: '2024-02-12',
      category: 'interviews',
      image: 'https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Community Spotlight: Local Business Raises $50,000 for Cancer Kids',
      excerpt: 'TechCorp Charlotte organized a company-wide fundraising campaign that exceeded all expectations.',
      author: 'Emily Rodriguez',
      date: '2024-02-10',
      category: 'community-news',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'The Power of Art: How Creative Therapy Helps Children Heal',
      excerpt: 'Meet Maria, whose artwork became a source of strength and inspiration during her cancer treatment.',
      author: 'Lisa Chen',
      date: '2024-02-08',
      category: 'patient-stories',
      image: 'https://images.pexels.com/photos/3662953/pexels-photo-3662953.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Research Update: Progress in Pediatric Brain Tumor Treatment',
      excerpt: 'Leading researcher Dr. Thompson shares insights on recent breakthroughs in brain tumor treatment for children.',
      author: 'Dr. Robert Thompson',
      date: '2024-02-05',
      category: 'interviews',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Building Resilience: How Families Navigate the Cancer Journey',
      excerpt: 'A comprehensive look at the emotional and practical challenges families face and how we can support them.',
      author: 'Dr. Amanda Foster',
      date: '2024-02-03',
      category: 'patient-stories',
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '9 min read'
    },
    {
      id: 7,
      title: 'Volunteer Spotlight: Meet the Amazing People Who Make It Happen',
      excerpt: 'Get to know some of our incredible volunteers who dedicate their time to supporting children with cancer.',
      author: 'Michael Chen',
      date: '2024-02-01',
      category: 'community-news',
      image: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '5 min read'
    },
    {
      id: 8,
      title: 'Hope on the Horizon: New Clinical Trials Offer Promise',
      excerpt: 'An overview of current clinical trials and how they\'re creating new opportunities for young patients.',
      author: 'Dr. James Wilson',
      date: '2024-01-30',
      category: 'interviews',
      image: 'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '6 min read'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'patient-stories', label: 'Patient Stories' },
    { value: 'interviews', label: 'Interviews' },
    { value: 'community-news', label: 'Community News' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'patient-stories':
        return 'bg-blue-100 text-blue-800';
      case 'interviews':
        return 'bg-green-100 text-green-800';
      case 'community-news':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Stories of hope, medical breakthroughs, and community support that inspire and inform 
              our mission to support children with cancer.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-100'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Story</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(blogPosts[0].category)}`}>
                  {blogPosts[0].category.replace('-', ' ')}
                </span>
                <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
              <p className="text-gray-700 text-lg mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{formatDate(blogPosts[0].date)}</span>
                  </div>
                </div>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest stories, research, and community news.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category.replace('-', ' ')}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      Read
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest stories, updates, and news directly in your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </button>
            </div>
            <p className="text-sm mt-4 text-blue-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;