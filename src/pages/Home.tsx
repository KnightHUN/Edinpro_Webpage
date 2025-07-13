import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Lightbulb, Target, CheckCircle, Star, Play } from 'lucide-react';

const Home: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Empowering
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Future Innovators
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90 leading-relaxed">
                Explore the world of technology with EdinPro – your gateway to knowledge, experience, and innovation.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">1000+</div>
                  <div className="text-sm opacity-80">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">95%</div>
                  <div className="text-sm opacity-80">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm opacity-80">Industry Partners</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/education"
                  onClick={handleLinkClick}
                  className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Students learning technology"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2 text-white font-semibold">
                    <Star className="h-5 w-5" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 -left-6 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="absolute bottom-20 -left-8 bg-white p-3 rounded-lg shadow-lg animate-bounce animation-delay-1000">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About EdinPro
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              EdinPro is an educational technology platform dedicated to bridging the gap between academic knowledge and real-world industry skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Curated Content</h3>
              <p className="text-gray-600 leading-relaxed">
                Access carefully selected educational materials designed to match industry standards and requirements.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Hands-on Training</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn through practical projects and real-world scenarios that prepare you for actual work environments.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Career Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized guidance and project development support to accelerate your tech career journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Quick Links
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive offerings designed to accelerate your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Link
              to="/education"
              onClick={handleLinkClick}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Education"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <BookOpen className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Education</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Master core computer science concepts with our comprehensive curriculum
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
            
            <Link
              to="/internship"
              onClick={handleLinkClick}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Internship"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <Users className="h-12 w-12 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Internship</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get industry-ready with our training programs and placement support
                </p>
                <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                  <span className="font-semibold">Explore Opportunities</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
            
            <Link
              to="/projects"
              onClick={handleLinkClick}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Projects"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <Lightbulb className="h-12 w-12 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Projects</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Build impressive projects that showcase your skills and stand out
                </p>
                <div className="flex items-center text-green-600 group-hover:text-green-700">
                  <span className="font-semibold">Start Building</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose EdinPro?
              </h2>
              <div className="space-y-8">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Aligned Curriculum</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our courses are designed in collaboration with industry experts to ensure relevance and practical application.
                    </p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Hands-on Learning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Learn by doing with real projects, coding challenges, and practical assignments that build your portfolio.
                    </p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Career Support</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get personalized career guidance, interview preparation, and placement assistance to launch your tech career.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Students collaborating"
                  className="absolute -bottom-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute -bottom-50 -right-8 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="mb-6 opacity-90">
                  Join thousands of students who have transformed their careers with EdinPro.
                </p>
                <Link
                  to="/education"
                  onClick={handleLinkClick}
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;