import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
      <footer className="py-6 bg-gray-900 text-gray-400 w-full">
        <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center text-center">
          <div className="flex gap-4 mb-4">
            <a href="https://github.com/jocalvinshua" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/joshua-calvin-12a7a2319" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-300">Joshua Calvin</span>. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }