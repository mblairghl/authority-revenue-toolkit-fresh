// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [userData, setUserData] = useState({
    name: "John Smith",
    companyName: "Cultivating Sales, LLC"
  });
  const [stepProgress, setStepProgress] = useState({});

  useEffect(() => {
    try {
      const storedUserData = localStorage.getItem('userData');
      const storedStepProgress = localStorage.getItem('stepProgress');
      
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
      
      if (storedStepProgress) {
        setStepProgress(JSON.parse(storedStepProgress));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }, []);

  function clearAllDataAndFix() {
    try {
      localStorage.clear();
      if (typeof indexedDB !== 'undefined' && indexedDB.databases) {
        indexedDB.databases().then((dbs) =>
          dbs.forEach((db) => indexedDB.deleteDatabase(db.name))
        );
      }
      if ("caches" in window) {
        caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
      }
      alert("Local data cleared. Please refresh the page.");
      window.location.reload();
    } catch (e) {
      console.error("Error clearing storage", e);
    }
  }

  // Framework steps with detailed descriptions
  const frameworkSteps = [
    {
      id: 1,
      title: "Ideal Client Refinement",
      subtitle: "Scorecard + Focused",
      description: "Connect with your ideal client and stop wasting time on wrong-fit prospects who drain your energy and rarely become great clients.",
      phase: "PLAN",
      status: "Started",
      progress: "0% Complete"
    },
    {
      id: 2,
      title: "Marketing Funnel Mapping",
      subtitle: "Mapping + Systematic",
      description: "Everything you need to implement a system that systematically guides prospects through your marketing journey instead of hoping they figure it out.",
      phase: "PLAN",
      status: "Locked",
      progress: "0% Complete"
    },
    {
      id: 3,
      title: "Lead Intelligence",
      subtitle: "Audience + Strategic",
      description: "Automate lead scoring to prioritize your best clients versus the duds, so you can focus your time and money where it matters most.",
      phase: "PLAN",
      status: "Locked",
      progress: "0% Complete"
    },
    {
      id: 4,
      title: "Signature Funnel Build",
      subtitle: "Dynamic + Signature",
      description: "Here's where your Signature Solution gets a real-world presence. Take your plan & turn it into a functional frontend funnel that captures leads, structures, and converts.",
      phase: "ASSEMBLE",
      status: "Locked",
      progress: "0% Complete"
    },
    {
      id: 5,
      title: "Sales Pipeline Automation",
      subtitle: "Manual + Automated",
      description: "Create a proven discovery conversation framework that helps qualified prospects sell themselves while protecting your energy from wrong-fit clients.",
      phase: "ASSEMBLE",
      status: "Locked",
      progress: "0% Complete"
    },
    {
      id: 6,
      title: "Build Your Delivery System",
      subtitle: "Ad Hoc + Systematic",
      description: "You've made the sale now it's time to deliver. You'll lay down the foundation for your course, membership, or client onboarding system using CSP.",
      phase: "ASSEMBLE",
      status: "Locked",
      progress: "0% Complete"
    },
    {
      id: 7,
      title: "Metrics & Monitoring",
      subtitle: "Guessing + Data-Driven",
      description: "Turn analytics into clarity with time dashboards that reveal what's working and what needs fixing.",
      phase: "MONITOR",
      status: "Locked",
      progress: "0% Complete"
    },
    {
      id: 8,
      title: "Conversion Optimization",
      subtitle: "Weak Points + Optimized",
      description: "Improve every part of your client's journey and boost ROI over time.",
      phase: "MONITOR",
      status: "Locked",
      progress: "0% Complete"
    },
    {
      id: 9,
      title: "Authority Amplification",
      subtitle: "Hidden Success + Market Recognition",
      description: "Amplify your method the audience-building way that makes trusted leadership your competitive advantage.",
      phase: "MONITOR",
      status: "Locked",
      progress: "0% Complete"
    }
  ];

  const completedSteps = Object.values(stepProgress).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Header with Welcome */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fbae42" }}>
            Authority Revenue Toolkit
          </h1>
          <p className="text-gray-600">{userData.companyName}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Welcome back</p>
          <p className="font-semibold">{userData.name}</p>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="rounded-xl p-6 text-white"
        style={{ backgroundColor: "#0e9246" }}
      >
        <h2 className="text-2xl font-bold mb-3">Transform Your Expertise Into Consistent Revenue</h2>
        <p className="mb-4 opacity-90">
          Congratulations! You've already done the hard part—building your expertise, serving your clients, and proving your value in the marketplace. Now you're ready for the next chapter.
        </p>
        <p className="mb-6 opacity-90">
          This is where we help you turn all that hard-earned knowledge into a system that scales—with structure, automation, and ease. Automation reduces the busywork, smooths out the chaos, and puts your business on autopilot—so you finally stop the rat race of scrambling for the next client instead of being stuck with hundreds of manual tasks every day. Let's get started!
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Your Strategic Advantage</h3>
          <p className="mb-4 opacity-90">Focus on ONE signature solution first. Perfect that system, then replicate the process for additional offerings.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Complete Your Project Setup</h4>
                <p className="text-sm opacity-90">Define your signature offer and set the structure for maximum efficiency</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Work Through Each Framework Step</h4>
                <p className="text-sm opacity-90">Build your revenue engine systematically, step by step</p>
              </div>
            </div>
          </div>
        </div>
        
        <button className="btn-action">
          Take The Dashboard Tour
        </button>
      </section>

      {/* CSP + Community Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-2">Log Into CSP Software</h3>
          <p className="text-gray-600 mb-4">Access your Cultivating Sales Pro Platform</p>
          <button className="btn-action">Open CSP</button>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Join the Community</h3>
          <p className="text-gray-600 mb-4">Connect with other authority builders</p>
          <button className="btn-action">Join Community</button>
        </div>
      </section>

      {/* Required Setup */}
      <section 
        className="card"
        style={{ borderLeft: "4px solid #fbae42" }}
      >
        <h3 className="font-semibold mb-2">Complete Your Project Setup (Required)</h3>
        <p className="text-sm text-gray-600 mb-4">
          This information is required for personalized AI recommendations throughout the framework. The AI needs this information to provide personalized recommendations.
        </p>
        
        <div 
          className="alert-box mb-4"
          style={{ borderColor: "#9f0811", backgroundColor: "#fef2f2" }}
        >
          <p className="text-sm" style={{ color: "#9f0811" }}>
            <strong>Required:</strong> Complete your project setup to unlock all framework steps. The AI needs this information to provide personalized recommendations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <h4 className="font-semibold mb-2">What you'll define:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Your signature offer details</li>
              <li>• Target client information</li>
              <li>• Team structure and roles</li>
              <li>• Revenue goals and timeline</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Why this matters:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Personalized AI suggestions</li>
              <li>• Customized content recommendations</li>
              <li>• Customized framework sequence</li>
              <li>• Better gap analysis results</li>
            </ul>
          </div>
        </div>
        
        <button className="btn-action">
          Start Required Project Setup
        </button>
      </section>

      {/* Framework Progress */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Your Framework Progress</h3>
          <div className="text-right">
            <div className="text-2xl font-bold" style={{ color: "#0e9246" }}>
              {completedSteps}/9
            </div>
            <div className="text-sm text-gray-500">Steps Complete</div>
          </div>
        </div>
        <p className="text-gray-600 mb-6">Complete all 9 steps to systematize your authority-based business</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {frameworkSteps.map((step) => {
            const isCompleted = stepProgress[`step${step.id}`] || false;
            const isLocked = step.id > 1 && !stepProgress[`step${step.id - 1}`];
            
            return (
              <div key={step.id} className="card">
                <div className="text-xs uppercase text-gray-500 mb-2 font-medium">
                  {step.phase}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Step {step.id}: {step.title}</h4>
                  <span className="text-xs text-gray-500">{step.progress}</span>
                </div>
                <div className="text-xs text-gray-500 mb-3">{step.subtitle}</div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/step/${step.id}`}
                    className={`btn-action block text-center ${
                      isLocked ? 'opacity-50 pointer-events-none' : ''
                    }`}
                  >
                    {isCompleted ? "Review" : isLocked ? "Locked" : step.id === 1 ? "Continue" : "Start"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Developer Tools */}
      <section className="card">
        <h3 className="font-semibold mb-2 text-urgent">
          Developer Tools & Troubleshooting
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Important:</strong> If the application stops responding (e.g., buttons don't open pop-ups), you may see the 
          "Device Exceeded" error in your browser console. This happens during testing when 
          too much data is generated. Use the button below to reset your application data and resolve this issue.
        </p>
        <button 
          onClick={clearAllDataAndFix}
          className="btn-action"
          style={{ backgroundColor: "#0e9246", color: "#fff" }}
        >
          Clear All My Data & Fix App
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Cultivating Sales, LLC. All rights reserved.
      </footer>
    </div>
  );
}

