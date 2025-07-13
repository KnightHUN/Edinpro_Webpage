import React from 'react';
import { Code, Smartphone, Cpu, Wrench, FileText, Users, Zap, Layers, Monitor } from 'lucide-react';

const Projects: React.FC = () => {
  const handleButtonClick = () => {
    window.open('https://forms.gle/JpMupjLZMWDxrcYM9', '_blank');
  };

  const projectCategories = [
    {
      icon: Code,
      title: 'Software Projects',
      description: 'Web applications, mobile apps, and intelligent systems',
      projects: [
        'E-commerce Web Applications',
        'Social Media Platforms',
        'Machine Learning Models',
        'Data Analytics Dashboards',
        'Mobile Applications (Android/iOS)',
        'Desktop Applications'
      ],
      color: 'blue',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Cpu,
      title: 'IoT Projects',
      description: 'Internet of Things and embedded systems projects',
      projects: [
        'Home Automation Systems',
        'Smart Vehicle Monitoring',
        'Smart Agriculture & Weather Systems',
        'Industrial Safety & Monitoring',
        'Health Monitoring Devices',
        'Environmental Monitoring'
      ],
      color: 'green',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const projectTypes = [
    {
      title: 'Mini Projects',
      description: 'Quick implementation projects perfect for skill demonstration',
      duration: '1-2 weeks',
      examples: ['Web Apps', 'ML Models', 'Mobile Apps'],
      price: '₹5,000 - ₹15,000',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'blue'
    },
    {
      title: 'Major Projects',
      description: 'Comprehensive projects showcasing advanced technical skills',
      duration: '3-12 weeks',
      examples: ['AI-Powered Platforms', 'SaaS Tools', 'Cloud-integrated Services'],
      price: '₹8,000 - ₹30,000',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'purple'
    }
  ];

  const projectDeliverables = [
    {
      title: 'Complete Source Code with Documentation',
      icon: Code
    },
    {
      title: 'Comprehensive Project Report',
      icon: FileText
    },
    {
      title: 'Professional Presentation (PPT)',
      icon: Monitor
    },
    {
      title: 'Video Demonstration',
      icon: Smartphone
    },
    {
      title: 'Deployment Support (if required)',
      icon: Zap
    },
    {
      title: 'One-on-one Review Sessions',
      icon: Users
    },
    {
      title: 'Code Explanation & Viva Preparation',
      icon: Layers
    }
  ];

  const supportServices = [
    {
      icon: FileText,
      title: 'End-to-end Guidance',
      description: 'From project ideation to final implementation and documentation',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Code,
      title: 'Code Documentation',
      description: 'Detailed code comments and technical documentation for understanding',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Users,
      title: 'Viva Preparation',
      description: 'Interview preparation and project presentation training',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: '24/7 technical assistance throughout the project development',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Projects for
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  College Students
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
                From ideation to execution – we help you build and showcase projects that stand out
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6 text-lg mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="h-6 w-6 text-yellow-400" />
                  <span>Source Code</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="h-6 w-6 text-green-400" />
                  <span>Documentation</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-6 w-6 text-blue-400" />
                  <span>Mentorship</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Project Development"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2 text-white font-semibold">
                    <Zap className="h-5 w-5" />
                    <span>500+ Projects</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 -left-6 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <div className="absolute bottom-20 -left-8 bg-white p-3 rounded-lg shadow-lg animate-bounce animation-delay-1000">
                <Cpu className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Project Categories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Choose from our diverse range of project categories tailored to different technical domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projectCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${category.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-green-500 to-green-600'} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {category.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            category.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'
                          }`}></div>
                          <span className="text-gray-700 text-sm">{project}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={handleButtonClick}
                      className={`w-full bg-gradient-to-r ${category.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-green-500 to-green-600'} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Explore Projects
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Project Types & Packages
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Choose the right project type based on your academic requirements and timeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((type, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {type.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className={`bg-gradient-to-r ${getColorClasses(type.color)} text-white px-3 py-1 rounded-full text-sm`}>
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{type.price}</span>
                    <button 
                      onClick={handleButtonClick}
                      className={`bg-gradient-to-r ${getColorClasses(type.color)} text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Deliverables */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              What You Get
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Complete project packages with everything you need for academic success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectDeliverables.map((deliverable, index) => {
              const Icon = deliverable.icon;
              return (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-900 font-semibold leading-relaxed">{deliverable.title}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom Project Support
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Comprehensive support throughout your project development journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-2">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Let's transform your ideas into impressive projects that showcase your technical skills and academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleButtonClick}
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Code className="mr-2 h-5 w-5" />
              Start Your Project
            </button>
            <button 
              onClick={handleButtonClick}
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Discuss Requirements
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;