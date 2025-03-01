import { Github, Linkedin, Instagram, } from "lucide-react";
export default function Header() {
    return (
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] -z-10" />
        <div className="container mx-auto px-4 py-16 text-center">
          <img
            src="profile_img.jpg"
            alt="Profile of Joshua Calvin"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Joshua Calvin</h1>
          <p className="text-xl text-gray-600 mb-8">Full Stack Developer & Data Analytic</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/jocalvinshua"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Github Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-calvin-12a7a2319"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Send Email"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>
    );
  }
