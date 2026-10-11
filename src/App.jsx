import  { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

import profileimg from "/profileimg.png";
import p3 from "/p3.png";
import p4 from "/p4.png";
import codingsavvy from "/codingsavvvy.png";
import celebal from "/celebal.png";
import cisco from "/ciscocyber.png";
import postman from "/postmanapi.png";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const GITHUB_PROFILE = "https://github.com/Gautami-11";
const LINKEDIN_PROFILE =
  "https://www.linkedin.com/in/gautami-parkad-b533712ab";
const LEETCODE_PROFILE = "https://leetcode.com/u/GAUTAMI_11/"; 
const ProjectCard = ({
  image,
  title,
  stack,
  description,
  github,
  live,
}) => (
  <div className="border-2 border-green-700 p-6 rounded-lg hover:scale-[1.02] transition-transform shadow-lg shadow-green-500/30">
    {image ? (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
    ) : (
      <div className="w-full h-48 rounded-md border border-green-700 flex items-center justify-center bg-green-950/20">
        <span className="text-5xl text-green-500">&lt;/&gt;</span>
      </div>
    )}

    <h3 className="text-xl font-bold mt-4">{title}</h3>

    <div className="flex flex-wrap gap-2 mt-3 font-mono">
      {stack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-green-900/30 border border-green-400 text-green-400 rounded-md"
        >
          {tech}
        </span>
      ))}
    </div>

    <p className="mt-3 text-green-700 text-sm leading-relaxed">
      {description}
    </p>

    <div className="flex flex-wrap gap-3 mt-4">
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-green-700 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition"
        >
          <FaGithub />
          GitHub
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 border border-green-800 text-green-700 px-4 py-2 rounded text-sm">
          GitHub link pending
        </span>
      )}

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-green-700 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition"
        >
          <FaExternalLinkAlt />
          Live
        </a>
      )}
    </div>
  </div>
);

