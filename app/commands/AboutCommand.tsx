"use client";

import React from "react";
import data from "./data.json";
import { AsciiArt, getRandomName, formatUserInfo } from "./utils";

export function AboutCommand() {
  const info = { user: getRandomName(), ...data.USER_INFO_BASE };
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
