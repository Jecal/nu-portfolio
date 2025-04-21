"use client";

import React from "react";

export function SplashCommand() {
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
░▀▀█░█▀▀░█▀▀░█▀█░█░░░░░░█▀█░█▀▀
░░░█░█▀▀░█░░░█▀█░█░░░░░░█░█░▀▀█
░▀▀░░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░░▀▀▀░▀▀▀                                                                    
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
      ███                              ████                     
     ░░░                              ░░███                     
     █████  ██████   ██████   ██████   ░███      ██████   █████ 
    ░░███  ███░░███ ███░░███ ░░░░░███  ░███     ███░░███ ███░░  
     ░███ ░███████ ░███ ░░░   ███████  ░███    ░███ ░███░░█████ 
     ░███ ░███░░░  ░███  ███ ███░░███  ░███    ░███ ░███ ░░░░███
     ░███ ░░██████ ░░██████ ░░████████ █████ ██░░██████  ██████ 
     ░███  ░░░░░░   ░░░░░░   ░░░░░░░░ ░░░░░ ░░  ░░░░░░  ░░░░░░  
 ███ ░███                                                       
░░██████                                                        
 ░░░░░░  
`}
      </pre>
      <div className="text-md mt-4" style={{ color: "#FFF" }}>
        type &quot;h&quot; to get started.
      </div>
    </>
  );
}
