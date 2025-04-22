"use client";

import React from "react";

export function HelpCommand() {
  const helpItems = [
    { cmd: "h", desc: "show this help message" },
    { cmd: "abt", desc: "portfolio information" },
    { cmd: "music", desc: "my fav tracks atm" },
    { cmd: "xp", desc: "my job experience" },
    { cmd: "proj", desc: "list of my projects" },
    { cmd: "stat", desc: "employment status" },
    { cmd: "cls", desc: "clear the terminal" },
    { cmd: "ct", desc: "contact info" },
  ];
  return (
    <ul style={{ color: "#FFF", paddingLeft: "1.25rem", listStyle: "none" }}>
      {helpItems.map((item, idx) => (
        <li key={idx} className="mb-1">
          <span style={{ color: "#FFF", marginRight: 8 }}>+</span>
          {item.cmd} - {item.desc}
        </li>
      ))}
    </ul>
  );
}
