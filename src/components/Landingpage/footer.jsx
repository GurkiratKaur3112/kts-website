
"use client";
import { useState } from "react";
import { ChevronRight, Mail, Phone, Github, Linkedin, Twitter , Instagram } from "lucide-react";

// People data
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3534&q=80",
  },
];

// Simple tooltip component to replace AnimatedTooltip
const SimpleTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-wrap -space-x-2">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative h-8 w-8 rounded-full border-2 border-gray-800 transition duration-300 hover:scale-110 hover:z-10">
            <img 
              src={item.image || "/placeholder.svg"} 
              alt={item.name} 
              className="rounded-full object-cover h-full w-full"
            />
          </div>

          {hoveredIndex === idx && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10 min-w-max">
              <div className="bg-gray-800 text-white text-xs rounded-md py-1 px-2 shadow-lg">
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-300 text-xs">{item.designation}</p>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-indigo-950 text-white py-16 px-5 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Top Section with Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-black rounded-full p-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">KTS</span>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              KTS
            </h2>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/Kinesis-Technical-Society" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Github className="h-5 w-5 text-gray-300 hover:text-white" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/company/kinesis-technical-society/" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/kinesis_technical_society/" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://x.com/kts_kiet" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Section - Logo & Paragraph */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis
              aliquam ut porttitor
            </p>

            {/* Tooltip of Contributors */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Our Amazing Contributors</p>
              <SimpleTooltip items={people} />
            </div>
          </div>

          {/* Middle Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">ABOUT</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 opacity-70"></span>
            </h3>
            <ul className="space-y-3">
              {["Message", "Team", "Functioning"].map((item) => (
                <li
                  key={item}
                  className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
        
                  <a href="#" className="text-sm hover:translate-x-1 transition-transform duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">PROJECTS</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 opacity-70"></span>
            </h3>
            <ul className="space-y-3">
              {["WEB Dev", "Android Dev", "Machine Learning", "UI/UX"].map((item) => (
                <li
                  key={item}
                  className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                 
                  <a href="#" className="text-sm hover:translate-x-1 transition-transform duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">CONTACT</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 opacity-70"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300 hover:text-white transition-col ors duration-200">
                <Phone className="h-4 w-4 mr-3 text-amber-500" />
                <span className="text-sm">+123456789</span>
              </li>
              <li className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="h-4 w-4 mr-3 text-amber-500" />
                <span className="text-sm">ktskiet@gmail.com</span>
              </li>
            </ul>

            
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col ">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} KTS. All rights reserved.</p>
        <p className="text-xs text-gray-500 mt-1">Designed with ❤️ by the KTS team</p>
        </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;