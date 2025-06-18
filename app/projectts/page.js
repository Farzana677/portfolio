export default function PortfolioSection() {
  const projects = [
    {
      title: "Swiftcart",
      description:
        "Built a fully functional Shopping Cart using React.js for dynamic UI updates and state management. Styled using HTML, CSS, and Tailwind CSS for a clean, responsive interface.",
      techStack: ["Html5", "Tailwind", "React", "React Router"],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683121269108-1bd195cd18cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3BwaW5nfGVufDB8fDB8fHww",
      projectType: "Shopping Cart",
    },
    {
      title: "Project 2",
      description:
        "Description of the second project. You can add more details here like features, technologies used, or any additional information.",
      techStack: ["Html5", "Tailwind", "React"],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683121269108-1bd195cd18cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3BwaW5nfGVufDB8fDB8fHww",
      projectType: "Project Type",
    },
    {
      title: "Project 3",
      description:
        "Description of the third project. More details can be added here. For example, how the project was built, its features, etc.",
      techStack: ["JavaScript", "CSS", "Node.js"],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683121269108-1bd195cd18cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3BwaW5nfGVufDB8fDB8fHww",
      projectType: "Web App",
    },
    {
      title: "Project 4",
      description:
        "Description of the fourth project. You can elaborate on features, challenges faced, and technologies used.",
      techStack: ["Python", "Flask", "MongoDB"],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683121269108-1bd195cd18cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3BwaW5nfGVufDB8fDB8fHww",
      projectType: "API Development",
    },
  ];

  return (
    <section
      className="min-h-screen bg-[#0a192f] text-white p-8"
      id="projectts"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#64ffda] text-lg font-mono mb-16">
          ▶ 03. Some Things I've Built
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          >
            <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="text-[#64ffda] text-sm font-mono mb-4">
                {project.projectType}
              </p>
              <h3 className="text-4xl font-bold text-[#ccd6f6] mb-6">
                {project.title}
              </h3>

              <div className="bg-[#112240] p-6 rounded-lg shadow-lg mb-8">
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="text-[#64ffda] text-sm font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M1A4 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Project Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto filter grayscale contrast-125 group-hover:filter-none transition-all duration-300"
                />
                <div className="absolute inset-0 bg-[#64ffda] opacity-20 group-hover:opacity-0 transition-opacity"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
