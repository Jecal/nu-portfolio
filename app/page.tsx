"use client";

import { useState } from "react";
import { TerminalOutput } from "./commands/utils";
import { AboutCommand } from "./commands/AboutCommand";
import { MusicCommand } from "./commands/MusicCommand";
import { ExpCommand } from "./commands/ExpCommand";
import { ProjectsCommand } from "./commands/ProjectsCommand";
import { StatusCommand } from "./commands/StatusCommand";
import { HelpCommand } from "./commands/HelpCommand";
import { SplashCommand } from "./commands/SplashCommand";

const commands: Record<string, (clearHistory: () => void) => React.ReactNode> =
  {
    abt: () => <AboutCommand />,
    music: () => <MusicCommand />,
    xp: () => <ExpCommand />,
    proj: () => <ProjectsCommand />,
    stat: () => <StatusCommand />,
    clear: (clearHistory) => {
      clearHistory();
      return null;
    },
    h: () => <HelpCommand />,
  };

export default function Home() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { cmd: string; output: React.ReactNode }[]
  >([{ cmd: "", output: <SplashCommand /> }]);

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
      style={{
        background: "#0D142E",
        color: "#FFF",
        overflow: "hidden",
        position: "fixed",
        inset: 0,
      }}
    >
      <div
        className="w-full max-w-5xl rounded-lg p-4 font-mono text-lg sm:p-6 sm:rounded-lg sm:max-w-5xl h-full flex flex-col justify-between"
        style={{
          background: "#0D142E",
          color: "#FFF",
          overflow: "hidden",
          maxHeight: "100vh",
        }}
      >
        <div className="flex flex-col h-full" style={{ flex: 1, minHeight: 0 }}>
          <div
            className="flex-1 flex flex-col justify-end"
            style={{ overflow: "hidden", maxHeight: "calc(100vh - 60px)" }}
          >
            <div
              style={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                maxHeight: "100%",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="hide-scrollbar"
            >
              {history.map((h, i) => (
                <div key={i} className="mb-6">
                  {h.cmd && (
                    <>
                      <span style={{ color: "#FFF" }}>$</span> {h.cmd}
                    </>
                  )}
                  <TerminalOutput output={h.output} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
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
