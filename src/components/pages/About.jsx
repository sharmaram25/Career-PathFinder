import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Heart,
  Lightbulb,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: 'Accurate Career Mapping',
      description: 'Comprehensive database of 40+ career paths with detailed skill requirements and growth trajectories.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Market Data',
      description: 'Up-to-date salary information and job market trends specific to the Indian employment landscape.'
    },
    {
      icon: Users,
      title: 'Personalized Experience',
      description: 'Track your career exploration journey with intelligent history and personalized recommendations.'
    },
    {
      icon: Award,
      title: 'Industry Insights',
      description: 'Expert-curated information on skills, education requirements, and career progression paths.'
    }
  ];

  const stats = [
    { number: '40+', label: 'Career Paths' },
    { number: '500+', label: 'Skills Mapped' },
    { number: '10K+', label: 'Job Opportunities' },
    { number: '98%', label: 'User Satisfaction' }
  ];
  const team = [
    {
      name: 'Ram Sharma',
      role: 'Full-Stack Developer & Creator',
      description: 'Passionate developer who created PathFinder to help professionals discover their ideal career paths in the Indian job market.',
      image: '👨‍💻',
      skills: ['React.js', 'Node.js', 'UI/UX Design', 'Career Research']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We believe everyone deserves access to quality career guidance and opportunities.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously improving our platform with cutting-edge technology and insights.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making career exploration tools available to everyone, regardless of background.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Providing accurate, reliable information to help you make informed career decisions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-500 bg-clip-text text-transparent">PathFinder</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're on a mission to democratize career guidance in India. PathFinder helps millions of students and professionals discover their ideal career paths through data-driven insights and comprehensive skill mapping.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl hover:scale-105 transition-transform font-medium flex items-center mx-auto"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                To bridge the gap between talent and opportunity in India's rapidly evolving job market. We provide comprehensive career guidance that empowers individuals to make informed decisions about their professional futures.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Comprehensive career path analysis</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Real-time market insights and salary data</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Personalized skill development roadmaps</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
               We're working to support individuals navigating India's evolving job market. Our goal is to provide helpful career information so you can make more confident decisions about your professional journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose PathFinder?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>      {/* Team */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet the Creator</h2>
          <div className="max-w-2xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What People Say (Hypothetically)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Anjali Gupta',
                role: 'Software Engineer',
                quote: 'PathFinder helped me transition from marketing to tech. The detailed skill roadmaps were invaluable.',
                rating: 5
              },
              {
                name: 'Vikram Reddy',
                role: 'Product Manager',
                quote: 'Amazing platform! Found my dream career path and negotiated a better salary using their market data.',
                rating: 5
              },
              {
                name: 'Sneha Kapoor',
                role: 'Data Scientist',
                quote: 'The career progression insights helped me plan my next 5 years. Highly recommended!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-purple-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Interactive Stats & Fun Facts */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">PathFinder by the Numbers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-white">40+</div>
                <div className="text-purple-300">Career Paths</div>
              </div>
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-purple-300">Skills Mapped</div>
              </div>
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-purple-300">Job Opportunities</div>
              </div>
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">💝</div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-purple-300">User Satisfaction</div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Did You Know?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📈</div>
                  <div>
                    <div className="text-white font-medium">Growing Fast</div>
                    <div className="text-gray-300 text-sm">India's job market is projected to create 350 million new opportunities by 2030</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <div className="text-white font-medium">Skill Evolution</div>
                    <div className="text-gray-300 text-sm">50% of current job skills will be irrelevant by 2027, making career guidance crucial</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <div className="text-white font-medium">Education Revolution</div>
                    <div className="text-gray-300 text-sm">70% of successful professionals chose non-traditional career paths</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🌟</div>
                  <div>
                    <div className="text-white font-medium">Success Rate</div>
                    <div className="text-gray-300 text-sm">Users who follow PathFinder's guidance see 40% faster career growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Path?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have discovered their ideal careers with PathFinder. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl hover:scale-105 transition-transform font-medium"
              >
                Explore Careers
              </button>
              <button
                onClick={() => navigate('/popular')}
                className="bg-white/10 text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition-colors font-medium border border-white/20"
              >
                View Popular Paths
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
