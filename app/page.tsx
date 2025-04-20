"use client";

import { useState } from "react";

const USER_NAMES = ["jecal", "typo", "jullian"];

function getRandomName() {
  return USER_NAMES[Math.floor(Math.random() * USER_NAMES.length)] + ", 18歳";
}

const USER_INFO_BASE = {
  os: "macOS",
  location: "us, cwru '29",
  role: "wanna be swe",
  languages: "forever learning c++, java, typescript",
  frameworks: "next.js",
  interests:
    "anything math, money, building things, getting a 1989 soarer, getting a 180sx",
  git: "github.com/jecal",
};

const JOBS_INFO_BASE = [
  {
    title: "it technician",
    company: "bergenfield high school",
    date: "summer 2023",
    description:
      "helped install access points and managed tech inventory. created a spreadsheet system to track and manage equipment, including repairs and replacements. refurbished old tech items like patch wires, monitors, laptops, and printers.",
  },
  {
    title: "cram slide designer",
    company: "fiveable",
    date: "spring 2024",
    description:
      "created slides for cram sessions on ap calc topics in google slides. worked with and communicated with team via slack.",
  },
];

const PROJECTS_INFO_BASE = [
  {
    title: "dap",
    status: "in the works",
    frameworks: "next.js, tailwindcss, ts, supabase",
    description:
      "job search engine for teens. mvp will prolly be out by late may.",
  },
  {
    title: "portfolio",
    status: "active",
    frameworks: "next.js, tailwindcss, ts",
    description:
      "terminal inspired ui portfolio. you can literally just make things.",
  },
  {
    title: "benkyoo",
    status: "dead",
    frameworks: "vite, chakraui v2, firebase, netlify",
    description:
      "buildspace proj. note sharing platform for students. realized this wasn't a good idea",
  },
  {
    title: "b-chat",
    status: "dead",
    frameworks: "react, bootstrap, firebase, netlify",
    description: "project i used to learn how firebase stuff works.",
  },
];

function formatUserInfo(info: { user: string } & typeof USER_INFO_BASE) {
  return `user:        ${info.user}\nOS:          ${info.os}\nlocation:    ${info.location}\nrole:        ${info.role}\nlanguages:   ${info.languages}\nframeworks:  ${info.frameworks}\ninterests:   ${info.interests}\ngithub:      ${info.git}`;
}

function TerminalOutput({ output }: { output: React.ReactNode }) {
  return (
    <div className="mt-2 font-mono" style={{ color: "#FFF" }}>
      {output}
    </div>
  );
}

function AsciiArt() {
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

function AboutCommand() {
  const info = { user: getRandomName(), ...USER_INFO_BASE };
  return (
    <div className="flex flex-col sm:flex-row items-start gap-8">
      <AsciiArt />
      <pre
        className="mt-4 sm:mt-0 whitespace-pre-wrap break-words w-full sm:w-auto"
        style={{
          color: "#FFF",
          background: "transparent",
          fontFamily: "inherit",
          fontSize: "1rem",
          margin: 0,
          minWidth: 0,
          wordBreak: "break-word",
        }}
      >
        {formatUserInfo(info)}
      </pre>
    </div>
  );
}

function MusicCommand() {
  return (
    <div>
      <ul style={{ color: "#FFF", paddingLeft: "1.25rem", listStyle: "none" }}>
        <li>
          <span style={{ color: "#FFF", marginRight: 8 }}>+</span>all of mei
          semones works
        </li>
        <li>
          <span style={{ color: "#FFF", marginRight: 8 }}>+</span>hypchondriac
          (album) - brakence
        </li>
        <li>
          <span style={{ color: "#FFF", marginRight: 8 }}>+</span>wallsocket -
          underscores
        </li>
        <li>
          <span style={{ color: "#FFF", marginRight: 8 }}>+</span>what do you
          think about the car? - declan mckenna
        </li>
      </ul>
    </div>
  );
}

function ExpCommand() {
  return (
    <div>
      <ul style={{ color: "#FFF", paddingLeft: "1.25rem", listStyle: "none" }}>
        {JOBS_INFO_BASE.map((job, idx) => (
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

function ProjectsCommand() {
  return (
    <div>
      <ul style={{ color: "#FFF", paddingLeft: "1.25rem", listStyle: "none" }}>
        {PROJECTS_INFO_BASE.map((project, idx) => (
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

function StatusCommand() {
  return (
    <div className="text-md" style={{ color: "#FFF" }}>
      lfo
    </div>
  );
}

function HelpCommand() {
  const helpItems = [
    { cmd: "help", desc: "show this help message" },
    { cmd: "about", desc: "portfolio information" },
    { cmd: "music", desc: "my fav tracks & albums atm" },
    { cmd: "exp", desc: "my job experience" },
    { cmd: "proj", desc: "list of my projects" },
    { cmd: "status", desc: "employment status" },
    { cmd: "clear", desc: "clear the terminal" },
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

const commands: Record<string, (clearHistory: () => void) => React.ReactNode> =
  {
    about: () => <AboutCommand />,
    music: () => <MusicCommand />,
    exp: () => <ExpCommand />,
    proj: () => <ProjectsCommand />,
    status: () => <StatusCommand />,
    clear: (clearHistory) => {
      clearHistory();
      return null;
    },
    help: () => <HelpCommand />,
  };

export default function Home() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { cmd: string; output: React.ReactNode }[]
  >([]);

  function clearHistory() {
    setHistory([]);
  }

  function handleCommand(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim();
    let output: React.ReactNode = (
      <span style={{ color: "#FFF" }}>Command not found</span>
    );
    if (cmd && commands[cmd]) {
      output = commands[cmd](clearHistory);
    }
    if (cmd === "clear") {
      setInput("");
      return;
    }
    setHistory([...history, { cmd, output }]);
    setInput("");
  }

  return (
    <div
      className="min-h-screen h-screen flex items-center justify-center"
      style={{ background: "#0D142E", color: "#FFF", overflow: "hidden" }}
    >
      <div
        className="w-full max-w-5xl rounded-lg p-6 font-mono text-lg sm:p-6 sm:rounded-lg sm:max-w-5xl h-full flex flex-col justify-between gap-4"
        style={{ background: "#0D142E", color: "#FFF", overflow: "hidden" }}
      >
        <div className="flex flex-col h-full" style={{ minHeight: 0 }}>
          <div className="mb-4" style={{ color: "#FFF" }}>
            type help to start.
          </div>
          <div
            className="flex-1 flex flex-col justify-end"
            style={{ minHeight: 0, overflow: "hidden" }}
          >
            <div
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              {history.map((h, i) => (
                <div key={i} className="mb-6">
                  <span style={{ color: "#FFF" }}>$</span> {h.cmd}
                  <TerminalOutput output={h.output} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4">
          <span style={{ color: "#FFF" }}>$</span>
          <input
            autoFocus
            className="flex-1 bg-transparent outline-none border-none placeholder:text-gray-300"
            style={{ color: "#FFF" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a command..."
          />
        </form>
      </div>
    </div>
  );
}
