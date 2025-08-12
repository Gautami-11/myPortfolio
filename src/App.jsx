import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const commands = {
  help: `Available commands: help, aboutme, projects, skills, contact, internships , certificates `,
  aboutme: `I am a passionate and versatile Full-Stack Developer with a strong foundation in building modern, scalable, and user-focused web applications. My journey blends academic learning with practical, hands-on experience gained through impactful projects and internships.

I have developed diverse applications ranging from responsive dashboards with customizable themes and analytics, to music discovery platforms powered by real-time API integrations, to shipment tracking systems with Firebase authentication and live database updates. My work also spans into AI and NLP with speech-to-text and part-of-speech tagging solutions.

My technical toolkit includes React.js, Tailwind CSS, Node.js, Express.js, MongoDB, SQL, Java, and GitHub, backed by experience in integrating APIs, managing databases, and designing intuitive interfaces.

Driven by curiosity and a growth mindset, I thrive in transforming complex problems into clean, efficient, and impactful solutions — always with a focus on performance, usability, and innovation.
`,
  projects: (
    <div className="mt-8 px-6 mb-10">
     <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
       Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dashboard Project */}
        <div className="bg-white p-5 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <img
            src="/p1.png"
            alt="Dashboard"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-bold  mt-4">DASHBOARD</h3>
          <p className=" mt-2 text-black text-sm leading-relaxed">
            <strong>Key Skills:</strong> ReactJS, Tailwind CSS <br />
            Developed a responsive React Admin Dashboard with customizable
            themes, interactive tables, charts, calendar, and Kanban board.
          </p>
          <a
            href="https://github.com/Gautami-11/DASHBOARD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            View Project
          </a>
        </div>

        {/* Musico Project */}
        <div className="bg-white p-5 rounded-lg  hover:scale-105 transition-transform">
          <img
            src="/p2.png"
            alt="Musico"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-bold  mt-4">
            Musico - Music Discovery Web App
          </h3>
          <p className=" mt-2 text-sm text-black leading-relaxed">
            <strong>Key Skills:</strong> ReactJS, Axios, Node.js, Express.js,
            Spotify API <br />
            Built a responsive music discovery app with Discover, Search, and
            Playlist views, real-time song fetching, and seamless API
            integration.
          </p>
          <a
            href="https://github.com/Gautami-11/Musico.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            View Project
          </a>
        </div>

        {/* ShipNTrack Project */}
        <div className="bg-white p-5 rounded-lg  hover:scale-105 transition-transform">
          <img
            src="/p3.png"
            alt="ShipNTrack"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-bold  mt-4">
            {" "}
            ShipNTrack - Shipment Tracking App
          </h3>
          <p className=" mt-2 text-black text-sm leading-relaxed">
            <strong>Key Skills:</strong> React, Tailwind CSS, Firebase <br />
            Shipment tracking app with <strong>Admin</strong> and{" "}
            <strong>User</strong> dashboards, Firebase authentication, and
            realtime database integration for creating, managing, and tracking
            shipments.
          </p>
          <a
            href="https://github.com/Gautami-11/ShipNTrack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            View Project
          </a>
        </div>

        {/* Speech-to-Text POS Tagging */}
        <div className="bg-white p-6 rounded-lg hover:scale-105 transition-transform ">
          <img
            src="/p4.png"
            alt="SpeechPosimg"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-bold mt-4">
            {" "}
            Speech-to-Text POS Tagging
          </h3>
          <p className=" mt-2 text-black text-sm leading-relaxed">
            {" "}
            NLP-based project that converts spoken input into text and performs
            Part-of-Speech tagging to identify grammatical components.
            Integrates speech recognition API for accurate transcription and
            uses NLTK/SpaCy for linguistic analysis.
          </p>
          <a
            href="https://github.com/Gautami-11/SPEECH-TO-TEXT-POS-TAGGING"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  ),
  skills: ` GitHub ,TailwindCSS , React Js, Node.js, Express Js , SQL , MongoDB, Java , ...`,
  contact: (
    <div>
      <p className="text-green-400">
        Email:{" "}
        <a
          href="mailto:gautami@example.com"
          className="font-bold hover:text-blue-600 transition-colors duration-200"
        >
          gautami1154@gmail.com
        </a>
      </p>

      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/gautami-parkad-b533712ab"
          target="_blank"
          rel="noopener noreferrer"
          className="underline  hover:text-blue-600"
        >
          https://www.linkedin.com/in/gautami-parkad-b533712ab
        </a>
      </p>
      <p>
        Interested in connecting? Just type{" "}
        <span className="text-blue-300">'interested'</span> and hit Enter.
      </p>
    </div>
  ),

  certificates: (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
        Certifactes
      </h2>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cisco Cybersecurity */}
        <div className="bg-white rounded-xl  hover:scale-105 transition-transform overflow-hidden">
          <img
            src="ciscocyber.png"
            alt="Cisco Certificate"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">
              Introduction to Cybersecurity
            </h3>
            <p className="mt-3 text-gray-700">
              Earned certificate from Cisco Networking Academy's " Introduction
              to Cybersecurity" course. Gained skills in threat analysis,
              network security, and best cybersecurity practices{" "}
            </p>
          </div>
        </div>

        {/*postman api */}
        <div className="bg-white rounded-xl  hover:scale-105 transition-transform overflow-hidden">
          <img
            src="postmanapi.png"
            alt="postman api Certificate"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">
              Postman API Fundamentals Student Expert Certification
            </h3>
            <p className="mt-3 text-gray-700">
              Gained hands-on experience in building, testing and understanding
              working of RESTful APIs including environments, collections, HTTPS
              methods ,status code .{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  internships: (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
        Internships
      </h2>

      {/* Internship Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Celebal Technologies */}
        <div className="bg-white rounded-xl  hover:scale-105 transition-transform overflow-hidden">
          <img
            src="celebal.png"
            alt="Celebal Technologies Certificate"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">
              CELEBAL TECHNOLOGIES | IT Product & Services
            </h3>
            <p className="text-gray-600 text-sm">02 Jun, 2025 - 03 Aug, 2025</p>
            <p className="mt-3 text-gray-700">
              <strong>Role:</strong> Frontend Developer <br />
              <strong>Key Skills:</strong> React.js <br />
              Currently working on practical, industry-relevant projects using
              React JS. Enhancing frontend development skills through hands-on
              experience in a remote setup. Focusing on building real-world
              applications and strengthening core web development knowledge.
            </p>
          </div>
        </div>

        {/* Sanyu Infotech */}
        <div className="bg-white rounded-xl  hover:scale-105 transition-transform overflow-hidden">
          <img
            src="sanyu.png"
            alt="Sanyu Infotech Certificate"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">Sanyu Infotech Pvt Ltd</h3>
            <p className="text-gray-600 text-sm">23 Dec, 2024 - 07 Feb, 2025</p>
            <p className="mt-3 text-gray-700">
              Gained hands-on experience in Core Java, Advanced Java, Database
              Management, Frontend technologies, and insights about AWS and
              DevOps.
            </p>
          </div>
        </div>

        {/* Coding Savvy */}
        <div className="bg-white rounded-xl  hover:scale-105 transition-transform overflow-hidden">
          <img
            src="codingsavvvy.png"
            alt="Coding Savvy Certificate"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">Coding Savvy</h3>
            <p className="text-gray-600 text-sm">21 Dec, 2024 - 21 Jan, 2025</p>
            <p className="mt-3 text-gray-700">
              <strong>Key Skills:</strong> HTML, CSS, Bootstrap, React, GitHub{" "}
              <br />
              Completed a live project focused on frontend development and
              gained hands-on experience while contributing to the "Ghar
              Contractor" web project, collaborating on UI design.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default function App() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleCommand = async (cmd) => {
    if (cmd.trim() === "") return;

    // Enter send mode
    if (cmd === "interested") {
      setIsSending(true);
      setHistory((prev) => [
        ...prev,
        { cmd, response: "Write your message and press Enter to send:" },
      ]);
      setInput("");
      return;
    }

    //   send the typed message
    if (isSending) {
      setIsSending(false); // exit send mode immediately
      try {
        await emailjs.send(
          serviceId,
          templateId,
          { from_name: "Portfolio Visitor", message: cmd },
          publicKey
        );
        setHistory((prev) => [
          ...prev,
          { cmd, response: " Message sent successfully" },
        ]);
      } catch (error) {
        setHistory((prev) => [
          ...prev,
          {
            cmd,
            response: ` Failed to send message: ${error.text || error.message}`,
          },
        ]);
      }
      setInput("");
      return;
    }

    //   parse commands if not in send mode
    if (cmd === "interested") {
      setIsSending(true);
      setHistory((prev) => [
        ...prev,
        { cmd, response: "Write your message and press Enter to send:" },
      ]);
      setInput("");
      return;
    }

    // Normal commands
    const response =
      commands[cmd] || "Command not found. Type 'help' for options.";
    setHistory((prev) => [...prev, { cmd, response }]);
    setInput("");
  };

  return (
    <div className="h-screen overflow-y-auto custom-scrollbar-hide bg-gray-900">
      <div className=" grid grid-cols-1 md:grid-cols-3   mx-auto">

        {/* col 1 */}
        <div className="bg-gray-100 flex flex-col items-center justify-center p-6  min-h-[40vh] md:min-h-full text-center">
          {/* Profile Image */}
          <div className="w-42 h-42 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl shadow-blue-300  border-4 border-white mb-4">
            <img
              src="/profileimg.png"
              alt="Gautami"
              className="w-full h-full object-cover"
            />
          </div>

      

           {/* Animated Name */}
  <h1 className="mt-4  text-3xl font-bold text-sky-700 animate-pulse tracking-widest">
    &gt; Gautami<span>_</span>
  </h1>
  <p className="text-lg mt-1 mb-9 text-gray-900 font-mono animate-pulse tracking-wide">
    Full Stack Dev | AI Enthusiast | Problem Solver
  </p>


          {/* Glow Header */}
  <div className="mb-3 text-green-400 font-bold tracking-wider text-2xl border-b border-green-500/30 pb-1">
$  Code. Create. Innovate.
  </div>   
   
          <hr className="my-4 w-16 " />
          <p className="text-gray-800 text-lg leading-relaxed">
            Passionate about building interactive web applications and
            learning AI to solve real-world problems. Skilled in React,
            Node.js, and modern development practices.
          </p>
          <div className="mt-4 p-2 flex gap-3">
            <a
              href="https://github.com/Gautami-11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-3 py-1 rounded hover:bg-black transition"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gautami-parkad-b533712ab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* col-2 */}
        <div className="bg-black col-span-1 md:col-span-2 overflow-y-auto custom-scrollbar-hide text-green-400 font-mono min-h-screen md:h-screen flex flex-col justify-start p-2 sm:p-4 text-sm sm:text-base">
          <div className="p-2 font-mono text-green-400 bg-black">
            $ gautami --about --projects --skills Tip: Just type{" "}
            <span className="blink-text">'help'</span> for a guided tour.
          </div>

          <div className="max-w-3xl p-2">
            {history.map((h, i) => (
              <div key={i} className="mb-2">
                <div>$ {h.cmd}</div>
                <div className="whitespace-pre-wrap">{h.response}</div>
              </div>
            ))}
            <div className="flex">
              <span className="">$ </span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
                className=" outline-none  text-green-300 flex-11/12 md:w-full"
                autoFocus
              />
              <span className="cursor-blink"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