const commands = {
  help: `Available commands: help, aboutme, projects, education, skills, internships, certificates, contact`,

  aboutme: (
    <div className="px-3 py-4 bg-green-900/30 border border-green-400 text-green-400 rounded-md leading-relaxed">
      Recent B.E. Information Technology graduate and full-stack developer with
      hands-on experience across React.js, Node.js, Python, Firebase, and REST
      APIs. Comfortable working with databases, cloud-backed services, and API
      integrations, with a strong analytical foundation from 150+ solved
      LeetCode problems.
      <br />
      <br />
      I enjoy building scalable, user-focused applications and learning new
      technologies through projects, internships, and continuous practice.
    </div>
  ),

  projects: (
    <div className="mt-8 px-4 md:px-6 mb-10">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-green-500 inline-block">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          image={p3}
          title="ShipNTrack - Full-Stack Web App"
          stack={["React.js", "Firebase", "REST APIs"]}
          description="Built role-based admin and user dashboards with Firebase authentication and a real-time database, enabling live shipment status updates across multiple concurrent users."
          github="https://github.com/Gautami-11/ShipNTrack"
        />

        <ProjectCard
          title="Smart Campus - AI-Powered Platform"
          stack={["React.js", "Python", "REST APIs"]}
          description="Designed an AI-powered platform to improve academic efficiency, personalization, and data-driven decision-making for students, faculty, and administrators."
          github={null}
        />

        <ProjectCard
          title="Research Paper Assistant - RAG System"
          stack={["Python", "RAG"]}
          description="Built a retrieval-augmented generation system that processes research PDFs, generates summaries, and answers user queries, reducing the manual effort required to understand lengthy papers."
          github={null}
        />

        <ProjectCard
          image={p4}
          title="Speech-to-Text POS Tagging"
          stack={[
            "Python",
            "NLTK",
            "SpaCy",
            "Speech Recognition API",
          ]}
          description="Converted real-time speech to text and performed part-of-speech tagging for grammatical and linguistic analysis using NLP techniques."
          github="https://github.com/Gautami-11/SPEECH-TO-TEXT-POS-TAGGING"
        />

        <ProjectCard
          title="Developer Portfolio"
          stack={["React.js", "Tailwind CSS", "EmailJS"]}
          description="Designed and deployed a terminal-style personal portfolio with interactive CLI navigation and integrated contact functionality through EmailJS."
          github="https://github.com/Gautami-11/myPortfolio"
          live="https://my-portfolio-sigma-peach-12.vercel.app/"
        />
      </div>
    </div>
  ),

  education: (
    <div className="max-w-5xl mx-auto px-4 mb-10 font-mono text-green-400">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-green-500 inline-block">
        Education
      </h2>

      <div className="space-y-5">
        <div className="border border-green-500 rounded-xl p-5 shadow-lg shadow-green-500/20">
          <h3 className="text-xl font-semibold">
            B.E. Information Technology
          </h3>
          <p className="text-green-300">
            RMD Sinhgad College of Engineering | 2022 – 2026
          </p>
          <p className="mt-2">CGPA: 8.92/10</p>
        </div>

        <div className="border border-green-500 rounded-xl p-5 shadow-lg shadow-green-500/20">
          <h3 className="text-xl font-semibold">
            HSC (12th) - Science
          </h3>
          <p className="text-green-300">
            NMV Girls High School & Jr. College | 2022
          </p>
          <p className="mt-2">Percentage: 77.5%</p>
        </div>

        <div className="border border-green-500 rounded-xl p-5 shadow-lg shadow-green-500/20">
          <h3 className="text-xl font-semibold">
            SSC (10th)
          </h3>
          <p className="text-green-300">
            Muktangan English School & Jr. College | 2020
          </p>
          <p className="mt-2">Percentage: 91.8%</p>
        </div>
      </div>
    </div>
  ),

  skills: (
    <div className="p-4 bg-black text-green-400 font-mono rounded-lg border border-green-500">
      <h2 className="text-2xl font-bold mb-5">Technical Skills</h2>

      <div className="space-y-4">
        <div>
          <p className="font-bold text-green-300 mb-2">Languages</p>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-900/30 border border-green-400 rounded-md"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <p className="font-bold text-green-300 mb-2">Web & Frontend</p>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Bootstrap", "Tailwind CSS", "Vite"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-green-900/30 border border-green-400 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold text-green-300 mb-2">Backend & APIs</p>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express.js", "REST API", "Axios", "Uvicorn"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-900/30 border border-green-400 rounded-md"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <p className="font-bold text-green-300 mb-2">Databases & Cloud</p>
          <div className="flex flex-wrap gap-2">
            {["Firebase", "SQL", "MongoDB"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-green-900/30 border border-green-400 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold text-green-300 mb-2">Tools & Practices</p>
          <div className="flex flex-wrap gap-2">
            {["Git/GitHub", "OOP", "Postman"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-green-900/30 border border-green-400 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold text-green-300 mb-2">AI & ML Tools</p>
          <div className="flex flex-wrap gap-2">
            {["RAG", "NLTK", "SpaCy"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-green-900/30 border border-green-400 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  internships: (
    <div className="max-w-6xl mx-auto px-4 mb-10 font-mono text-green-400">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-green-500 inline-block">
        Internships
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-green-500 rounded-xl hover:scale-[1.02] transition-transform overflow-hidden shadow-lg shadow-green-500/30">
          <img
            src={celebal}
            alt="Celebal Technologies"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-green-400">
              Frontend Developer Intern | Celebal Technologies
            </h3>
            <p className="text-sm text-green-300">Jun 2025 – Aug 2025</p>
            <p className="mt-3 leading-relaxed">
              Built and enhanced production React.js applications in a remote,
              cross-functional environment, implementing reusable UI components
              and managing application state.
              <br />
              <br />
              Improved UI performance and maintainability by applying
              component-based architecture and frontend best practices.
            </p>
          </div>
        </div>

        <div className="border border-green-500 rounded-xl hover:scale-[1.02] transition-transform overflow-hidden shadow-lg shadow-green-500/30">
          <img
            src={codingsavvy}
            alt="Coding Savvy"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-green-400">
              Frontend Developer Intern | Coding Savvy
            </h3>
            <p className="text-sm text-green-300">Dec 2024 – Jan 2025</p>
            <p className="mt-3 leading-relaxed">
              Designed responsive UI components for the Ghar Contractor web
              project using HTML, CSS, Bootstrap, and React.
              <br />
              <br />
              Collaborated with a distributed team via GitHub on version
              control, code reviews, and feature delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  certificates: (
    <div className="max-w-6xl mx-auto px-4 mb-10 font-mono text-green-400">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-green-500 inline-block">
        Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-green-500 rounded-xl overflow-hidden shadow-lg shadow-green-500/30">
          <img
            src={cisco}
            alt="Cisco Introduction to Cybersecurity"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">
              Introduction to Cybersecurity
            </h3>
            <p className="mt-3">
              Cisco Networking Academy — threat analysis, network security, and
              encryption basics.
            </p>
          </div>
        </div>

        <div className="border border-green-500 rounded-xl overflow-hidden shadow-lg shadow-green-500/30">
          <img
            src={postman}
            alt="Postman API Fundamentals Student Expert"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">
              Postman API Fundamentals Student Expert
            </h3>
            <p className="mt-3">
              RESTful API design, testing, and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  contact: (
    <div className="border m-2 border-green-500 p-4 font-mono rounded-lg">
      <p className="px-3 py-2 m-3 bg-green-900/30 border border-green-400 rounded-md">
        Email:{" "}
        <a
          href="mailto:gautamiparkad.rmdstic.it@gmail.com"
          className="font-bold hover:text-blue-400"
        >
          gautamiparkad.rmdstic.it@gmail.com
        </a>
      </p>

      <p className="px-3 py-2 m-3 bg-green-900/30 border border-green-400 rounded-md">
        LinkedIn:{" "}
        <a
          href={LINKEDIN_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Gautami Parkad
        </a>
      </p>

      <p className="px-3 py-2 m-3 bg-green-900/30 border border-green-400 rounded-md">
        GitHub:{" "}
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Gautami-11
        </a>
      </p>

      <p className="px-3 py-2 m-3 bg-green-900/30 border border-green-400 rounded-md">
        LeetCode:{" "}
        <a
          href={LEETCODE_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Profile
        </a>
      </p>

      <p className="mt-5">
        Interested in connecting? Just type{" "}
        <span className="text-blue-300">'interested'</span> and hit Enter.
      </p>
    </div>
  ),
};

export default function App() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleCommand = async (cmd) => {
    const command = cmd.trim().toLowerCase();
    if (!command) return;

    if (isSending) {
      setIsSending(false);

      try {
        await emailjs.send(
          serviceId,
          templateId,
          { from_name: "Portfolio Visitor", message: cmd },
          publicKey
        );

        setHistory((prev) => [
          ...prev,
          { cmd, response: "Message sent successfully." },
        ]);
      } catch (error) {
        setHistory((prev) => [
          ...prev,
          {
            cmd,
            response: `Failed to send message: ${
              error.text || error.message
            }`,
          },
        ]);
      }

      setInput("");
      return;
    }

    if (cmd === "interested") {
  setIsSending(true);

  setHistory((prev) => [
    ...prev,
    {
      cmd,
      response: "Write your message and press Enter to send:",
    },
  ]);

  setInput("");
  return; 
}

    const response =
      commands[command] || "Command not found. Type 'help' for options.";

    setHistory((prev) => [...prev, { cmd, response }]);
    setInput("");
  };

  return (
    <div className="h-screen overflow-y-auto custom-scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-gray-100 flex flex-col items-center justify-center p-6 min-h-[40vh] md:min-h-full text-center border border-green-600">
          <div className="w-42 h-42 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl shadow-blue-300 border-4 border-white mb-4">
            <img
              src={profileimg}
              alt="Gautami Parkad"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="mt-4 text-3xl font-bold text-blue-800 animate-pulse tracking-widest">
            &gt; Gautami<span>_</span>
          </h1>

          <p className="text-lg mt-1 mb-9 text-gray-900 font-mono animate-pulse tracking-wide">
            Full Stack Developer | AI Enthusiast | Problem Solver
          </p>

          <div className="mb-3 text-green-500 font-bold tracking-widest text-2xl border-b border-green-500/30 pb-1">
            $ Code. Create. Innovate.
          </div>

          <hr className="my-4 w-16" />

          <p className="text-gray-800 text-lg leading-relaxed">
            Full-stack developer with hands-on experience in React.js, Node.js,
            Python, Firebase, REST APIs, and database-driven applications.
            Passionate about solving real-world problems through clean,
            scalable software.
          </p>

          <div className="mt-4 p-2 flex flex-wrap justify-center gap-3">
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded hover:bg-gray-700 shadow-gray-500 shadow-xl transition"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>

            <a
              href={LINKEDIN_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 shadow-blue-300 shadow-xl transition"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>

            <a
              href={LEETCODE_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-500 shadow-orange-300 shadow-xl transition"
            >
              <FaCode className="text-lg" />
              LeetCode
            </a>
          </div>
        </div>

        <div className="bg-black col-span-1 md:col-span-2 overflow-y-auto custom-scrollbar-hide text-green-400 font-mono min-h-screen md:h-screen flex flex-col justify-start p-2 sm:p-4 text-sm sm:text-base">
          <div className="font-mono text-green-400 bg-black">
            <div className="flex flex-row items-start justify-start">
              <div className="w-5 h-5 bg-red-500 rounded-full mr-2"></div>
              <div className="w-5 h-5 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              <span className="ml-4.5 text-xl text-yellow-200">
                gautami@portfolio:~
              </span>
            </div>

            <div className="mt-4">
              $ gautami --about --projects --education --skills
              <br />
              Tip: Just type{" "}
              <span className="blink-text">'help'</span> for a guided tour.
            </div>
          </div>

          <div className="max-w-5xl mb-1">
            {history.map((h, i) => (
              <div key={i} className="mb-3">
                <div>$ {h.cmd}</div>
                <div className="whitespace-pre-wrap">{h.response}</div>
              </div>
            ))}

            <div className="flex items-center">
              <span>$ </span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleCommand(input)
                }
                className="outline-none text-green-300 flex-1 bg-transparent ml-2"
                autoFocus
                aria-label="Terminal command input"
              />
              <span className="cursor-blink"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
