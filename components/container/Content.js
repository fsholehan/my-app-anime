import React from "react";

function Content({ children }) {
  return (
    <div className="flex flex-col gap-4 border border-zinc-800 bg-zinc-900 rounded-lg p-3 md:flex-[3]">
      {children}
    </div>
  );
}

export default Content;
