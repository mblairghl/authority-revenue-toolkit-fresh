import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';
import Step7 from './components/Step7';
import Step8 from './components/Step8';
import Step9 from './components/Step9';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route redirects to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Step routes */}
          <Route path="/step/1" element={<Step1 />} />
          <Route path="/step/2" element={<Step2 />} />
          <Route path="/step/3" element={<Step3 />} />
          <Route path="/step/4" element={<Step4 />} />
          <Route path="/step/5" element={<Step5 />} />
          <Route path="/step/6" element={<Step6 />} />
          <Route path="/step/7" element={<Step7 />} />
          <Route path="/step/8" element={<Step8 />} />
          <Route path="/step/9" element={<Step9 />} />
          
          {/* Reports routes (placeholder for future) */}
          <Route path="/reports/project-setup" element={<div className="p-8 text-center"><h1 className="text-2xl">Project Setup Report</h1><p>Coming soon...</p></div>} />
          <Route path="/reports/comprehensive" element={<div className="p-8 text-center"><h1 className="text-2xl">Comprehensive Report</h1><p>Coming soon...</p></div>} />
          <Route path="/reports/step1" element={<div className="p-8 text-center"><h1 className="text-2xl">Step 1 Report</h1><p>Coming soon...</p></div>} />
          <Route path="/reports/step2" element={<div className="p-8 text-center"><h1 className="text-2xl">Step 2 Report</h1><p>Coming soon...</p></div>} />
          
          {/* Setup route */}
          <Route path="/setup" element={<div className="p-8 text-center"><h1 className="text-2xl">Project Setup</h1><p>Coming soon...</p></div>} />
          <Route path="/tour" element={<div className="p-8 text-center"><h1 className="text-2xl">Dashboard Tour</h1><p>Coming soon...</p></div>} />
          
          {/* Catch all route - redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

