import React, { useState } from 'react';

const Step3 = () => {
  const [activeSubStep, setActiveSubStep] = useState(0);

  const subSteps = [
    { id: 0, title: 'Setup', number: '1' },
    { id: 1, title: 'Configuration', number: '2' },
    { id: 2, title: 'Milestone Reflection', number: '3' }
  ];

  const stepTitles = {
    3: 'Lead Intelligence',
    4: 'Signature Funnel Build',
    5: 'Sales Pipeline Automation',
    6: 'Build Your Delivery System',
    7: 'Metrics & Monitoring',
    8: 'Conversion Optimization',
    9: 'Authority Amplification'
  };

  const stepDescriptions = {
    3: 'Set up lead tracking and scoring systems.',
    4: 'Create your automated marketing funnel.',
    5: 'Automate your sales process and workflows.',
    6: 'Create client delivery and onboarding systems.',
    7: 'Track performance metrics and ROI.',
    8: 'Optimize conversions and improve results.',
    9: 'Scale your authority and expand your reach.'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">STEP 3 OF 9</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{stepTitles[3]}</h1>
          <p className="text-gray-600">{stepDescriptions[3]}</p>
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
          {activeSubStep === 0 && (
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Setup</h3>
              <p className="text-gray-600 mb-6">Configure the initial settings for this step.</p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">This step is under development. Content will be added soon.</p>
              </div>
            </div>
          )}

          {activeSubStep === 1 && (
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Configuration</h3>
              <p className="text-gray-600 mb-6">Set up the detailed configuration for this step.</p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">This step is under development. Content will be added soon.</p>
              </div>
            </div>
          )}

          {activeSubStep === 2 && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">🎉 Step 3 Complete!</h3>
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <p className="text-xl text-gray-700">Congratulations on completing {stepTitles[3]}!</p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold text-orange-900 mb-2">🎊 Milestone Achieved!</h4>
                  <p className="text-orange-800">
                    You've successfully completed Step 3 of your Authority Revenue Toolkit!
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
              href="/step/$((3 - 1))"
              className="text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-center bg-blue-600 hover:bg-blue-700"
            >
              <span>← Back to Step $((3 - 1))</span>
            </a>
            
            {activeSubStep === 2 ? (
              $(3 < 9 ? "<a href=\"/step/$((3 + 1))\" className=\"text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-center bg-orange-500 hover:bg-orange-600\"><span>Continue To Step $((3 + 1)) →</span></a>" : "<a href=\"/dashboard\" className=\"text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-center bg-green-500 hover:bg-green-600\"><span>Return to Dashboard</span></a>")
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

export default Step3;
