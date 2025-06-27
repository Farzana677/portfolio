"use client";

import { useState } from "react";

export default function Page() {
  const data = [
    {
      label: "Awaaltech (internship)",
      value: "html",
      desc: `Supported the front-end team in building responsive, user-friendly web interfaces using Html Css  and Bootstrap. Gained practical experience in integrating APIs, managing state, and collaborating in an Agile development environment.',
      achievements: [
       
        'Implemented responsive layouts using  CSS, ensuring cross-device compatibility',
        'Integrated front-end components with RESTful APIs to display dynamic data',
        'Used Git and GitHub for version control and collaborated through pull requests and code reviews',
        'Worked closely with UI/UX designers to translate mockups into functional interfaces`,
    },
    {
      label: "Imobisoft (internship) ",
      value: "react",
      desc: ` Supported the front-end team in building responsive, user-friendly web interfaces using Html Css  and Bootstrap. Gained practical experience in integrating APIs, managing state, and collaborating in an Agile development environment.',
      achievements: [
       
        'Implemented responsive layouts using  CSS, ensuring cross-device compatibility',
        'Integrated front-end components with RESTful APIs to display dynamic data',
        'Used Git and GitHub for version control and collaborated through pull requests and code reviews',
        'Worked closely with UI/UX designers to translate mockups into functional interfaces,
      ],
`,
    },
    {
      label: "Imobisoft (full-time)",
      value: "vue",
      desc: `Designed and implemented pixel-perfect user interfaces using React, ensuring alignment with UX/UI design standards. Focused on delivering seamless user experiences by optimizing responsiveness, accessibility, and usability across browsers and devices.',

      achievements: [
        'Enhanced app performance by optimizing rendering and implementing lazy loading strategies',
        'Improved accessibility and WCAG compliance across the application',
        'Collaborated with designers to translate complex Figma designs into pixel-perfect interfaces'`,
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
