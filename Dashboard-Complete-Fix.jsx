import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [stepProgress, setStepProgress] = useState({});

  useEffect(() => {
    // Safe data loading with error handling
    try {
      const storedUserData = localStorage.getItem('userData');
      const storedStepProgress = localStorage.getItem('stepProgress');
      
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      }
      
      if (storedStepProgress) {
        const parsedStepProgress = JSON.parse(storedStepProgress);
        setStepProgress(parsedStepProgress);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      // Set default values if there's an error
      setUserData({ companyName: 'Your Company', name: 'John Smith' });
      setStepProgress({});
    }
  }, []);

  const clearAllDataAndFix = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      try {
        localStorage.clear();
        setUserData(null);
        setStepProgress({});
        window.location.reload();
      } catch (error) {
        console.error('Error clearing data:', error);
      }
    }
  };

  // Framework steps data
  const frameworkSteps = [
    {
      id: 1,
      title: 'Ideal Client Refinement',
      description: 'Connect with your ideal client and stop wasting time on wrong-fit prospects who drain your energy and rarely become great clients.',
      status: 'Started',
      phase: 'PLAN',
      href: '/step/1'
    },
    {
      id: 2,
      title: 'Marketing Funnel Mapping',
      description: 'Everything you need to implement a system that systematically guides prospects through your marketing journey instead of hoping they figure it out.',
      status: 'Systematic',
      phase: 'PLAN',
      href: '/step/2'
    },
    {
      id: 3,
      title: 'Lead Intelligence',
      description: 'Automate lead scoring to prioritize your best clients versus the duds, so you can focus your time and money where it matters most.',
      status: 'Strategic',
      phase: 'PLAN',
      href: '/step/3'
    },
    {
      id: 4,
      title: 'Signature Funnel Build',
      description: 'Here\'s where your Signature Solution gets a real-world presence. Take your plan & turn it into a functional frontend funnel that captures leads, structures, and converts.',
      status: 'Signature',
      phase: 'ASSEMBLE',
      href: '/step/4'
    },
    {
      id: 5,
      title: 'Sales Pipeline Automation',
      description: 'Create a proven discovery conversation framework that helps qualified prospects sell themselves while protecting your energy from wrong-fit clients.',
      status: 'Automated',
      phase: 'ASSEMBLE',
      href: '/step/5'
    },
    {
      id: 6,
      title: 'Build Your Delivery System',
      description: 'You\'ve made the sale now it\'s time to deliver. You\'ll lay down the foundation for your course, membership, or client onboarding system using CSP.',
      status: 'Systematic',
      phase: 'ASSEMBLE',
      href: '/step/6'
    },
    {
      id: 7,
      title: 'Metrics & Monitoring',
      description: 'Turn analytics into clarity with time dashboards that reveal what\'s working and what needs fixing.',
      status: 'Data-Driven',
      phase: 'MONITOR',
      href: '/step/7'
    },
    {
      id: 8,
      title: 'Conversion Optimization',
      description: 'Weak Points = Optimized. Improve every part of your client\'s journey and boost ROI over time.',
      status: 'Optimized',
      phase: 'MONITOR',
      href: '/step/8'
    },
    {
      id: 9,
      title: 'Authority Amplification',
      description: 'Amplify your method the audience-building way that makes trusted leadership your competitive advantage.',
      status: 'Market Recognition',
      phase: 'MONITOR',
      href: '/step/9'
    }
  ];

  // Calculate progress
  const completedSteps = Object.values(stepProgress || {}).filter(Boolean).length;
  const totalSteps = frameworkSteps.length;

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section 
        className="rounded-xl p-6 text-white"
        style={{ backgroundColor: "#0e9246" }}
      >
        <h1 className="text-2xl font-semibold mb-2">Transform Your Expertise Into Consistent Revenue</h1>
        <p className="mb-4 opacity-90">
          Congratulations! You've already done the hard part—building your expertise, serving your clients, and proving your value in the marketplace. Now you're ready for the next chapter.
        </p>
        <p className="mb-4 opacity-90">
          This is where we help you turn all that hard-earned knowledge into a system that scales—with structure, automation, and ease. Automation reduces the busywork, smooths out the chaos, and puts your business on autopilot—so you finally stop the rat race of scrambling for the next client instead of being stuck with hundreds of manual tasks every day. Let's get started!
        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Your Strategic Advantage</h3>
          <p className="mb-4 opacity-90">Focus on ONE signature solution first. Perfect that system, then replicate the process for additional offerings.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-medium">Complete Your Project Setup</h4>
                <p className="text-sm opacity-90">Define your signature offer and set the structure for maximum efficiency</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-medium">Work Through Each Framework Step</h4>
                <p className="text-sm opacity-90">Build your revenue engine systematically, step by step</p>
              </div>
            </div>
          </div>
          
          <a 
            href="/tour" 
            className="inline-block px-6 py-3 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: "#fbae42", color: "#000" }}
          >
            Take The Dashboard Tour
          </a>
        </div>
      </section>

      {/* CSP + Community Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Log Into CSP Software</h3>
          <p className="text-gray-600 mb-4">Access your Cultivating Sales Pro Platform</p>
          <a 
            href="https://app.yourcsp.com" 
            className="inline-block px-4 py-2 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: "#fbae42", color: "#000" }}
          >
            Open CSP
          </a>
        </article>
        <article className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Join the Community</h3>
          <p className="text-gray-600 mb-4">Connect with other authority builders</p>
          <a 
            href="https://community.link" 
            className="inline-block px-4 py-2 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: "#fbae42", color: "#000" }}
          >
            Join Community
          </a>
        </article>
      </section>

      {/* Required Setup */}
      <section 
        className="bg-white border border-gray-200 rounded-lg p-6"
        style={{ borderLeftWidth: "4px", borderLeftColor: "#fbae42" }}
      >
        <h3 className="font-semibold mb-2">Complete Your Project Setup (Required)</h3>
        <p className="text-sm text-gray-600 mb-4">
          This information is required for personalized AI recommendations throughout the framework.
        </p>
        <div 
          className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4"
          style={{ borderColor: "#9f0811" }}
        >
          <p className="text-sm" style={{ color: "#9f0811" }}>
            <strong>Required:</strong> Complete your project setup to unlock all framework steps. The AI needs this information to provide personalized recommendations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <h4 className="font-medium mb-2">What you'll define:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Your signature offer details</li>
              <li>• Target client information</li>
              <li>• Team structure and roles</li>
              <li>• Revenue goals and timeline</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Why this matters:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Personalized AI suggestions</li>
              <li>• Customized content recommendations</li>
              <li>• Customized framework sequence</li>
              <li>• Better gap analysis results</li>
            </ul>
          </div>
        </div>
        
        <a 
          href="/setup" 
          className="inline-block px-6 py-3 rounded-lg font-semibold transition-colors"
          style={{ backgroundColor: "#fbae42", color: "#000" }}
        >
          Start Required Project Setup
        </a>
      </section>

      {/* Framework Progress Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Your Framework Progress</h3>
          <span className="text-sm text-gray-500">
            {completedSteps}/{totalSteps} Steps Complete
          </span>
        </div>
        <p className="text-gray-600 mb-6">Complete all 9 steps to systematize your authority-based business</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {frameworkSteps.map((step) => {
            const isCompleted = stepProgress[`step${step.id}`] || false;
            const isLocked = step.id > 1 && !stepProgress[`step${step.id - 1}`];
            
            return (
              <article key={step.id} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-xs uppercase text-gray-500 mb-2 font-medium">
                  {step.phase}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Step {step.id}: {step.title}</h4>
                  <span className="text-xs text-gray-500">
                    {isCompleted ? "Complete" : isLocked ? "Locked" : "0% Complete"}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {step.status} • {step.phase === 'PLAN' ? 'Focused' : step.phase === 'ASSEMBLE' ? 'Systematic' : 'Data-Driven'}
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={step.href}
                    className={`inline-block w-full text-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                      isLocked 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : ''
                    }`}
                    style={!isLocked ? { backgroundColor: "#fbae42", color: "#000" } : {}}
                  >
                    {isCompleted ? "Review" : isLocked ? "Locked" : step.id === 1 ? "Continue" : "Start"}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Developer Tools */}
      <section className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold mb-2" style={{ color: "#9f0811" }}>
          Developer Tools & Troubleshooting
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Important:</strong> If the application stops responding (e.g., buttons don't open pop-ups), you may see the 
          "Device Exceeded" error in your browser console. This happens during testing when 
          too much data is generated. Use the button below to reset your application data and resolve this issue.
        </p>
        <button 
          onClick={clearAllDataAndFix}
          className="px-6 py-3 rounded-lg font-semibold transition-colors"
          style={{ backgroundColor: "#0e9246", color: "#fff" }}
        >
          Clear All My Data & Fix App
        </button>
      </section>
    </div>
  );
};

export default Dashboard;

