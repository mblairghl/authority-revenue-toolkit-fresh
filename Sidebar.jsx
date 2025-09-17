// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const steps = [
    { n: 1, title: "Ideal Client Refinement" },
    { n: 2, title: "Marketing Funnel Mapping" },
    { n: 3, title: "Lead Intelligence" },
    { n: 4, title: "Signature Funnel Build" },
    { n: 5, title: "Sales Pipeline Automation" },
    { n: 6, title: "Build Your Delivery System" },
    { n: 7, title: "Metrics & Monitoring" },
    { n: 8, title: "Conversion Optimization" },
    { n: 9, title: "Authority Amplification" },
  ];

  return (
    <nav className="h-full flex flex-col bg-white">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold" style={{ color: "#0e9246" }}>
          Authority Toolkit
        </h2>
      </div>

      <div className="p-4 border-b border-gray-200">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            \`block py-2 px-3 rounded \${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}\`
          }
        >
          📊 Dashboard
        </NavLink>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {steps.map((step) => (
          <NavLink
            key={step.n}
            to={\`/step/\${step.n}\`}
            className={({ isActive }) =>
              \`block py-2 px-3 rounded text-sm \${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-50 text-gray-700"}\`
            }
          >
            Step {step.n}: {step.title}
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
        © {new Date().getFullYear()} Cultivating Sales
      </div>
    </nav>
  );
}
