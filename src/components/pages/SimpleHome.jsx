import React from 'react';

const SimpleHome = () => {
  return (
    <div className="min-h-screen p-8 text-white">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-center">
          🚀 PathFinder
        </h1>
        <p className="text-2xl text-center mb-8">
          Discover Your Perfect Career Path
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Welcome to PathFinder</h2>
            <p className="text-lg">
              Your comprehensive guide to exploring career opportunities in the Indian job market. 
              Discover skills, salary ranges, and growth paths for 40+ career options.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">💼</div>
              <h3 className="text-xl font-semibold mb-2">40+ Careers</h3>
              <p>Comprehensive career database</p>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
              <p>Find careers by skills & interests</p>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">📈</div>
              <h3 className="text-xl font-semibold mb-2">Growth Paths</h3>
              <p>Clear career progression routes</p>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="text-xl font-semibold mb-2">Salary Insights</h3>
              <p>Real market salary data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHome;
