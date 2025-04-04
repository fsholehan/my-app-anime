import React from "react";

function Section({ children }) {
  return <div className="flex flex-col lg:flex-row gap-4">{children}</div>;
}

export default Section;
