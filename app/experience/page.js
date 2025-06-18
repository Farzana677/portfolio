"use client";

import { useState } from "react";

export default function Page() {
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter...`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers...`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at...`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers...`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at...`,
    },
  ];

  const [activeTab, setActiveTab] = useState("html");

  return (
    <section className="py-8  text-white" id="experience">
      <h1 className="text-2xl font-bold mb-6">Where I've Worked</h1>

      <div className="flex">
        <div className="flex flex-col w-40 border-r border-white/30">
          {data.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={`px-4 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                activeTab === value
                  ? "bg-[#183B48] text-[#64FFDA] font-semibold"
                  : "text-white hover:bg-[#183B48]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex-1 pl-6">
          {data.map(
            ({ value, desc }) =>
              activeTab === value && (
                <div key={value} className="text-sm leading-relaxed">
                  {desc}
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
