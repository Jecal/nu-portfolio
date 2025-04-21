"use client";

import React from "react";
import data from "./data.json";

export function TerminalOutput({ output }: { output: React.ReactNode }) {
  return (
    <div className="mt-2 font-mono" style={{ color: "fff" }}>
      {output}
    </div>
  );
}

export function AsciiArt() {
  return (
    <>
      <pre
        className="block sm:hidden"
        style={{
          color: "#FFF",
          lineHeight: 1,
          margin: 0,
          fontSize: "1.1rem",
          userSelect: "none",
        }}
      >
        {`
████████████████████
████████████████████
████████████████████
█████▓██▓███████████
█████▓█▓░▒▒▓░░██████
████▓▒▒      ███▓███
████▓       ████ ▒██
██████▓   ▒  ███ ▒██
█████████▓    ▓▓ ▒██
▓░████████▒███     ▒
██████████████ ░         
`}
      </pre>
      <pre
        className="hidden sm:block"
        style={{
          color: "#FFF",
          lineHeight: 1,
          margin: 0,
          fontSize: "1.1rem",
          userSelect: "none",
        }}
      >
        {`
████████████████████████████████████████
████████████████████████████████████████
████████████████████████████████████████
████████████████████████████████████████
████████████████████████████████████████
████████████████████████████████████████
████████████████▓███████████████████████
██████████░█████░▒▓██▒██████████████████
███████████▒██▓█▓ ▒█▓▓███░▒█████████████
███████████░▒█▒▓░ ▒█▓▓ ▒ ░▓▒████████████
████████▓███▒░             █████████████
████████▓▒ ▓░            ▒███████ ▒█████
█████████░              ████████░ ░█████
██████████▓             ▓███████░ ░█████
████████████░        ▓█  ▓██████  ░█████
████████████████▓▓▒▒▓     ▒█████  ▒████▒
███████████████████░    ░  ░▒███  ▒█████
██████████████████ ░    █▒   ██▓  ▒▓▓███
░▓▓▓██████████████▓░  ▓███▓           ▓█
███░████████████████████████            
███████████████████████████▓  ░      ░  
███████████████████████████             
`}
      </pre>
    </>
  );
}

export function getRandomName() {
  return (
    data.USER_NAMES[Math.floor(Math.random() * data.USER_NAMES.length)] +
    ", 18歳"
  );
}

export function formatUserInfo(
  info: { user: string } & typeof data.USER_INFO_BASE
) {
  return `\nuser:        ${info.user}\nao:          ${info.location}\nrole:        ${info.role}\nlanguages:   ${info.languages}\nframeworks:  ${info.frameworks}\ninterests:   ${info.interests}\ngithub:      ${info.git}`;
}
