// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const defaultSteps = [
      { n: 1, title: "Ideal Client Refinement", status: "Started" },
      { n: 2, title: "Marketing Funnel Mapping", status: "Locked" },
      { n: 3, title: "Lead Intelligence", status: "Locked" },
      { n: 4, title: "Signature Funnel Build", status: "Locked" },
      { n: 5, title: "Sales Pipeline Automation", status: "Locked" },
      { n: 6, title: "Build Your Delivery System", status: "Locked" },
      { n: 7, title: "Metrics & Monitoring", status: "Locked" },
      { n: 8, title: "Conversion Optimization", status: "Locked" },
      { n: 9, title: "Authority Amplification", status: "Locked" },
    ];
    setSteps(defaultSteps);
  }, []);

  function clearAllDataAndFix() {
    try {
      localStorage.clear();
      indexedDB.databases().then((dbs) =>
        dbs.forEach((db) => indexedDB.deleteDatabase(db.name))
      );
      if ("caches" in window) {
        caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
      }
      alert("Local data cleared. Please refresh the page.");
    } catch (e) {
      console.error("Error clearing storage", e);
    }
  }

  return (
    <div className="space-y-6">
      <section
        className="rounded-xl p-6"
        style={{ background: "#0e9246", color: "#fff" }}
      >
        <h1 className="text-2xl font-bold">
          Transform Your Expertise Into Consistent Revenue
        </h1>
        <p className="mt-2">
          Focus on ONE signature solution first. Perfect that system, then
          replicate for additional offerings.
        </p>
        <button className="btn-action mt-4">Take The Dashboard Tour</button>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold">Log Into CSP Software</h3>
          <p>Access your Cultivating Sales Pro Platform</p>
          <button className="btn-action mt-2">Open CSP</button>
        </div>
        <div className="card">
          <h3 className="font-semibold">Join the Community</h3>
          <p>Connect with other authority builders</p>
          <button className="btn-action mt-2">Join</button>
        </div>
      </section>

      <section className="card border-l-4" style={{ borderColor: "#fbae42" }}>
        <h3 className="font-semibold">Complete Your Project Setup (Required)</h3>
        <p className="text-sm text-gray-600">
          Required: Complete your project setup to unlock all framework steps.
        </p>
        <button className="btn-action mt-3">Start Required Project Setup</button>
      </section>

      <section>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Your Framework Progress</h3>
          <span className="text-sm text-gray-500">{steps.length}/9 Steps</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {Array.isArray(steps) && steps.length > 0 ? (
            steps.map((s) => (
              <div key={s.n} className="card">
                <div className="text-xs uppercase text-gray-500 mb-1">
                  {s.n <= 3 ? "PLAN" : s.n <= 6 ? "ASSEMBLE" : "MONITOR"}
                </div>
                <h4 className="font-medium">
                  Step {s.n}: {s.title}
                </h4>
                <div className="mt-3">
                  <button className="btn-action">
                    {s.status === "Started" ? "Continue" : "Locked"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No steps available</p>
          )}
        </div>
      </section>

      <section className="card">
        <h3 className="font-semibold" style={{ color: "#9f0811" }}>
          Developer Tools & Troubleshooting
        </h3>
        <p className="text-sm">
          If the app stops responding, you may see a quota error. Use the button
          below to reset your application data.
        </p>
        <button className="btn-action mt-3" onClick={clearAllDataAndFix}>
          Clear All My Data & Fix App
        </button>
      </section>
    </div>
  );
}
