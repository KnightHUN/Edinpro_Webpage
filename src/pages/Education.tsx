import React from 'react';
import { Code, Database, Brain, Settings, Trophy, FileText, Play, Users, Clock } from 'lucide-react';

const Education: React.FC = () => {
  const courseCategories = [
    {
      icon: Code,
      title: 'Core Programming Concepts',
      description: 'Master the fundamentals of programming with industry-standard languages',
      topics: ['C, C++, Java, Python', 'Data Structures & Algorithms', 'Object-Oriented Programming'],
      color: 'blue',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Database,
      title: 'Web Development',
      description: 'Build modern, responsive web applications from scratch',
      topics: ['HTML, CSS, JavaScript', 'React, Node.js, Express, MongoDB', 'Full Stack Capstone Projects'],
      color: 'green',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Brain,
      title: 'Data & Intelligence',
      description: 'Explore the world of data science and artificial intelligence',
      topics: ['Database Management Systems (SQL, MongoDB)', 'Machine Learning & Data Science (Python, Pandas, Scikit-Learn)', 'Artificial Intelligence Basics'],
      color: 'purple',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Settings,
      title: 'System Knowledge',
      description: 'Understand computer systems and software engineering principles',
      topics: ['Operating Systems', 'Computer Networks', 'Software Engineering Principles'],
      color: 'orange',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Trophy,
      title: 'Career Focus',
      description: 'Prepare for interviews and competitive programming challenges',
      topics: ['Aptitude & Coding Interview Prep', 'Competitive Programming Tracks (CodeChef, LeetCode, HackerRank)', 'Final Year Academic Preparation'],
      color: 'red',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const learningFeatures = [
    {
      icon: FileText,
      title: 'Video Lectures',
      description: 'High-quality video content explaining concepts with real-world examples and practical demonstrations.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Code,
      title: 'Hands-on Assignments',
      description: 'Practical coding exercises and projects that reinforce learning and build your programming skills.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Brain,
      title: 'Comprehensive Notes',
      description: 'Detailed study materials and reference guides to support your learning journey and exam preparation.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Build Your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Computer Science Foundation
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
                Comprehensive education in Core CSE subjects with hands-on practice and industry-relevant skills
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6 text-lg mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="h-6 w-6 text-yellow-400" />
                  <span>Videos & Notes</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="h-6 w-6 text-green-400" />
                  <span>Hands-on Assignments</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Trophy className="h-6 w-6 text-blue-400" />
                  <span>Industry Ready</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Computer Science Education"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2 text-white font-semibold">
                    <Users className="h-5 w-5" />
                    <span>1000+ Students</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 -left-6 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <div className="absolute bottom-20 -left-8 bg-white p-3 rounded-lg shadow-lg animate-bounce animation-delay-1000">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Curriculum
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Our carefully structured courses cover all essential computer science domains with practical implementation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${getColorClasses(category.color)} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-3">
                      {category.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-full`}></div>
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`mt-6 w-full bg-gradient-to-r ${getColorClasses(category.color)} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Explore Course
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Learning Experience
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Every course includes comprehensive resources to ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Learning Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join thousands of students who have built successful careers with our comprehensive computer science education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Enroll Now
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Clock className="mr-2 h-5 w-5" />
              View Curriculum
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;