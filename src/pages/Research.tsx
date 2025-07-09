import React from 'react';
import { Microscope, FileText, Users, TrendingUp, Download, ExternalLink } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: Microscope,
      title: 'Immunotherapy Advances',
      description: 'Developing new immunotherapy treatments that harness the body\'s immune system to fight cancer.',
      funding: '$2.5M',
      projects: 12,
      image: 'https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: TrendingUp,
      title: 'Precision Medicine',
      description: 'Tailoring treatment approaches based on individual genetic profiles and tumor characteristics.',
      funding: '$1.8M',
      projects: 8,
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Quality of Life Studies',
      description: 'Researching ways to improve the quality of life for children during and after cancer treatment.',
      funding: '$900K',
      projects: 15,
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: FileText,
      title: 'Clinical Trials',
      description: 'Supporting innovative clinical trials that test new treatments and therapies for pediatric cancer.',
      funding: '$3.2M',
      projects: 6,
      image: 'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const medicalAdvancements = [
    {
      title: 'CAR-T Cell Therapy Breakthrough',
      date: '2024-01-15',
      description: 'New CAR-T cell therapy shows 85% remission rate in pediatric leukemia patients.',
      impact: 'Could benefit 2,000+ children annually',
      image: 'https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Less Invasive Brain Tumor Surgery',
      date: '2024-01-10',
      description: 'Revolutionary surgical technique reduces recovery time by 60% for pediatric brain tumor patients.',
      impact: 'Improved outcomes for 500+ children yearly',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Genetic Screening Innovation',
      date: '2023-12-20',
      description: 'New genetic screening method identifies cancer risk 70% earlier than traditional methods.',
      impact: 'Earlier detection for high-risk families',
      image: 'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const interviews = [
    {
      name: 'Dr. Sarah Martinez',
      title: 'Lead Pediatric Oncologist',
      topic: 'The Future of Immunotherapy in Pediatric Cancer',
      date: '2024-02-01',
      duration: '25 min',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. James Wilson',
      title: 'Research Director',
      topic: 'Precision Medicine: Tailoring Treatment for Every Child',
      date: '2024-01-25',
      duration: '30 min',
      image: 'https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Dr. Emily Chen',
      title: 'Clinical Trials Coordinator',
      topic: 'Hope Through Clinical Trials: What Parents Need to Know',
      date: '2024-01-20',
      duration: '22 min',
      image: 'https://images.pexels.com/photos/6129542/pexels-photo-6129542.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const publications = [
    {
      title: 'Pediatric Cancer Treatment Outcomes 2023',
      type: 'Annual Report',
      date: '2024-01-01',
      pages: 45,
      downloads: 2847
    },
    {
      title: 'Immunotherapy in Childhood Leukemia: A Comprehensive Review',
      type: 'Research Paper',
      date: '2023-12-15',
      pages: 24,
      downloads: 1923
    },
    {
      title: 'Quality of Life Metrics in Pediatric Oncology',
      type: 'Study Results',
      date: '2023-11-30',
      pages: 32,
      downloads: 1456
    },
    {
      title: 'Family Support Programs: Impact Assessment',
      type: 'Program Evaluation',
      date: '2023-11-15',
      pages: 28,
      downloads: 1234
    }
  ];

  const resources = [
    {
      category: 'For Families',
      items: [
        'Understanding Clinical Trials',
        'Treatment Options Guide',
        'Emotional Support Resources',
        'Financial Assistance Programs'
      ]
    },
    {
      category: 'For Healthcare Professionals',
      items: [
        'Latest Treatment Protocols',
        'Research Collaboration Opportunities',
        'Continuing Education Programs',
        'Grant Application Guidelines'
      ]
    },
    {
      category: 'For Researchers',
      items: [
        'Funding Opportunities',
        'Data Sharing Protocols',
        'Research Ethics Guidelines',
        'Publication Guidelines'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Research & Innovation</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Advancing the science of pediatric cancer care through cutting-edge research, 
              innovative treatments, and collaborative partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Research Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We fund and support research in key areas that show the most promise for improving outcomes 
              for children with cancer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{area.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{area.funding}</p>
                      <p className="text-sm text-gray-600">Funding</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{area.projects}</p>
                      <p className="text-sm text-gray-600">Active Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Advancements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Medical Advancements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breakthrough discoveries and innovations that are changing the landscape of pediatric cancer treatment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {medicalAdvancements.map((advancement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={advancement.image}
                  alt={advancement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{advancement.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{advancement.title}</h3>
                  <p className="text-gray-700 mb-4">{advancement.description}</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Impact:</h4>
                    <p className="text-blue-800 text-sm">{advancement.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Interviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conversations with leading researchers and clinicians sharing insights on the latest developments 
              in pediatric cancer research.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interviews.map((interview, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img
                  src={interview.image}
                  alt={interview.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{interview.name}</h3>
                <p className="text-blue-600 text-center mb-4">{interview.title}</p>
                <h4 className="font-semibold text-gray-900 mb-2">{interview.topic}</h4>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{interview.date}</span>
                  <span>{interview.duration}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Watch Interview
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research findings, reports, and studies that contribute to the advancement of pediatric cancer care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{publication.title}</h3>
                      <p className="text-sm text-gray-600">{publication.type}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{publication.date}</span>
                  <span>{publication.pages} pages</span>
                  <span>{publication.downloads} downloads</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Useful Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources for families, healthcare professionals, and researchers in pediatric oncology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{resource.category}</h3>
                <ul className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Support Breakthrough Research</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support helps fund innovative research that brings hope to children with cancer and their families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Fund Research
              <Microscope className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/get-involved"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all inline-flex items-center justify-center"
            >
              Partner With Us
              <Users className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;