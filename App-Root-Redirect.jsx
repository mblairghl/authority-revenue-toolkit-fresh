// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
// Import your step components
// import Step1 from './pages/Step1';
// import Step2 from './pages/Step2';
// ... etc

function App() {
  return (
    <Router>
      <Routes>
        {/* Root route redirects to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* All routes use the AppLayout wrapper */}
        <Route path="/*" element={<AppLayout />}>
          {/* Dashboard route */}
          <Route path="dashboard" element={<Dashboard />} />
          
          {/* Step routes - uncomment and add your step components */}
          {/* <Route path="step/1" element={<Step1 />} /> */}
          {/* <Route path="step/2" element={<Step2 />} /> */}
          {/* <Route path="step/3" element={<Step3 />} /> */}
          {/* <Route path="step/4" element={<Step4 />} /> */}
          {/* <Route path="step/5" element={<Step5 />} /> */}
          {/* <Route path="step/6" element={<Step6 />} /> */}
          {/* <Route path="step/7" element={<Step7 />} /> */}
          {/* <Route path="step/8" element={<Step8 />} /> */}
          {/* <Route path="step/9" element={<Step9 />} /> */}
          
          {/* Placeholder routes for now */}
          <Route path="step/:id" element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Step Component</h1>
              <p>This step is under development.</p>
              <button 
                onClick={() => window.history.back()} 
                className="btn-action mt-4"
              >
                Back to Dashboard
              </button>
            </div>
          } />
          
          {/* Reports routes */}
          <Route path="reports/project-setup" element={
            <div className="p-8 text-center">
              <h1 className="text-2xl">Project Setup Report</h1>
              <p>Coming soon...</p>
            </div>
          } />
          <Route path="reports/comprehensive" element={
            <div className="p-8 text-center">
              <h1 className="text-2xl">Comprehensive Report</h1>
              <p>Coming soon...</p>
            </div>
          } />
          <Route path="reports/step1" element={
            <div className="p-8 text-center">
              <h1 className="text-2xl">Step 1 Report</h1>
              <p>Coming soon...</p>
            </div>
          } />
          <Route path="reports/step2" element={
            <div className="p-8 text-center">
              <h1 className="text-2xl">Step 2 Report</h1>
              <p>Coming soon...</p>
            </div>
          } />
          
          {/* Setup and tour routes */}
          <Route path="setup" element={
            <div className="p-8 text-center">
              <h1 className="text-2xl">Project Setup</h1>
              <p>Coming soon...</p>
            </div>
          } />
          <Route path="tour" element={
            <div className="p-8 text-center">
              <h1 className="text-2xl">Dashboard Tour</h1>
              <p>Coming soon...</p>
            </div>
          } />
          
          {/* Catch all - redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

