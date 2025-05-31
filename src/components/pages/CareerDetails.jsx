import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CareerContext } from '../../context/CareerContext';
import { HistoryContext } from '../../context/HistoryContext';
import { 
  ArrowLeft, 
  BookOpen, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  Target,
  Briefcase
} from 'lucide-react';

const CareerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { careers } = useContext(CareerContext);
  const { addToHistory } = useContext(HistoryContext);
  const [career, setCareer] = useState(null);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('all');

  useEffect(() => {
    const foundCareer = careers.find(c => c.id === parseInt(id));
    if (foundCareer) {
      setCareer(foundCareer);
      addToHistory(foundCareer);
    }
  }, [id, careers, addToHistory]);

  if (!career) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="glass-card p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Career Not Found</h2>
          <p className="text-gray-300 mb-6">The career you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const getSkillLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      case 'expert': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getSkillLevelWidth = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'w-1/4';
      case 'intermediate': return 'w-2/4';
      case 'advanced': return 'w-3/4';
      case 'expert': return 'w-full';
      default: return 'w-1/4';
    }
  };

  const filteredSkills = selectedSkillLevel === 'all' 
    ? career.skillsDetailed 
    : career.skillsDetailed.filter(skill => skill.level.toLowerCase() === selectedSkillLevel);

  const relatedCareers = careers
    .filter(c => c.category === career.category && c.id !== career.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      <div className="container mx-auto px-4 pb-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        {/* Career Header */}
        <div className="glass-card p-8 rounded-2xl mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <h1 className="text-4xl font-bold text-white mr-4">{career.title}</h1>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-1 font-medium">{career.popularity}</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {career.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-green-400">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span className="font-medium">₹{career.salary.min}L - ₹{career.salary.max}L</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <Briefcase className="w-5 h-5 mr-2" />
                  <span>{career.category}</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{career.experienceLevel}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="glass-card p-6 rounded-xl text-center min-w-[200px]">
                <div className="text-3xl font-bold text-white mb-2">
                  {career.skillsDetailed.length}
                </div>
                <div className="text-gray-300">Skills Required</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Section */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h2 className="text-2xl font-bold text-white mb-4 sm:mb-0">Required Skills</h2>
                <select
                  value={selectedSkillLevel}
                  onChange={(e) => setSelectedSkillLevel(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div className="grid gap-4">
                {filteredSkills.map((skill, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">{skill.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${getSkillLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{skill.description}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className={`${getSkillLevelColor(skill.level)} h-2 rounded-full ${getSkillLevelWidth(skill.level)} transition-all duration-300`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Path */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-purple-400" />
                Career Growth Path
              </h2>
              <div className="space-y-4">
                {career.careerPath.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-1">{step.role}</h3>
                      <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                      <div className="flex items-center text-green-400 text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        ₹{step.salary.min}L - ₹{step.salary.max}L
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Requirements */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
                Education & Qualifications
              </h2>
              <div className="space-y-4">
                {career.education.map((edu, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium">{edu.degree}</h3>
                      <p className="text-gray-300 text-sm">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Job Openings</span>
                  <span className="text-white font-medium">{career.jobOpenings?.toLocaleString() || '500+'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Experience Level</span>
                  <span className="text-white font-medium">{career.experienceLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Remote Work</span>
                  <span className="text-green-400 font-medium">
                    {career.remoteWork ? 'Available' : 'Limited'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Growth Rate</span>
                  <span className="text-purple-400 font-medium">{career.growthRate || '15%'}</span>
                </div>
              </div>
            </div>

            {/* Top Locations */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-400" />
                Top Locations
              </h3>
              <div className="space-y-2">
                {(career.topLocations || ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai']).map((location, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300">{location}</span>
                    <div className="w-16 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${Math.max(60 - index * 10, 20)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Careers */}
            {relatedCareers.length > 0 && (
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-400" />
                  Related Careers
                </h3>
                <div className="space-y-3">
                  {relatedCareers.map(relatedCareer => (
                    <div
                      key={relatedCareer.id}
                      onClick={() => navigate(`/career/${relatedCareer.id}`)}
                      className="p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors group"
                    >
                      <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                        {relatedCareer.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                        {relatedCareer.description}
                      </p>
                      <div className="text-green-400 text-sm mt-2">
                        ₹{relatedCareer.salary.min}L - ₹{relatedCareer.salary.max}L
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
