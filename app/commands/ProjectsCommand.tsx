"use client";

import React from "react";
import data from "./data.json";

export function ProjectsCommand() {
  return (
    <div>
      <ul style={{ color: "#FFF", paddingLeft: "1.25rem", listStyle: "none" }}>
        {data.PROJECTS_INFO_BASE.map((project, idx) => (
          <li key={idx} className="mb-4">
            <div>
              <span style={{ color: "#FFF", marginRight: 8 }}>+</span>
              <span className="font-semibold text-lg">{project.title}</span>
            </div>
            <div className="text-sm mb-1" style={{ color: "#FFF" }}>
              [{project.status}] {project.frameworks}
            </div>
            <p className="text-base" style={{ color: "#FFF" }}>
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
