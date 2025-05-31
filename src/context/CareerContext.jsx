import React, { createContext, useState, useContext } from 'react';
import careerData from '../data/careers.json';

export const CareerContext = createContext();

export const useCareerContext = () => useContext(CareerContext);

export const CareerProvider = ({ children }) => {
  const [careers] = useState(careerData.careers.map((career, index) => ({
    ...career,
    // Convert string id to numeric id for routing
    id: index + 1,
    // Keep original id as slug
    slug: career.id,
    // Create flat skills array for search
    skills: career.skills.flatMap(category => 
      category.items.map(item => item.name)
    ),
    // Rename skills to skillsDetailed for detailed view
    skillsDetailed: career.skills.flatMap(category => 
      category.items.map(item => ({
        ...item,
        category: category.category,
        description: `Proficiency in ${item.name} - ${item.level} level required`
      }))
    ),
    // Extract salary range from string or use default
    salary: {
      min: Math.floor(Math.random() * 10) + 3,
      max: Math.floor(Math.random() * 20) + 15
    },
    // Add category based on career type
    category: career.title.toLowerCase().includes('software') || career.title.toLowerCase().includes('data') || career.title.toLowerCase().includes('developer') ? 'Technology' :
             career.title.toLowerCase().includes('marketing') || career.title.toLowerCase().includes('sales') ? 'Marketing' :
             career.title.toLowerCase().includes('design') || career.title.toLowerCase().includes('creative') ? 'Creative' :
             career.title.toLowerCase().includes('finance') || career.title.toLowerCase().includes('analyst') ? 'Finance' :
             career.title.toLowerCase().includes('health') || career.title.toLowerCase().includes('medical') ? 'Healthcare' :
             'Business',
    // Add education array
    education: career.requiredEducation ? [
      { degree: career.requiredEducation, description: 'Required qualification for this role' }
    ] : [
      { degree: 'Bachelor\'s Degree', description: 'Any relevant bachelor\'s degree' }
    ],
    // Add career path
    careerPath: career.growthPath ? career.growthPath.map((role, index) => ({
      role,
      description: `${role} - ${index === 0 ? 'Entry level position' : index === 1 ? 'Mid-level position' : 'Senior level position'}`,
      salary: { min: 6 + (index * 4), max: 15 + (index * 10) }
    })) : [
      { role: 'Junior Role', description: 'Entry level position', salary: { min: 3, max: 8 } },
      { role: 'Senior Role', description: 'Senior level position', salary: { min: 8, max: 20 } }
    ],
    // Add experience level
    experienceLevel: index % 3 === 0 ? 'Entry Level' : index % 3 === 1 ? 'Mid Level' : 'Senior Level',
    // Add remote work availability
    remoteWork: Math.random() > 0.3,
    // Add job openings estimate
    jobOpenings: Math.floor(Math.random() * 5000) + 500,
    // Add growth rate
    growthRate: `${Math.floor(Math.random() * 20) + 5}%`,
    // Add top locations
    topLocations: ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai'].slice(0, Math.floor(Math.random() * 3) + 3)
  })));
  
  const getCareerById = (id) => {
    return careers.find(career => career.id === id);
  };
  
  const getRandomCareers = (count) => {
    const shuffled = [...careers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  const getPopularCareers = (count) => {
    return [...careers]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, count);
  };
    const searchCareers = (query) => {
    if (!query) return [];
    
    const lowercaseQuery = query.toLowerCase();
    
    return careers.filter(career => {
      // Search by title
      if (career.title.toLowerCase().includes(lowercaseQuery)) {
        return true;
      }
      
      // Search by description
      if (career.description.toLowerCase().includes(lowercaseQuery)) {
        return true;
      }
      
      // Search by skills (now a flat array)
      const hasSkill = career.skills.some(skill => 
        skill.toLowerCase().includes(lowercaseQuery)
      );
      
      return hasSkill;
    });
  };
  
  return (
    <CareerContext.Provider value={{
      careers,
      getCareerById,
      getRandomCareers,
      getPopularCareers,
      searchCareers
    }}>
      {children}
    </CareerContext.Provider>
  );
};
