"use client";

import React from "react";
import data from "./data.json";

export function ExpCommand() {
  return (
    <div>
      <ul style={{ color: "#FFF", paddingLeft: "1.25rem", listStyle: "none" }}>
        {data.JOBS_INFO_BASE.map((job, idx) => (
          <li key={idx} className="mb-4">
            <div>
              <span style={{ color: "#FFF", marginRight: 8 }}>+</span>
              <span className="font-semibold text-lg">
                {job.title} @ {job.company}
              </span>
            </div>
            <div className="text-sm mb-1" style={{ color: "#FFF" }}>
              {job.date}
            </div>
            <p className="text-base" style={{ color: "#FFF" }}>
              {job.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
