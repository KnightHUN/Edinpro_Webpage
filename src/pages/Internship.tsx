import React from 'react';
import { Briefcase, Users, Award, Target, CheckCircle, Clock, MapPin, TrendingUp, Star } from 'lucide-react';

const Internship: React.FC = () => {
  const formLink = "https://forms.gle/k22jiTFdH1SwmhgZ7";
  
  const handleButtonClick = () => {
    window.open(formLink, '_blank');
  };

  const trainingPrograms = [
    {
      title: 'Full Stack Development',
      duration: '3 weeks',
      description: 'Complete web development with React, Node.js, and MongoDB',
      skills: ['Frontend Development', 'Backend APIs', 'Database Design', 'Project Deployment'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'blue'
    },
    {
      title: 'IoT & Embedded Systems',
      duration: '   3 weeks',
      description: 'Hardware programming and IoT application development',
      skills: ['Arduino Programming', 'Sensor Integration', 'Wireless Communication', 'Project Implementation'],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'green'
    },
    {
      title: 'Data Science & AI',
      duration: '3 weeks',
      description: 'Machine learning and data analysis with Python',
      skills: ['Python Programming', 'Data Analysis', 'Machine Learning', 'AI Applications'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'purple'
    },
    {
      title: 'Web Development',
      duration: '3 weeks',
      description: 'Web design and development with HTML, CSS, and JavaScript',
      skills: ['JavaScript', 'Front End', 'Hosting', 'Authentication'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'red'
    }
  ];

  const internshipBenefits = [
    {
      icon: Briefcase,
      title: 'Real Project Experience',
      description: 'Work on actual industry projects with mentorship and guidance',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Users,
      title: 'Industry Connections',
      description: 'Network with professionals and build valuable industry relationships',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Award,
      title: 'Professional Certification',
      description: 'Earn recognized certificates that boost your career prospects',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Build both technical and soft skills required in the workplace',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const placementServices = [
    'Mock Interviews with Industry Experts',
    'Technical Interview Preparation',
    'HR Interview Readiness Training',
    'Resume Review and Optimization',
    'LinkedIn Profile Enhancement',
    'Salary Negotiation Guidance'
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      red: 'from-red-500 to-red-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Internships, Trainings, and
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Placement Pathways
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
                Train. Intern. Get Placed. Our career mentors help you move from college to corporate with confidence.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6 text-lg mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-6 w-6 text-yellow-400" />
                  <span>2-4 Week Programs</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="h-6 w-6 text-green-400" />
                  <span>Remote & On-site</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-6 w-6 text-blue-400" />
                  <span>Industry Certified</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Internship Training"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2 text-white font-semibold">
                    <TrendingUp className="h-5 w-5" />
                    <span>95% Placement</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 -left-6 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <div className="absolute bottom-20 -left-8 bg-white p-3 rounded-lg shadow-lg animate-bounce animation-delay-1000">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry-Ready Training Programs
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Intensive bootcamps designed to make you job-ready in high-demand technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {program.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Skills:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleButtonClick}
                    className={`w-full bg-gradient-to-r ${getColorClasses(program.color)} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Benefits */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Internship Opportunities
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Remote & In-office internship connections with comprehensive support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internshipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-2">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Preparation */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                Placement Preparation
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Comprehensive support to help you secure your dream job with confidence and competence.
              </p>
              
              <div className="space-y-4">
                {placementServices.map((service, index) => (
                  <div key={index} className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors duration-300">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Placement Success Stats
                </h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Placement Rate</span>
                      <span className="text-3xl font-bold text-green-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Average Salary Increase</span>
                      <span className="text-3xl font-bold text-blue-600">150%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Interview Success Rate</span>
                      <span className="text-3xl font-bold text-purple-600">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Rated by 500+ students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join our comprehensive training and placement program to transition from student to professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleButtonClick}
              className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center cursor-pointer"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Apply for Training
            </button>
            <button 
              onClick={handleButtonClick}
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center cursor-pointer"
            >
              <Users className="mr-2 h-5 w-5" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;