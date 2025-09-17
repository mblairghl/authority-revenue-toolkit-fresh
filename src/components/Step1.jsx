import React, { useState } from 'react';

const Step1 = () => {
  const [activeSubStep, setActiveSubStep] = useState(0);

  const subSteps = [
    { id: 0, title: 'Ideal Client Profile', number: '1' },
    { id: 1, title: 'Market Research', number: '2' },
    { id: 2, title: 'Milestone Reflection', number: '3' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">STEP 1 OF 9</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ideal Client Refinement</h1>
          <p className="text-gray-600">Define your perfect customer persona and target market.</p>
        </div>

        {/* Sub-step Navigation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Action Steps</h2>
          <p className="text-gray-600 mb-6">Complete all Action Steps below before moving to the next Step page.</p>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {subSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveSubStep(step.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    activeSubStep === step.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 bg-gray-50 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeSubStep === step.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      <span className="font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${
                    activeSubStep === step.id ? 'text-orange-700' : 'text-gray-700'
                  }`}>
                    {step.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="space-y-8">
          {/* Sub-step 1: Ideal Client Profile */}
          {activeSubStep === 0 && (
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal Client Profile</h3>
              <p className="text-gray-600 mb-6">Define the characteristics of your perfect customer.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry/Sector</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="e.g., Technology, Healthcare, Finance" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-10 employees)</option>
                    <option value="small">Small (11-50 employees)</option>
                    <option value="medium">Medium (51-200 employees)</option>
                    <option value="large">Large (200+ employees)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option value="">Select revenue range</option>
                    <option value="under-1m">Under $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m-plus">$10M+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Challenges</label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows="4" placeholder="What are their main pain points and challenges?"></textarea>
                </div>
              </div>
            </div>
          )}

          {/* Sub-step 2: Market Research */}
          {activeSubStep === 1 && (
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Research</h3>
              <p className="text-gray-600 mb-6">Research your target market and competition.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Market Size</label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows="3" placeholder="Describe the size and scope of your target market"></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Key Competitors</label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows="3" placeholder="List your main competitors and their strengths/weaknesses"></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Market Trends</label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows="3" placeholder="What trends are affecting your market?"></textarea>
                </div>
              </div>
            </div>
          )}

          {/* Sub-step 3: Milestone Reflection */}
          {activeSubStep === 2 && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">🎉 Step 1 Complete!</h3>
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <p className="text-xl text-gray-700">Congratulations on completing your Ideal Client Refinement!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-green-900 mb-4">🎯 What You've Accomplished</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <span className="text-green-800">Defined your ideal client profile</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <span className="text-green-800">Researched your target market</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <span className="text-green-800">Analyzed competition and trends</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">🚀 Impact on Your Business</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Your refined ideal client profile will guide all your marketing efforts, 
                      ensuring you attract the right prospects and create messaging that resonates 
                      with your target audience.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold text-orange-900 mb-2">🎊 Milestone Achieved!</h4>
                  <p className="text-orange-800">
                    You've successfully completed Step 1 of your Authority Revenue Toolkit!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 bg-white rounded-lg shadow-lg border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <a 
              href="/dashboard"
              className="text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-center bg-blue-600 hover:bg-blue-700"
            >
              <span>← Back to Dashboard</span>
            </a>
            
            {activeSubStep === 2 ? (
              <a 
                href="/step/2"
                className="text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-center bg-orange-500 hover:bg-orange-600"
              >
                <span>Continue To Step 2 →</span>
              </a>
            ) : (
              <div className="px-6 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-500 text-center">
                <span>Complete all sub-steps to continue</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;

